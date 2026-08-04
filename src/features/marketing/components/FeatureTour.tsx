"use client";

import { useEffect, useRef, useState } from "react";
import { tourSteps } from "../data/content";
import { Icon } from "./Icon";
import { ProductMockup } from "./ProductMockup";
import styles from "../styles/marketing.module.css";

const variants = ["customers", "orders", "stock"] as const;

export function FeatureTour() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observers = refs.current.map((node, index) => {
      if (!node) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { rootMargin: "-36% 0px -44% 0px", threshold: 0.01 },
      );
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <div className={styles.tourLayout}>
      <div className={styles.tourCopy}>
        {tourSteps.map((step, index) => (
          <article
            key={step.id}
            ref={(node: HTMLElement | null) => { refs.current[index] = node; }}
            className={`${styles.tourStep} ${active === index ? styles.tourStepActive : ""}`}
          >
            <span className={styles.stepNumber}>0{index + 1}</span>
            <div>
              <span className={styles.stepKicker}>{step.kicker}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <ul>{step.bullets.map((bullet) => <li key={bullet}><Icon name="check"/>{bullet}</li>)}</ul>
              <div className={styles.tourMobileMockup}><ProductMockup variant={variants[index]} compact /></div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.tourSticky} aria-live="polite">
        <div className={styles.tourGlow}/>
        <div className={styles.tourStageLabel}><span>{tourSteps[active].kicker}</span><b>0{active + 1} / 03</b></div>
        <div className={styles.tourStage}>
          {variants.map((variant, index) => (
            <div key={variant} className={`${styles.tourPanel} ${active === index ? styles.tourPanelActive : ""}`} aria-hidden={active !== index}>
              <ProductMockup variant={variant} />
            </div>
          ))}
        </div>
        <div className={styles.tourProgress}>{tourSteps.map((step, index) => <button type="button" key={step.id} aria-label={`Mostrar ${step.kicker}`} aria-current={active === index} onClick={() => refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })}><span style={{width: active >= index ? "100%" : "0%"}}/></button>)}</div>
      </div>
    </div>
  );
}
