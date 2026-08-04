# Validação executada

## Concluído neste pacote

- leitura e transformação da landing fornecida;
- substituição integral da comunicação da Escolinha Pro pelo Oficina Mais;
- aplicação da logo enviada, com fundo transparente;
- criação de favicon multirresolução;
- criação da imagem Open Graph 1200×630;
- plano único de R$ 199,00;
- ilustrações React/CSS para clientes, veículos, ordens, estoque e manutenções;
- revisão de metadados, rotas, FAQ, footer, páginas legais e documentação;
- remoção do vídeo de demonstração anterior;
- validação sintática de todos os arquivos TS/TSX;
- validação semântica local com declarações de tipos auxiliares;
- conferência das referências de classes do CSS Module;
- conferência de abertura e fechamento das regras CSS;
- remoção de referências textuais ao projeto anterior.

## Limitação do ambiente

O `npm ci` completo não foi finalizado neste ambiente porque o registry interno não disponibilizou alguns pacotes do lockfile. As URLs do `package-lock.json` foram normalizadas para o registry público do npm.

Execute no computador de desenvolvimento:

```bash
npm ci
npm run typecheck
npm run lint
npm run build
```

## Pontos que ainda dependem do produto real

- URL pública oficial;
- e-mail oficial de suporte;
- integração das rotas de login e cadastro;
- checkout e portal Stripe do ambiente publicado;
- revisão jurídica dos termos e da política de privacidade;
- vídeos finais de documentação;
- homologação do piloto.
