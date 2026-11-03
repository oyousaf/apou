import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } from "astro:env/server";
import { Resend } from "resend";

export const enquiryTypes = [
  "Wedding",
  "Portrait session",
  "Newborn session",
  "APY Session",
  "Studio service",
  "Something else",
] as const;

const MIN_FILL_MS = 2500;

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().trim().min(2, "Please tell us your name").max(80),
      email: z.email("Please enter a valid email address").max(320),
      phone: z.string().trim().max(30).optional(),
      enquiry: z.enum(enquiryTypes, { error: "Please choose what you're enquiring about" }),
      date: z.string().trim().max(40).optional(),
      message: z.string().trim().min(10, "Please add a few more details").max(3000),
      // Spam traps: a hidden field bots fill in, and a render timestamp.
      company: z.string().max(0).optional(),
      ts: z.coerce.number(),
    }),
    handler: async ({ name, email, phone, enquiry, date, message, ts }) => {
      if (Date.now() - ts < MIN_FILL_MS) {
        throw new ActionError({ code: "BAD_REQUEST", message: "Please try sending that again." });
      }

      const text = [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Enquiry: ${enquiry}`,
        date ? `Date: ${date}` : null,
        "",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n");

      if (!RESEND_API_KEY) {
        console.info("[contact] RESEND_API_KEY not set, logging enquiry instead:\n" + text);
        return { ok: true };
      }

      const { error } = await new Resend(RESEND_API_KEY).emails.send({
        from: CONTACT_FROM,
        to: CONTACT_TO,
        replyTo: email,
        subject: `New ${enquiry.toLowerCase()} enquiry from ${name}`,
        text,
      });

      if (error) {
        console.error("[contact] Resend error", error);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Sorry, your message couldn't be sent. Please call or email instead.",
        });
      }

      return { ok: true };
    },
  }),
};
