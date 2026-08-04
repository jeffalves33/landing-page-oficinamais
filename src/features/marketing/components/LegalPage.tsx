import type { Metadata } from "next";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "../styles/marketing.module.css";

export type LegalSection = { title: string; paragraphs: readonly string[] };

export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: readonly LegalSection[] }) {
  return (
    <div className={styles.marketingRoot}>
      <Header />
      <main className={styles.legalMain}>
        <div className={styles.legalHero}>
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <small>Última atualização estrutural: 3 de agosto de 2026.</small>
        </div>
        <div className={styles.legalLayout}>
          <aside aria-label="Índice da página">
            <b>Nesta página</b>
            {sections.map((section, index) => <a href={`#secao-${index + 1}`} key={section.title}>{section.title.replace(/^\d+\.\s*/, "")}</a>)}
          </aside>
          <article>
            {sections.map((section, index) => <section id={`secao-${index + 1}`} key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const legalMetadata: Record<"terms" | "privacy", Metadata> = {
  terms: {
    title: "Termos de Uso",
    description: "Termos gerais para utilização do Oficina Mais.",
    alternates: { canonical: "/termos" },
  },
  privacy: {
    title: "Política de Privacidade",
    description: "Informações gerais sobre privacidade e tratamento de dados no Oficina Mais.",
    alternates: { canonical: "/privacidade" },
  },
};
