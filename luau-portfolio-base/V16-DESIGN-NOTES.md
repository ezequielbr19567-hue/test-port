# V16 — Design notes

## Intenção

A V16 reduz o aspecto de “UI gerada por IA” sem esconder informação útil. O foco passa a ser o trabalho: tipografia, imagens, espaço e hierarquia fazem a composição; caixas, outlines, glows e microefeitos deixam de ser a linguagem principal.

Decisões aplicadas:

- menos “cards dentro de cards”;
- nenhuma borda decorativa em projetos, preços, jogos, avaliações, stack, navegação ou CTA;
- imagens de projeto como elemento dominante;
- mais espaço vertical e menos divisórias;
- navegação mais silenciosa;
- botões sem outline decorativo;
- tags viraram metadados tipográficos em vez de pills;
- somente um movimento decorativo: zoom muito leve na imagem de projeto em hover no desktop;
- transições do menu mobile continuam apenas por serem funcionais.

## Identidade

- Título da guia: `Ezequiel — Roblox Builder & Luau Developer`.
- Marca visual no header: apenas `Simohayna`.
- O bloco `Ezequiel / Simohayna · BUILDER × LUAU` foi removido da abertura.
- Contato: `CONTATO · Ezequiel.`.
- Rodapé: `© ano Ezequiel` + `Simohayna`.

## Dragonite × Hellbat

Existe uma única referência abstrata e pequena no símbolo ao lado de `Simohayna`: um fragmento angular dividido entre um laranja quente e um azul-aço profundo. Não usa imagem, logo ou personagem de nenhuma franquia e não adiciona outro efeito à página.

## Contato no desktop

O CTA foi reestruturado em dois grupos explícitos:

1. kicker + título + descrição;
2. botão Discord.

Isso evita o auto-placement do CSS Grid da V15 que colocava o kicker em uma coluna e o título na outra. No mobile, os grupos continuam empilhados.

## Backend preservado

A V16 não altera o contrato do Supabase. `lib/supabaseAdmin.ts`, `lib/contentStore.ts`, `lib/storage.ts`, `.env.example` e os SQLs continuam iguais à V15.

O loader também continua preservado e adormecido por:

```ts
const LOADER_ENABLED = false;
```
