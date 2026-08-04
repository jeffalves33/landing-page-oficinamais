import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Oficina Mais",
    template: "%s | Oficina Mais",
  },
  description: "Organize clientes, veículos, serviços, produtos, estoque, ordens de serviço e manutenções em uma plataforma simples e segura.",
  applicationName: "Oficina Mais",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Oficina Mais",
    title: "Oficina Mais | Sua oficina mais organizada",
    description: "Tudo o que sua oficina precisa para trabalhar com mais organização, segurança e profissionalismo.",
    images: [{ url: "/marketing/images/og-oficina-mais.png", width: 1200, height: 630, alt: "Oficina Mais em computador e celular" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oficina Mais | Gestão simples e segura para oficinas",
    description: "Clientes, veículos, estoque, ordens de serviço e manutenções em um só lugar.",
    images: ["/marketing/images/og-oficina-mais.png"],
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/marketing/images/brand-mark.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
