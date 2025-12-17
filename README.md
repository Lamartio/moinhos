# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## GitHub Pages Deployment

To enable GitHub Pages deployment:

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under "Build and deployment", select **GitHub Actions** as the source
3. Push your changes to `main`

**Notes:**
- If your repo is `<username>.github.io`, you don't need to set `baseURL` in `nuxt.config.ts`
- If it's `<username>.github.io/<repo-name>`, uncomment the `baseURL` config in `nuxt.config.ts`
- The `github-pages` preset handles the `.nojekyll` file automatically
