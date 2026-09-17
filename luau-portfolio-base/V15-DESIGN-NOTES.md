# V15 — Design notes

This version deliberately moves away from the previous neon/cyber visual treatment.

## Direction

- Editorial, restrained dark interface.
- Large typography and generous negative space.
- Projects are the visual focus; UI chrome is secondary.
- Blue is the main accent. Decorative red/blue glow was removed from the public presentation.
- Navigation is reduced to the five destinations that matter most for a prospective client.
- Pricing is presented as information rather than as competing promotional cards.
- The public review form is collapsed until requested, reducing visual noise.
- Desktop and mobile layouts use the same hierarchy rather than two different visual languages.

## Identity

- Browser title: `Simohayna — Roblox Builder & Luau Developer`.
- Public identity: Ezequiel / Simohayna.
- Open Graph and PWA metadata use the same naming system.

## Preserved systems

- Supabase configuration and connection files were not changed.
- Existing content schema was not changed.
- Existing admin route and CMS behavior were not changed.
- The loading-screen implementation remains in `PortfolioClient.tsx` and is dormant through `LOADER_ENABLED = false`.
- `app/v14.css` is kept in the project as the previous presentation layer, but V15 imports `app/v15.css` instead.
