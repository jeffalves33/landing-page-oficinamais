import type { Metadata } from "next";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "../styles/marketing.module.css";

export type LegalSection = {
  id?: string;
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
};

type LegalContact = {
  title: string;
  description: string;
  email?: string;
  actionLabel?: string;
  subject?: string;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updatedAt,
  sections,
  contact,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt: string;
  sections: readonly LegalSection[];
  contact?: LegalContact;
}) {
  return (
    <div className={styles.marketingRoot}>
      <Header />
      <main className={styles.legalMain}>
        <div className={styles.legalHero}>
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <small>Última atualização: {updatedAt}.</small>
        </div>
        <div className={styles.legalLayout}>
          <aside aria-label="Índice da página">
            <b>Nesta página</b>
            {sections.map((section, index) => (
              <a href={`#${section.id ?? `secao-${index + 1}`}`} key={section.title}>
                {section.title.replace(/^\d+\.\s*/, "")}
              </a>
            ))}
          </aside>
          <article>
            {sections.map((section, index) => (
              <section id={section.id ?? `secao-${index + 1}`} key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items?.length ? <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              </section>
            ))}
            {contact ? (
              <div className={styles.legalContact} id="contato">
                <div>
                  <strong>{contact.title}</strong>
                  <p>{contact.description}</p>
                </div>
                {contact.email ? (
                  <a href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.subject ?? "Contato pelo site Oficina Mais")}`}>
                    {contact.actionLabel ?? contact.email}
                  </a>
                ) : (
                  <span>Use o canal de suporte disponível no Oficina Mais.</span>
                )}
              </div>
            ) : null}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const legalMetadata: Record<"terms" | "privacy" | "deletion", Metadata> = {
  terms: {
    title: "Termos de Uso",
    description: "Termos gerais para utilização do Oficina Mais.",
    alternates: { canonical: "/termos" },
  },
  privacy: {
    title: "Política de Privacidade",
    description: "Como o Oficina Mais coleta, usa, protege, compartilha e exclui dados pessoais.",
    alternates: { canonical: "/privacidade" },
  },
  deletion: {
    title: "Exclusão de Conta e Dados",
    description: "Como solicitar a exclusão de uma conta e dos dados associados no Oficina Mais.",
    alternates: { canonical: "/excluir-conta" },
  },
};
