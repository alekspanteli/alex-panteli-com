## Alex Panteli Portfolio

A personal portfolio for Alex Panteli showcasing experience, skills, and contact information.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Motion (for animations)
- shadcn/ui components

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Configuration

The contact form uses Formspree. Set the endpoint via:

```bash
NEXT_PUBLIC_FORMSPREE_URL=https://formspree.io/f/your-id
```

See [.env.example](.env.example) for the expected env vars.

## Project Structure

- src/app: App Router pages and metadata
- src/components: UI + page sections
- src/data/cv-data.ts: Content for experience, skills, and stats
- src/lib/constants.ts: Site-level constants

## Deployment

Deploy on Vercel or any Node hosting with Next.js support:

```bash
npm run build
npm run start
```
