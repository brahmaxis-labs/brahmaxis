# Brahmaxis Labs

This is a normal Next.js server app for Brahmaxis Labs.

Deployment target: Hostinger Node.js hosting using `next start`.

This project is not configured for static export. Do not add `output: "export"`.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

```bash
npm ci
npm run build
npm run start
```

See [HOSTINGER_DEPLOY.md](./HOSTINGER_DEPLOY.md) for Hostinger deployment notes.

## Checks

```bash
npm run lint
npx tsc --noEmit
```
