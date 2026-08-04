import styles from "../styles/marketing.module.css";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
  inverse?: boolean;
}) {
  return (
    <header className={`${styles.sectionHeading} ${align === "center" ? styles.sectionHeadingCenter : ""} ${inverse ? styles.sectionHeadingInverse : ""}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </header>
  );
}
