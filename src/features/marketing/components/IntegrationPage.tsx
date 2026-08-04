import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Icon } from "./Icon";
import styles from "../styles/marketing.module.css";

export function IntegrationPage({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  return (
    <div className={styles.marketingRoot}>
      <Header />
      <main className={styles.integrationMain}>
        <div className={styles.integrationCard}>
          <span className={styles.integrationIcon}><Icon name={isLogin ? "lock" : "rocket"}/></span>
          <span className={styles.eyebrow}>{isLogin ? "Bem-vindo de volta" : "Comece agora"}</span>
          <h1>{isLogin ? "Acesse sua oficina." : "Crie sua conta no Oficina Mais."}</h1>
          <p>{isLogin ? "Entre com seu e-mail e senha para continuar de onde parou." : "Cadastre sua oficina e tenha mais controle sobre clientes, veículos, estoque e ordens de serviço."}</p>
          <div><Link className={styles.primaryButton} href="/">Voltar para a página inicial <Icon name="arrow"/></Link></div>
          <small>Gestão simples, segura e feita para a rotina da sua oficina.</small>
        </div>
      </main>
      <Footer />
    </div>
  );
}