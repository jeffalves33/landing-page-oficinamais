import type { Metadata } from "next";
import { LegalPage, legalMetadata } from "@/features/marketing/components/LegalPage";
import { marketingConfig } from "@/features/marketing/data/config";
import { privacySections } from "@/features/marketing/data/legal";

export const metadata: Metadata = legalMetadata.privacy;

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacidade no Oficina Mais"
      title="Política de Privacidade"
      intro="Entenda quais dados usamos para operar o Oficina Mais, por que precisamos deles e como você pode exercer seus direitos."
      updatedAt="25 de agosto de 2026"
      sections={privacySections}
      contact={{
        title: "Fale sobre privacidade",
        description: "Envie dúvidas ou solicitações relacionadas aos seus dados usando o e-mail vinculado à sua conta.",
        email: marketingConfig.supportEmail,
        actionLabel: "Enviar solicitação",
        subject: "Privacidade e dados — Oficina Mais",
      }}
    />
  );
}
