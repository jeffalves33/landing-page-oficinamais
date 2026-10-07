export const navigation = [
  { label: "Produto", href: "#produto" },
  { label: "Recursos", href: "#funcionalidades" },
  { label: "Plano", href: "#planos" },
  { label: "Ajuda", href: "#ajuda" },
] as const;

export const capabilities = [
  { icon: "clipboard", title: "Ordens de serviço", text: "Itens, diagnóstico, fotos e andamento conectados." },
  { icon: "box", title: "Estoque rastreável", text: "Entradas, saídas, consumo, ajustes e estornos registrados." },
  { icon: "car", title: "Clientes e veículos", text: "Histórico, quilometragem e próximas manutenções." },
  { icon: "settings", title: "Identidade da oficina", text: "Nome, logo e cores no painel, documentos e aplicativo." },
] as const;

export const modules = [
  { icon: "car", title: "Clientes e veículos", text: "Cadastros, contatos, placas, quilometragem, observações e histórico reunidos.", span: "wide" },
  { icon: "wrench", title: "Serviços", text: "Catálogo, preços e periodicidade para acompanhar futuras manutenções.", span: "normal" },
  { icon: "box", title: "Produtos e estoque", text: "Quantidade, preço e histórico imutável de cada movimento.", span: "normal" },
  { icon: "clipboard", title: "Ordens de serviço", text: "Serviços, produtos, diagnóstico, fotos, valores, pagamento e impressão.", span: "wide" },
  { icon: "history", title: "Manutenções", text: "Acompanhe o que está vencido, atual ou previsto por data e quilometragem.", span: "normal" },
  { icon: "settings", title: "Identidade e presença", text: "Personalização, página pública e aplicativo instalado com a marca da oficina.", span: "normal" },
] as const;

export const automationSteps = [
  { icon: "clipboard", title: "A ordem é criada", text: "Cliente, veículo, responsável, itens, diagnóstico e condições ficam reunidos." },
  { icon: "box", title: "O estoque acompanha", text: "Produtos consumidos geram movimentos rastreáveis, sem apagar o histórico." },
  { icon: "shield", title: "A operação permanece consistente", text: "Uma falha não deixa a ordem ou o estoque atualizados pela metade." },
  { icon: "history", title: "O próximo cuidado fica visível", text: "Serviços periódicos alimentam o acompanhamento de futuras manutenções." },
] as const;

export const tourSteps = [
  {
    id: "clientes",
    kicker: "Histórico organizado",
    title: "Cliente e veículo no mesmo contexto.",
    text: "Consulte contatos, veículo, placa, quilometragem e atendimentos anteriores sem procurar em controles separados.",
    bullets: ["Busca por cliente ou placa", "Veículos vinculados", "Histórico de atendimentos"],
  },
  {
    id: "ordens",
    kicker: "Operação conectada",
    title: "A ordem de serviço conversa com o estoque.",
    text: "Serviços, produtos, mão de obra, desconto, diagnóstico e fotos ficam em um fluxo único e consistente.",
    bullets: ["Etapas da OS", "Consumo de produtos", "Impressão organizada"],
  },
  {
    id: "estoque",
    kicker: "Controle confiável",
    title: "Movimentos e manutenções deixam rastros claros.",
    text: "A equipe acompanha quantidades, ajustes, estornos e próximos cuidados do veículo com mais segurança.",
    bullets: ["Histórico imutável", "Alertas de estoque", "Manutenções futuras"],
  },
] as const;

export const trustItems = [
  { icon: "shield", title: "Acesso para cada pessoa", text: "Cada pessoa encontra somente o que precisa para realizar seu trabalho." },
  { icon: "history", title: "Estoque rastreável", text: "Correções geram novos movimentos. O histórico não é apagado ou reescrito." },

  { icon: "settings", title: "Marca da oficina", text: "Nome, logo e cores acompanham a experiência da equipe e dos clientes da oficina." },
] as const;

export const videoItems = [
  { title: "Primeiros passos", duration: "Guia rápido", status: "soon", icon: "rocket" },
  { title: "Como criar uma ordem de serviço", duration: "Guia rápido", status: "soon", icon: "clipboard" },
  { title: "Como organizar o estoque", duration: "Guia rápido", status: "soon", icon: "box" },
  { title: "Como personalizar a oficina", duration: "Guia rápido", status: "soon", icon: "settings" },
  { title: "Como acompanhar manutenções", duration: "Guia rápido", status: "soon", icon: "history" },
] as const;

export const faqs = [
  { q: "Para quem o Oficina Mais foi criado?", a: "Para oficinas mecânicas independentes, auto centers, oficinas especializadas, lojas de pneus com serviços e outros pequenos e médios negócios automotivos que precisam organizar a operação sem adotar um ERP excessivamente complexo." },
  { q: "Existe mais de um plano?", a: "Não. O Oficina Mais possui um único plano mensal de R$ 89,90, com todos os recursos principais e sem módulos adicionais. Condições comerciais específicas podem ser aplicadas quando disponíveis." },
  { q: "O colaborador acessa a cobrança da assinatura?", a: "Não. A cobrança é gerenciada somente pelo proprietário ou administrador. O colaborador utiliza os fluxos operacionais permitidos." },
  { q: "Os dados de uma oficina ficam separados das outras?", a: "Sim. Cada oficina acessa somente seus próprios dados. Operações sensíveis também validam usuário, oficina, papel e propriedade antes de concluir alterações." },
  { q: "A ordem de serviço atualiza o estoque?", a: "Sim. Produtos utilizados na ordem geram movimentos de estoque. A operação é tratada de forma consistente para evitar que uma falha deixe a ordem ou o estoque pela metade." },
  { q: "A oficina pode usar a própria identidade?", a: "Sim. Nome, logo e cores podem ser aplicados no painel, login, documentos, página pública e aplicativo instalado, criando uma experiência alinhada à identidade da oficina." },
  { q: "O sistema funciona no celular?", a: "A aplicação é responsiva e pode ser instalada no dispositivo com o nome, a logo e as cores da oficina. A página pública continua separada da área autenticada." },
  { q: "Quais dados podem aparecer na página pública?", a: "A oficina decide se publica nome, logo, apresentação, telefone, e-mail, endereço, serviços e preços autorizados. Clientes, veículos, ordens, estoque, finanças e equipe nunca são públicos." },
] as const;
