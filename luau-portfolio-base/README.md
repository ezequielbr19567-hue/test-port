# Portfólio Roblox Studio — V14

Versão com foco em **abertura imediata, navegação mobile, acabamento visual, SEO, acessibilidade e proteção básica de endpoints**, sem alterar o schema nem as configurações existentes do Supabase.

## Loader preservado, mas adormecido

A tela cinematográfica de carregamento continua integralmente no projeto, incluindo animações, estado de erro e botão de retry. Nesta versão ela está desligada por uma única flag em:

```ts
// components/PortfolioClient.tsx
const LOADER_ENABLED = false;
```

Trocar para `true` reativa o sistema de loading. Nenhum componente ou CSS do loader foi apagado.

## Abertura pública sem depender do loader

A home agora tenta ler o conteúdo salvo no Supabase **no servidor** antes de montar o cliente. Isso reduz o risco de aparecer o template padrão por alguns instantes e permite abrir o site diretamente com conteúdo real.

Se o Supabase estiver temporariamente indisponível:

- a página pública continua abrindo com o conteúdo disponível no bundle;
- o cliente tenta atualizar o conteúdo silenciosamente depois;
- o último conteúdo válido salvo no navegador continua sendo usado quando aplicável;
- falhas de visitas, Roblox ou avaliações não bloqueiam a página.

Nada disso muda tabelas, buckets ou RPCs do Supabase.

## Visual / UX

- nova camada visual isolada em `app/v14.css`;
- navegação com glass effect e melhor hierarquia;
- marca visual renovada sem depender de imagem externa;
- menu mobile completo, com fechamento por ESC e backdrop;
- hero mais forte e badges de especialidade;
- cards, CTA, botões e estatísticas refinados;
- layout mobile reorganizado;
- suporte a `prefers-reduced-motion` preservado.

## Acessibilidade

- link “pular para o conteúdo”;
- estados `:focus-visible` para links, botões e formulários;
- `aria-expanded`, `aria-controls` e labels no menu mobile;
- navegação mobile fechada removida do fluxo de foco por `visibility`;
- idioma do documento continua atualizado pelo seletor EN/PT.

## SEO e compartilhamento

Foram adicionados:

- metadata mais completa;
- Open Graph e Twitter Card;
- preview social gerado por `app/opengraph-image.tsx`;
- favicon SVG;
- `robots.ts` bloqueando `/dev` e `/api/admin/` de indexação;
- web manifest;
- theme color / viewport.

## Proteções adicionadas sem mexer no banco

A V14 inclui rate limit **best-effort em memória da aplicação** para:

- login do `/dev`: 8 tentativas / 15 min por IP;
- avaliações públicas: 4 envios / hora por IP;
- contador público: no máximo 1 incremento / 30 min por IP.

O limitador é propositalmente independente do Supabase e não exige SQL novo. Em ambientes serverless com múltiplas instâncias ele reduz abuso casual, mas não substitui um rate limiter distribuído (por exemplo, Upstash/Redis) se o projeto crescer muito.

O POST administrativo de conteúdo também passou a validar a estrutura básica em runtime antes de salvar.

## Supabase / Vercel

As configurações continuam as mesmas:

```env
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=sb_secret_...
ADMIN_PASSWORD=...

# Opcional para domínio próprio / sitemap
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Também é aceito `SUPABASE_SECRET_KEY` no lugar de `SUPABASE_SERVICE_ROLE_KEY`.

**Nenhum SQL novo é necessário para atualizar da V13 para a V14.**

## Recursos preservados

- Builder e Sistemas separados;
- EN/PT com detecção automática do navegador;
- `/dev` protegido por senha;
- conteúdo salvo no Supabase;
- contador de visitas;
- jogos / Universe ID;
- avaliações com aprovação manual;
- média de estrelas somente com avaliações aprovadas;
- upload de imagens;
- vídeos incorporados;
- contato via Discord;
- cache do último conteúdo válido;
- loader cinematográfico completo (desativado por flag);
- identidade visual vermelho × azul.
