import { marketingConfig } from "../data/config";
import { Logo } from "./Logo";
import styles from "../styles/marketing.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGlow} />
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Logo inverse />
          <p>Gestão simples e segura para oficinas organizarem clientes, veículos, estoque, ordens de serviço e manutenções.</p>
          <span>Mais organização para o dia a dia da sua oficina.</span>
        </div>
        <div className={styles.footerColumns}>
          <div><b>Produto</b><a href="#produto">Experiência</a><a href="#funcionalidades">Recursos</a><a href="#identidade">Identidade da oficina</a><a href="#planos">Plano único</a></div>
          <div><b>Ajuda</b><a href="#ajuda">Guias</a><a href="#duvidas">Dúvidas frequentes</a><a href="#confianca">Segurança</a></div>
          <div><b>Acesso</b><a href={marketingConfig.routes.login}>Entrar</a><a href={marketingConfig.routes.signup}>Criar minha conta</a><a href={marketingConfig.routes.terms}>Termos</a><a href={marketingConfig.routes.privacy}>Privacidade</a></div>
        </div>
      </div>
      <div className={styles.footerBottom}><span>© {new Date().getFullYear()} Oficina Mais. Todos os direitos reservados.</span><span>Plano único · R$ 199,00 por mês.</span></div>
    </footer>
  );
}
