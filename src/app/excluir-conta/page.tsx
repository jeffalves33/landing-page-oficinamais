import type { Metadata } from "next";
import { LegalPage, legalMetadata } from "@/features/marketing/components/LegalPage";
import { marketingConfig } from "@/features/marketing/data/config";
import { deletionSections } from "@/features/marketing/data/legal";

export const metadata: Metadata = legalMetadata.deletion;

export default function AccountDeletionPage() {
  return (
    <LegalPage
      eyebrow="Controle dos seus dados"
      title="Exclusão de Conta e Dados"
      intro="Um caminho público para solicitar a exclusão da sua conta do Oficina Mais, mesmo que você não tenha mais o aplicativo instalado."
      updatedAt="25 de agosto de 2026"
      sections={deletionSections}
      contact={{
        title: "Solicitar exclusão",
        description: "Use o e-mail cadastrado na conta, informe o nome da oficina e diga se o pedido é individual ou da organização.",
        email: marketingConfig.supportEmail,
        actionLabel: "Iniciar solicitação",
        subject: "Solicitação de exclusão de conta — Oficina Mais",
      }}
    />
  );
}
