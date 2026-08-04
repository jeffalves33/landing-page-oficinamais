import type { Metadata } from "next";
import { LegalPage, legalMetadata } from "@/features/marketing/components/LegalPage";
import { termsSections } from "@/features/marketing/data/legal";

export const metadata: Metadata = legalMetadata.terms;
export default function TermsPage() { return <LegalPage eyebrow="Documento legal" title="Termos de Uso" intro="Condições gerais para acesso e utilização do Oficina Mais." sections={termsSections}/>; }
