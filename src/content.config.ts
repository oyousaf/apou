import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const packages = defineCollection({
  loader: file("src/data/packages.json"),
  schema: z.object({
    service: z.enum(["weddings", "portraits", "sessions"]),
    name: z.string(),
    price: z.number(),
    from: z.boolean().default(false),
    summary: z.string(),
    includes: z.array(z.string()),
    extras: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: file("src/data/testimonials.json"),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    context: z.string().optional(),
  }),
});

export const collections = { packages, testimonials };
