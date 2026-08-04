import { automationSteps, capabilities, modules, trustItems } from "./data/content";
import { marketingConfig } from "./data/config";
import { planConditions, plans } from "./data/plans";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Icon } from "./components/Icon";
import { Reveal } from "./components/Reveal";
import { SectionHeading } from "./components/SectionHeading";
import { ProductMockup, PhoneMockup } from "./components/ProductMockup";
import { FeatureTour } from "./components/FeatureTour";
import { VideoGallery } from "./components/VideoGallery";
import { FaqAccordion } from "./components/FaqAccordion";
import styles from "./styles/marketing.module.css";

export function MarketingPage() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Oficina Mais",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "SaaS brasileiro para gestão de oficinas automotivas, com clientes, veículos, estoque, ordens de serviço e manutenções.",
    offers: {
      "@type": "Offer",
      name: plans[0].name,
      price: plans[0].price,
      priceCurrency: "BRL",
      category: "Assinatura mensal",
    },
    publisher: { "@type": "Organization", name: "Oficina Mais" },
  };

  return (
    <div className={styles.marketingRoot}>
      <Header />
      <main>
        <Hero />
        <Modules />
        <Automation />
        <Experience />
        <Devices />
        <Trust />
        <Pricing />
        <Help />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }} />
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroBackdrop} aria-hidden="true"><span/><span/><span/><span/></div>
      <div className={styles.heroInner}>
        <Reveal className={styles.heroCopy}>
          <h1 id="hero-title">Sua oficina mais <em>organizada, segura</em> e <em>profissional.</em></h1>
          <p>Centralize clientes, veículos, estoque, ordens de serviço e manutenções sem transformar sua rotina em um sistema complicado.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#produto">Conhecer o Oficina Mais <Icon name="arrow"/></a>
            <a className={styles.secondaryButton} href="#planos">Ver plano único <Icon name="chevron"/></a>
          </div>
          <small className={styles.heroFinePrint}>Gestão simples e segura para oficinas.</small>
        </Reveal>

        <Reveal className={styles.capabilityRail} delay={120}>
          {capabilities.map((capability) => (
            <article key={capability.title}><i><Icon name={capability.icon}/></i><div><h2>{capability.title}</h2><p>{capability.text}</p></div><span aria-hidden="true"/></article>
          ))}
        </Reveal>

        <Reveal className={styles.heroScene} delay={180}>
          <div className={styles.heroSceneGlow}/>
          <div className={styles.heroDashboard}><ProductMockup variant="overview" /></div>
          <div className={styles.heroPhone}><PhoneMockup screen="orders" /></div>
          <div className={styles.heroFloatingCardA}>
            <i><Icon name="box"/></i><span><small>Estoque atualizado</small><strong>−2 filtros</strong><em>Movimento gerado pela OS #0187</em></span>
          </div>
          <div className={styles.heroFloatingCardB}>
            <span>Ordens em andamento</span><strong>8</strong><div><i style={{width:"72%"}}/></div><small>14 ordens abertas hoje</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section id="funcionalidades" className={styles.modulesSection}>
      <div className={styles.modulesGlow} aria-hidden="true"/>
      <div className={styles.sectionContainer}>
        <Reveal><SectionHeading eyebrow="Uma operação conectada" title="Tudo o que sua oficina precisa para trabalhar com mais controle." text="Os módulos organizam a rotina sem separar informações que precisam permanecer juntas." inverse /></Reveal>
        <div className={styles.modulesGrid}>
          {modules.map((module, index) => (
            <Reveal key={module.title} delay={index * 60} className={`${styles.moduleCard} ${styles[`module${module.span[0].toUpperCase()}${module.span.slice(1)}`]}`}>
              <div className={styles.moduleIcon}><Icon name={module.icon}/></div><span>0{index + 1}</span><h3>{module.title}</h3><p>{module.text}</p><a href="#produto" aria-label={`Ver ${module.title}`}>Ver na experiência <Icon name="arrow"/></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Automation() {
  return (
    <section id="fluxo" className={styles.automationSection}>
      <div className={styles.automationLines} aria-hidden="true"><span/><span/><span/></div>
      <div className={styles.sectionContainer}>
        <Reveal className={styles.automationHeader}>
          <span className={styles.eyebrow}>Da ordem ao histórico</span>
          <h2>Uma ordem de serviço não pode deixar o estoque pela metade.</h2>
          <p>O Oficina Mais conecta atendimento, itens consumidos e próximas manutenções em um fluxo consistente e rastreável.</p>
        </Reveal>
        <div className={styles.automationFlow}>
          {automationSteps.map((step, index) => (
            <Reveal className={styles.flowStep} key={step.title} delay={index * 80}>
              <div className={styles.flowNode}><Icon name={step.icon}/><span>0{index + 1}</span></div><div><h3>{step.title}</h3><p>{step.text}</p></div>{index < automationSteps.length - 1 && <Icon className={styles.flowArrow} name="arrow"/>}
            </Reveal>
          ))}
        </div>
        <Reveal className={styles.automationPanel}>
          <div className={styles.automationPanelCopy}><span>OPERAÇÃO CONSISTENTE</span><h3>Mais segurança para corrigir, cancelar e acompanhar.</h3><p>Movimentos de estoque não são apagados. Ajustes e cancelamentos deixam compensações claras para preservar o histórico da oficina.</p><a href="#confianca">Ver princípios de segurança <Icon name="arrow"/></a></div>
          <div className={styles.automationVisual}>
            <div className={styles.automationOrb}><Icon name="wrench"/></div>
            <div className={styles.autoCard} data-pos="one"><Icon name="clipboard"/><span><b>OS #0187 atualizada</b><small>Diagnóstico e itens confirmados</small></span><em>Em andamento</em></div>
            <div className={styles.autoCard} data-pos="two"><Icon name="box"/><span><b>Consumo registrado</b><small>Movimento vinculado à ordem</small></span><em>Rastreável</em></div>
            <div className={styles.autoCard} data-pos="three"><Icon name="history"/><span><b>Manutenção prevista</b><small>Próximo cuidado em 6 meses</small></span><em>Programado</em></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="produto" className={styles.experienceSection}>
      <div className={styles.sectionContainer}>
        <Reveal><SectionHeading eyebrow="Experiência do produto" title="Informação útil, no momento certo da rotina." text="O sistema foi pensado para proprietários, administradores e colaboradores trabalharem com clareza, sem depender de conhecimento técnico." align="center" /></Reveal>
        <FeatureTour />
      </div>
    </section>
  );
}

function Devices() {
  return (
    <section id="identidade" className={styles.devicesSection}>
      <div className={styles.devicesBackdrop} aria-hidden="true"/>
      <div className={styles.sectionContainer}>
        <div className={styles.devicesLayout}>
          <Reveal className={styles.devicesCopy}>
            <span className={styles.eyebrow}>A oficina com a própria identidade</span>
            <h2>Painel, documentos e aplicativo com a marca da oficina.</h2>
            <p>Nome, logo e cores acompanham a experiência da equipe e a apresentação pública da oficina.</p>
            <ul>
              <li><Icon name="check"/><span><b>Identidade aplicada</b><small>Painel, login, impressão e aplicativo instalado.</small></span></li>
              <li><Icon name="check"/><span><b>Página pública controlada</b><small>A oficina escolhe quais contatos e serviços deseja publicar.</small></span></li>
              <li><Icon name="check"/><span><b>Uso no computador e celular</b><small>A equipe acessa a área correta conforme seu papel.</small></span></li>
            </ul>
          </Reveal>
          <Reveal className={styles.devicesScene} delay={100}>
            <div className={styles.desktopDevice}><ProductMockup variant="stock" compact /></div>
            <div className={styles.devicePhone}><PhoneMockup screen="home" /></div>
            <div className={styles.pwaPrompt}><span className={styles.logoMarkMini}/><div><b>Instalar Auto Center Avenida</b><small>Adicionar à tela inicial</small></div><button type="button">Instalar</button></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="confianca" className={styles.trustSection}>
      <div className={styles.trustSpotlight} aria-hidden="true"/>
      <div className={styles.sectionContainer}>
        <Reveal><SectionHeading eyebrow="Segurança e confiabilidade" title="Quando vai ser a próxima manutenção do seu cliente" text="Além de realizar os serviços, saiba quando chegar o momento de entrar em contato com seu cliente novamente." align="center" inverse /></Reveal>
        <div className={styles.trustGrid}>{trustItems.map((item, index) => <Reveal className={styles.trustCard} key={item.title} delay={index * 55}><i><Icon name={item.icon}/></i><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>
      </div>
    </section>
  );
}

function Pricing() {
  const plan = plans[0];
  return (
    <section id="planos" className={styles.pricingSection}>
      <div className={styles.sectionContainer}>
        <Reveal><SectionHeading eyebrow="Plano único e previsível" title="Os recursos principais em uma única assinatura." text="Tudo o que sua oficina precisa por R$ 199,00 por mês, sem módulos adicionais ou surpresas." align="center" /></Reveal>
        <div className={styles.pricingGrid}>
          <Reveal className={`${styles.planCard} ${styles.planHighlighted}`}>
            <span className={styles.planBadge}>Plano único</span>
            <div className={styles.planTop}><span>{plan.name}</span><p>{plan.description}</p><div className={styles.planPrice}><sup>R$</sup><strong>{plan.price}</strong><small>/mês</small></div><em>{plan.audience}</em></div>
            <a className={styles.primaryButton} href={marketingConfig.routes.signup}>Criar minha conta <Icon name="arrow"/></a>
            <div className={styles.planFeatures}><b>O que está incluído</b><ul>{plan.features.map((feature) => <li key={feature}><Icon name="check"/>{feature}</li>)}</ul></div>
          </Reveal>
        </div>
        <Reveal className={styles.planConditions}><div><Icon name="card"/><span><b>Condições comerciais</b><small>Clareza para contratar e gerenciar.</small></span></div><ul>{planConditions.map((condition) => <li key={condition}>{condition}</li>)}</ul></Reveal>
      </div>
    </section>
  );
}

function Help() {
  return (
    <section id="ajuda" className={styles.helpSection}>
      <div className={styles.sectionContainer}>
        <Reveal><SectionHeading eyebrow="Documentação e ajuda" title="Guias curtos para proprietários, administradores e colaboradores." text="Encontre orientações objetivas para aproveitar os principais recursos do Oficina Mais." /></Reveal>
        <VideoGallery />
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="duvidas" className={styles.faqSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.faqLayout}>
          <Reveal className={styles.faqIntro}><span className={styles.eyebrow}>Dúvidas frequentes</span><h2>Respostas diretas para escolher com segurança.</h2><p>Tire suas dúvidas sobre recursos, acesso, cobrança e uso no dia a dia da oficina.</p></Reveal>
          <Reveal delay={100}><FaqAccordion /></Reveal>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.finalCtaGlow} aria-hidden="true"/>
      <div className={styles.sectionContainer}>
        <Reveal className={styles.finalCta}>
          <span>PRÓXIMO PASSO</span>
          <h2>Mais controle para a oficina. Menos informação espalhada.</h2>
          <p>Comece agora e reúna clientes, veículos, estoque e ordens de serviço em um só lugar.</p>
          <div><a className={styles.lightButton} href={marketingConfig.routes.signup}>Criar minha conta <Icon name="arrow"/></a></div>
        </Reveal>
      </div>
    </section>
  );
}
