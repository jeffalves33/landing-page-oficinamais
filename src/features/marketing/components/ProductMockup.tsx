import { Icon } from "./Icon";
import styles from "../styles/marketing.module.css";

type Variant = "overview" | "customers" | "orders" | "stock";

const customers = [
  { name: "Marcos Almeida", vehicle: "Honda Civic · ABC1D23", detail: "82.450 km", status: "Em atendimento", tone: "warn" },
  { name: "Fernanda Costa", vehicle: "Jeep Renegade · EFG4H56", detail: "41.200 km", status: "Histórico completo", tone: "ok" },
  { name: "Rafael Santos", vehicle: "VW T-Cross · IJK7L89", detail: "63.810 km", status: "Revisão futura", tone: "ok" },
  { name: "Camila Nogueira", vehicle: "Toyota Corolla · MNO0P12", detail: "29.340 km", status: "Cadastro atualizado", tone: "ok" },
];

const quickModules = [
  { icon: "users" as const, label: "Clientes", value: "486 cadastros" },
  { icon: "car" as const, label: "Veículos", value: "622 ativos" },
  { icon: "wrench" as const, label: "Serviços", value: "34 no catálogo" },
  { icon: "clipboard" as const, label: "Ordens", value: "8 em andamento" },
  { icon: "box" as const, label: "Estoque", value: "12 itens baixos" },
  { icon: "history" as const, label: "Manutenções", value: "19 próximas" },
];

export function ProductMockup({ variant = "overview", compact = false }: { variant?: Variant; compact?: boolean }) {
  const active = variant === "overview" ? "dashboard" : variant === "customers" ? "customers" : variant === "orders" ? "orders" : "stock";

  return (
    <div className={`${styles.productWindow} ${compact ? styles.productWindowCompact : ""}`} aria-label={`Ilustração cenográfica da plataforma Oficina Mais: ${variant}`}>
      <div className={styles.windowTopbar}>
        <div className={styles.windowDots}><span/><span/><span/></div>
        <div className={styles.windowAddress}>app.oficinamais</div>
        <div className={styles.windowUser}>OM</div>
      </div>
      <div className={styles.appShell}>
        <aside className={styles.appSidebar}>
          <div className={styles.appBrand}><span className={styles.miniMark}/><b>Oficina Mais</b></div>
          <span className={styles.appNavSection}>VISÃO GERAL</span>
          <nav><span className={active === "dashboard" ? styles.appNavActive : ""}><Icon name="chart"/>Painel</span></nav>
          <span className={styles.appNavSection}>OPERAÇÃO</span>
          <nav>
            <span className={active === "customers" ? styles.appNavActive : ""}><Icon name="users"/>Clientes</span>
            <span><Icon name="car"/>Veículos</span>
            <span className={active === "orders" ? styles.appNavActive : ""}><Icon name="clipboard"/>Ordens de serviço</span>
            <span><Icon name="wrench"/>Serviços</span>
          </nav>
          <span className={styles.appNavSection}>CONTROLE</span>
          <nav>
            <span className={active === "stock" ? styles.appNavActive : ""}><Icon name="box"/>Estoque</span>
            <span><Icon name="history"/>Manutenções</span>
          </nav>
          <div className={styles.sidebarInstitution}><span>Oficina</span><strong>Auto Center Avenida</strong></div>
        </aside>
        <main className={styles.appMain}>
          {variant === "overview" && <Overview />}
          {variant === "customers" && <Customers />}
          {variant === "orders" && <Orders />}
          {variant === "stock" && <Stock />}
        </main>
      </div>
    </div>
  );
}

function AppHeader({ title, description, action }: { title: string; description: string; action?: string }) {
  return (
    <div className={styles.appHeader}>
      <div><span>Hoje · operação da oficina</span><h3>{title}</h3><p>{description}</p></div>
      {action && <button type="button">{action}</button>}
    </div>
  );
}

function Overview() {
  return (
    <>
      <AppHeader title="Painel da oficina" description="O que está em andamento e o que precisa de atenção." action="Nova ordem" />
      <div className={`${styles.metricGrid} ${styles.metricGridFour}`}>
        <Metric label="OS abertas" value="14" delta="8 em andamento" icon="clipboard" />
        <Metric label="Veículos" value="622" delta="11 atendidos no mês" icon="car" />
        <Metric label="Estoque baixo" value="12" delta="Itens para revisar" icon="box" />
        <Metric label="Manutenções" value="19" delta="Próximos 30 dias" icon="history" />
      </div>
      <div className={styles.dashboardGrid}>
        <section className={styles.chartCard}>
          <div className={styles.cardTitle}><div><span>ORDENS DE SERVIÇO</span><strong>Movimento dos últimos dias</strong></div><small>Esta semana</small></div>
          <div className={styles.financeSummaryStrip}>
            <span><small>Abertas</small><b>14</b></span>
            <span><small>Em andamento</small><b>8</b></span>
            <span><small>Finalizadas</small><b>21</b></span>
          </div>
          <div className={styles.lineChart} aria-hidden="true">
            <svg viewBox="0 0 420 120" preserveAspectRatio="none">
              <path className={styles.lineGrid} d="M0 28H420M0 60H420M0 92H420"/>
              <path className={styles.lineGreen} d="M0 96 C42 88,70 74,110 77 S164 52,205 58 S262 34,306 42 S364 22,420 17"/>
              <path className={styles.linePurple} d="M0 109 C48 102,74 94,114 97 S170 76,210 82 S270 62,314 67 S368 49,420 45"/>
            </svg>
          </div>
          <div className={styles.chartAxis}><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span></div>
        </section>
        <section className={styles.quickAccessCard}>
          <div className={styles.cardTitle}><div><span>ACESSO RÁPIDO</span><strong>Principais módulos</strong></div></div>
          <div className={styles.quickAccessGrid}>
            {quickModules.map((item) => <div className={styles.quickAccessItem} key={item.label}><i><Icon name={item.icon}/></i><span><b>{item.label}</b><small>{item.value}</small></span></div>)}
          </div>
        </section>
      </div>
    </>
  );
}

function Customers() {
  return (
    <>
      <AppHeader title="Clientes e veículos" description="Cadastros, histórico e informações do atendimento." action="Cadastrar cliente" />
      <div className={styles.listToolbar}><div><Icon name="search"/><span>Buscar por cliente, placa, marca ou modelo</span></div><button type="button">Todos os veículos</button></div>
      <section className={styles.tableCard}>
        <div className={styles.tableHead}><span>Cliente</span><span>Veículo</span><span>Quilometragem</span><span>Situação</span></div>
        {customers.map((customer) => (
          <div className={styles.tableRow} key={customer.name}>
            <span className={styles.studentName}><i>{customer.name.slice(0,2).toUpperCase()}</i><b>{customer.name}</b></span>
            <span>{customer.vehicle}</span><span>{customer.detail}</span><span><em data-tone={customer.tone}>{customer.status}</em></span>
          </div>
        ))}
      </section>
      <div className={styles.studentBottomGrid}>
        <section><span>Clientes cadastrados</span><strong>486</strong><small>Com contato e histórico centralizados</small></section>
        <section><span>Veículos vinculados</span><strong>622</strong><small>Placa, modelo e quilometragem disponíveis</small></section>
      </div>
    </>
  );
}

function Orders() {
  const items = [
    ["Troca de óleo e filtro", "Serviço", "R$ 180,00"],
    ["Filtro de óleo", "Produto · 1 un.", "R$ 48,00"],
    ["Óleo 5W30", "Produto · 4 un.", "R$ 220,00"],
    ["Alinhamento", "Serviço", "R$ 90,00"],
  ];
  return (
    <>
      <AppHeader title="OS #0187 · Honda Civic" description="Marcos Almeida · ABC1D23 · 82.450 km" action="Avançar etapa" />
      <div className={styles.attendanceSummary}>
        <div><span>Situação</span><strong>Em andamento</strong></div><div><span>Responsável</span><strong>Carlos</strong></div><div><span>Total</span><strong>R$ 538</strong></div>
      </div>
      <section className={styles.attendanceList}>
        {items.map(([name, detail, value], index) => (
          <div key={name}>
            <span className={styles.studentName}><i><Icon name={index === 0 || index === 3 ? "wrench" : "box"}/></i><span><b>{name}</b><small>{detail}</small></span></span>
            <span className={styles.presenceToggle}><button className={styles.presenceActive} type="button">{value}</button></span>
          </div>
        ))}
      </section>
    </>
  );
}

function Stock() {
  return (
    <>
      <AppHeader title="Estoque e manutenções" description="Movimentos rastreáveis e próximos cuidados dos veículos." action="Registrar entrada" />
      <div className={styles.financeFilters}><span>Todos os produtos</span><span>Estoque baixo</span><span>Movimentos recentes</span></div>
      <div className={`${styles.metricGrid} ${styles.metricGridThree}`}>
        <Metric label="Produtos" value="284" delta="Itens cadastrados" icon="box" />
        <Metric label="Estoque baixo" value="12" delta="Exigem conferência" icon="alert" />
        <Metric label="Manutenções" value="19" delta="Próximos 30 dias" icon="history" />
      </div>
      <div className={styles.financeGrid}>
        <section className={styles.chartCard}>
          <div className={styles.cardTitle}><div><span>MOVIMENTOS</span><strong>Entradas e consumos</strong></div><small>Últimos 30 dias</small></div>
          <div className={styles.lineChart} aria-hidden="true"><svg viewBox="0 0 420 120" preserveAspectRatio="none"><path className={styles.lineGrid} d="M0 28H420M0 60H420M0 92H420"/><path className={styles.lineGreen} d="M0 88 C45 78,72 84,112 67 S168 61,208 46 S268 50,310 32 S365 36,420 18"/><path className={styles.lineRed} d="M0 108 C48 100,76 92,118 96 S170 78,214 84 S272 65,316 72 S370 58,420 54"/></svg></div>
          <div className={styles.chartAxis}><span>Semana 1</span><span>Semana 2</span><span>Semana 3</span><span>Semana 4</span></div>
        </section>
        <section className={styles.donutCard}>
          <div className={styles.cardTitle}><div><span>PRÓXIMOS CUIDADOS</span><strong>Manutenções previstas</strong></div></div>
          <div className={styles.donutWrap}><div className={styles.donut}><span><b>19</b><small>próximas</small></span></div><ul><li><i data-c="a"/>Nos próximos 7 dias <b>5</b></li><li><i data-c="b"/>Até 30 dias <b>14</b></li><li><i data-c="c"/>Vencidas <b>3</b></li></ul></div>
        </section>
      </div>
    </>
  );
}

function Metric({ label, value, delta, icon }: { label: string; value: string; delta: string; icon: "users" | "wallet" | "check" | "clock" | "invoice" | "school" | "layers" | "support" | "chart" | "pin" | "teacher" | "car" | "wrench" | "box" | "clipboard" | "history" | "alert" }) {
  return <section className={styles.metricCard}><div><span>{label}</span><strong>{value}</strong><small>{delta}</small></div><i><Icon name={icon}/></i></section>;
}

export function PhoneMockup({ screen = "orders" }: { screen?: "orders" | "maintenance" | "home" }) {
  return (
    <div className={styles.phoneFrame} aria-label="Ilustração da versão mobile do Oficina Mais">
      <div className={styles.phoneSpeaker}/><div className={styles.phoneScreen}>
        <div className={styles.phoneStatus}><span>09:41</span><span>● ◒ ▰</span></div>
        <div className={styles.phoneAppHeader}><span className={styles.miniMark}/><b>Oficina Mais</b><i>OM</i></div>
        {screen === "orders" && <PhoneOrders />}{screen === "maintenance" && <PhoneMaintenance />}{screen === "home" && <PhoneHome />}
        <div className={styles.phoneNav}><span className={styles.phoneNavActive}><Icon name="chart"/>Início</span><span><Icon name="clipboard"/>Ordens</span><span><Icon name="car"/>Veículos</span><span><Icon name="bell"/>Avisos</span></div>
      </div>
    </div>
  );
}

function PhoneOrders() {
  return <div className={styles.phoneBody}><span className={styles.phoneKicker}>ORDEM EM ANDAMENTO</span><h4>OS #0187</h4><p>Honda Civic · ABC1D23</p><div className={styles.phoneProgress}><b>Diagnóstico concluído</b><span><i style={{width:"68%"}}/></span></div>{["Troca de óleo","Filtro de óleo","Alinhamento"].map((n,i)=><div className={styles.phoneStudent} key={n}><i><Icon name={i===1?"box":"wrench"}/></i><span><b>{n}</b><small>{i===1?"1 unidade reservada":"Serviço confirmado"}</small></span><button>✓</button></div>)}<button className={styles.phonePrimary}>Atualizar etapa</button></div>;
}
function PhoneMaintenance() {
  return <div className={styles.phoneBody}><span className={styles.phoneKicker}>MANUTENÇÕES</span><h4>Próximos cuidados</h4><p>Veículos que exigem acompanhamento</p><div className={styles.phoneHeroMetric}><span>Próximos 30 dias</span><strong>19</strong><small>3 manutenções vencidas</small></div>{["Honda Civic · óleo","Jeep Renegade · revisão","VW T-Cross · filtros"].map((n,i)=><div className={styles.phoneEvent} key={n}><i><Icon name="history"/></i><span><b>{n}</b><small>{["em 5 dias","em 12 dias","em 18 dias"][i]}</small></span></div>)}</div>;
}
function PhoneHome() {
  return <div className={styles.phoneBody}><span className={styles.phoneKicker}>OLÁ, ADMINISTRADOR</span><h4>Resumo da oficina</h4><p>Operação de hoje</p><div className={styles.phoneMiniGrid}><div><Icon name="clipboard"/><b>14</b><small>OS abertas</small></div><div><Icon name="box"/><b>12</b><small>itens baixos</small></div></div><div className={styles.phoneNext}><span>Próxima entrega</span><strong>Jeep Renegade</strong><small>OS #0182 · 16:30</small><button>Ver ordem</button></div></div>;
}
