A Confession and Reconciliation group management system developed for Mahibere-Silassie - Ethiopian Orthodox Tewahdo Church.

## Features
- Group attendance tracking for events and meetings
- Gospel Study management | Anonymous questions and answers
- Pilgrimage management | Booking and group management
- Emergency fund management
- Monthly contribution tracking
- Monthly tribute tracking

## Architecture
- Frontend: Vue 3 + Vite + TypeScript + Tailwind CSS + Flowbite
- Backend: Node.js + NestJS + TypeORM + PostgreSQL + Telegram Bot API

## Development Setup

### Clone the repository
```bash
git clone <repository-url>
```

### Install dependencies
```bash
pnpm install
```

### Run the database using docker compose
```bash
docker-compose -f postgres-dev.yml up -d
```

### Migrate the database
```bash
pnpm run db:migrate
```

### Run the development server
```bash
pnpm run dev
```