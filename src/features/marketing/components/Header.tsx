"use client";

import { useEffect, useState } from "react";
import { navigation } from "../data/content";
import { marketingConfig } from "../data/config";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import styles from "../styles/marketing.module.css";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <Logo />
        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {navigation.map((item) => <a className={styles.navLink} href={item.href} key={item.label}>{item.label}</a>)}
        </nav>
        <div className={styles.headerActions}>
          <a className={styles.loginLink} href={marketingConfig.routes.login}>Entrar</a>
          <a className={styles.headerCta} href={marketingConfig.routes.signup}>Criar minha conta <Icon name="arrow"/></a>
        </div>
        <button className={styles.mobileMenuButton} type="button" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}><Icon name={mobileOpen ? "close" : "menu"}/></button>
      </div>
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`} aria-hidden={!mobileOpen}>
        <div className={styles.mobileMenuInner}>
          <nav aria-label="Navegação mobile">{navigation.map((item) => <a href={item.href} key={item.label} onClick={() => setMobileOpen(false)}>{item.label}<Icon name="arrow"/></a>)}</nav>
          <div className={styles.mobileMenuActions}><a href={marketingConfig.routes.login}>Entrar</a><a href={marketingConfig.routes.signup}>Criar minha conta</a></div>
        </div>
      </div>
    </header>
  );
}
