# Arquitetura da landing Oficina Mais

## Estrutura

```text
src/app/                         Rotas públicas, metadados e páginas legais
src/features/marketing/          Módulo de marketing
  components/                    Componentes visuais e ilustrações em React/CSS
  data/                          Comunicação, plano, configuração e textos legais
  styles/                        CSS Modules responsivo
public/marketing/images/         Marca e imagem Open Graph
```

## Fronteira com o produto

Este projeto representa somente a camada pública de marketing. A autenticação, a autorização, a cobrança, o armazenamento, as operações de estoque e as ordens de serviço continuam no SaaS principal.

As rotas `/login` e `/criar-conta` deixam explícita essa fronteira e não implementam uma segunda autenticação.

## Ilustrações

Os painéis de clientes, veículos, ordens de serviço, estoque e manutenções são componentes React/CSS com dados cenográficos. Eles não consomem dados reais nem expõem informações de uma oficina.

## Build

O projeto usa exportação estática do Next.js. Isso permite publicar a landing separadamente ou incorporar a pasta `out/` em outra estrutura de hospedagem.
