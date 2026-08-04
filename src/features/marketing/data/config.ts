export const marketingConfig = {
  brand: "Oficina Mais",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "",
  routes: {
    home: "/",
    login: "/login",
    signup: "/criar-conta",
    terms: "/termos",
    privacy: "/privacidade",
  },
} as const;
