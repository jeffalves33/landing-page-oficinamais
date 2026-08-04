export type Plan = {
  name: string;
  price: number;
  description: string;
  audience: string;
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Plano único",
    price: 199,
    description: "Uma assinatura mensal com os principais recursos para organizar e acompanhar a operação da oficina.",
    audience: "Para oficinas automotivas de pequeno e médio porte",
    features: [
      "Clientes e veículos",
      "Serviços e produtos",
      "Estoque com histórico de movimentos",
      "Ordens de serviço e impressão",
      "Diagnósticos e fotos privadas",
      "Próximas manutenções",
      "Proprietário, administrador e colaborador",
      "Identidade visual, página pública e aplicativo instalável",
      "Assinatura e cobrança online",
    ],
    highlighted: true,
  },
];

export const planConditions = [
  "Preço-base oficial de R$ 199,00 por mês",
  "Cobrança mensal em moeda brasileira",
  "Pagamento e cancelamento gerenciados com segurança",
  "Cupons individuais podem ser aplicados sem alterar o preço-base",
] as const;
