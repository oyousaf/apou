// Single source of truth for business details (NAP), navigation and external services.
// TODO(graham): confirm street number, postcode, opening hours and social handles.

export const site = {
  name: "A Picture of You",
  legalName: "A Picture of You Photography",
  photographer: "Graham Gibson",
  tagline: "Capturing life's special moments",
  description:
    "Wedding, portrait and newborn photographer on Station Road, Ossett, West Yorkshire. Studio services include passport photos, headshots, printing, framing and canvases.",
  phone: "07549 540187",
  phoneE164: "+447549540187",
  email: "graham@apictureofyou.co.uk",
  address: {
    street: "Station Road",
    locality: "Ossett",
    region: "West Yorkshire",
    postcode: "",
    country: "GB",
  },
  geo: { lat: 53.6787, lng: -1.5719 },
  areaServed: ["Ossett", "Wakefield", "Dewsbury", "Horbury", "Leeds", "West Yorkshire"],
  hours: [] as { days: string; opens: string; closes: string }[],
  links: {
    // Zenfolio keeps hosting private client galleries and print sales.
    clientGalleries: "https://www.apictureofyou.co.uk/client-login-area",
    shop: "https://apictureofyou.onlineweb.shop/",
    maps: "https://www.google.com/maps/search/?api=1&query=Station+Road+Ossett+WF5",
  },
} as const;

export const nav = [
  { href: "/weddings", label: "Weddings" },
  { href: "/portraits", label: "Portraits & Newborn" },
  { href: "/sessions", label: "APY Sessions" },
  { href: "/studio", label: "Studio" },
  { href: "/about", label: "About" },
] as const;

export const externalNav = [
  { href: site.links.clientGalleries, label: "Client galleries" },
  { href: site.links.shop, label: "Shop" },
] as const;
