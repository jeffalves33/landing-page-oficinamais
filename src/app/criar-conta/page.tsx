import type { Metadata } from "next";
import { IntegrationPage } from "@/features/marketing/components/IntegrationPage";

export const metadata: Metadata = { title: "Criar conta", description: "Crie sua conta e comece a organizar sua oficina com o Oficina Mais.", robots: { index: false, follow: false } };
export default function SignupPage() { return <IntegrationPage mode="signup"/>; }
