# Portfólio Roblox Studio — V16

V16 é uma revisão visual da V15 com foco em um portfólio mais autoral, silencioso e orientado ao trabalho, sem mudar a infraestrutura do Supabase.

## O que mudou

- título da guia agora usa **Ezequiel**;
- header mostra apenas **Simohayna**;
- removido `Ezequiel / Simohayna · BUILDER × LUAU` da abertura;
- contato usa `CONTATO · Ezequiel.`;
- CTA de contato corrigido no desktop e preservado em coluna no mobile;
- removidas bordas decorativas de cards e blocos públicos;
- tags e skills deixaram de ser pills com outline;
- botões públicos deixaram de usar outline como estilo principal;
- mais espaço negativo e menos divisórias;
- projetos têm prioridade visual;
- existe um único movimento decorativo: leve aproximação da imagem de projeto no hover desktop;
- pequena assinatura abstrata laranja + azul-aço no símbolo da marca, como referência discreta a Dragonite × Hellbat.

Leia `V16-DESIGN-NOTES.md` para a lógica de design.

## Loader preservado, mas desligado

A tela de carregamento continua no projeto. Ela não aparece nesta versão porque:

```ts
// components/PortfolioClient.tsx
const LOADER_ENABLED = false;
```

Trocar para `true` reativa o loader existente.

## Supabase

Nenhuma migração foi criada e nenhum schema foi alterado. Continuam as mesmas variáveis:

```env
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=sb_secret_...
ADMIN_PASSWORD=...
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

`SUPABASE_SECRET_KEY` continua aceito no lugar de `SUPABASE_SERVICE_ROLE_KEY`.

## Recursos preservados

- painel `/dev`;
- conteúdo salvo no Supabase;
- Builder e Programação separados;
- EN/PT automático;
- avaliações com aprovação manual;
- upload de imagens;
- jogos / Universe ID;
- contador;
- cache do último conteúdo válido;
- fallback público caso o Supabase esteja temporariamente indisponível;
- loader completo, apenas desativado.
