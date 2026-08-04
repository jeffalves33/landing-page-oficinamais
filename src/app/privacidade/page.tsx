import type { Metadata } from "next";
import { LegalPage, legalMetadata } from "@/features/marketing/components/LegalPage";
import { privacySections } from "@/features/marketing/data/legal";

export const metadata: Metadata = legalMetadata.privacy;

export default function PrivacyPage() {
  return <LegalPage eyebrow="Documento legal" title="Política de Privacidade" intro="Uma base clara para explicar tratamento de dados, segurança e direitos." sections={privacySections} />;
}
