"use client";

import { useState } from "react";
import { faqs } from "../data/content";
import styles from "../styles/marketing.module.css";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className={styles.faqList}>
      {faqs.map((item, index) => {
        const expanded = open === index;
        return (
          <div className={`${styles.faqItem} ${expanded ? styles.faqItemOpen : ""}`} key={item.q}>
            <h3>
              <button type="button" aria-expanded={expanded} aria-controls={`faq-panel-${index}`} onClick={() => setOpen(expanded ? -1 : index)}>
                <span>{item.q}</span><i aria-hidden="true">{expanded ? "−" : "+"}</i>
              </button>
            </h3>
            <div id={`faq-panel-${index}`} className={styles.faqAnswer} hidden={!expanded}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
