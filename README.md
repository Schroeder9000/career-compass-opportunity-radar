# Opportunity Radar

Opportunity Radar is Career Compass’s human-edited weekly jobs-data newsletter.
It translates authoritative labor-market data into practical next moves for
early-career professionals and career switchers.

## Production v1

- Public signup with consent and optional career preferences
- Durable subscriber records in Cloudflare D1
- Shareable pilot issue and source notes
- ChatGPT-sign-in-protected editorial workspace
- Source freshness registry, preflight checks, issue states, and exports
- Plain text, Markdown, and HTML issue packages

The editorial workflow is deliberately human-led. Editors refresh or record
free-source snapshots, assemble and fact-check an issue, then export it to the
team’s chosen email service provider. Direct sending is intentionally deferred
until the sender identity, mailing address, and ESP are selected.

## Local development

Requires Node 22+ and pnpm.

```bash
pnpm install
pnpm dev
```

Run `pnpm build` before publishing. The product requirements are preserved in
`docs/product-requirements.md`.
