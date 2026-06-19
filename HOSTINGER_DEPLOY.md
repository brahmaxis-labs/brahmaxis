# Hostinger Deployment

This project is a normal Next.js server app. Do not deploy it as a static export.

## Runtime

- Node.js: `>=20.9.0`
- Package manager: `npm`
- Build command: `npm ci && npm run build`
- Start command: `npm run start`
- App port: use the port provided by Hostinger through `PORT`.

`npm run start` runs `next start`, so Hostinger must run this as a Node.js application, not as static files.

## Hostinger Setup

1. Use a Hostinger plan/environment that supports Node.js apps.
2. Upload or pull the repository into the app root.
3. In Hostinger's Node.js app settings, select Node.js `20.x` or newer.
4. Set install/build command:

   ```bash
   npm ci && npm run build
   ```

5. Set start command:

   ```bash
   npm run start
   ```

6. Do not set `output: "export"` in `next.config.mjs`.
7. Do not upload only the `out/` folder. This app needs `.next/`, `node_modules`, `public/`, and the source/config files used by `next start`.

## Local Production Check

Before deploying:

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

Then open `http://localhost:3000`.
