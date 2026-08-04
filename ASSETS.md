# Assets do Oficina Mais

## Marca

| Arquivo | Uso |
|---|---|
| `public/marketing/images/brand-mark.png` | Header, footer, mockups e ícone Apple |
| `public/favicon.ico` | Favicon |
| `public/marketing/images/og-oficina-mais.png` | Compartilhamento social 1200×630 |

A imagem original enviada foi convertida para fundo transparente e centralizada em uma tela quadrada, sem alterar o desenho da marca.

## Ilustrações do produto

As cenas são construídas no arquivo:

```text
src/features/marketing/components/ProductMockup.tsx
```

Variantes disponíveis:

- `overview`: painel da oficina;
- `customers`: clientes e veículos;
- `orders`: ordem de serviço;
- `stock`: estoque e manutenções;
- mobile: ordens, manutenções e resumo.

Todos os nomes, placas, valores, quilometragens e indicadores exibidos são fictícios.

## Vídeos

A seção de documentação está marcada como “Em preparação”. Nenhum vídeo de demonstração anterior foi mantido.

Quando os vídeos reais estiverem prontos, adicione-os em:

```text
public/marketing/videos/
```

e atualize `VideoGallery.tsx` e `data/content.ts`.
