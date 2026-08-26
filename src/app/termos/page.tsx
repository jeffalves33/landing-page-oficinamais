import type { Metadata } from "next";
import { LegalPage, legalMetadata } from "@/features/marketing/components/LegalPage";
import { marketingConfig } from "@/features/marketing/data/config";
import { termsSections } from "@/features/marketing/data/legal";

export const metadata: Metadata = legalMetadata.terms;
export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Regras do serviço"
      title="Termos de Uso"
      intro="As condições essenciais para usar o Oficina Mais com segurança e transparência."
      updatedAt="25 de agosto de 2026"
      sections={termsSections}
      contact={{
        title: "Ficou com alguma dúvida?",
        description: "Fale com o suporte antes de contratar ou sempre que precisar esclarecer estes Termos.",
        email: marketingConfig.supportEmail,
        actionLabel: "Falar com o suporte",
        subject: "Dúvida sobre os Termos de Uso — Oficina Mais",
      }}
    />
  );
}
