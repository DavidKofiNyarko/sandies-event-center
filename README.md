# Sandies Event Center

A polished, responsive marketing website for Sandies Event Center (Sandie's Astoria Banquet) — a full-service event venue in Accra, Ghana hosting weddings, corporate events, private parties, meetings, and more.

## Overview

Sandies Event Center is a single-page marketing site built with React, TypeScript, Vite, and Tailwind CSS. It showcases the venue's event spaces, facilities, gallery, and virtual tour, and captures booking enquiries through a modal form.

## Key Features

- **Event Showcase** — Weddings, engagements, corporate events, private parties, meetings & conferences, social gatherings, funeral events, product launches & trade shows, and workshops & seminars
- **Two-Level Venue** — Upper Level (intimate, panoramic views) and Ground Level ballroom (large-scale celebrations)
- **Facilities** — Changing rooms, commercial deep freezers, climate control, backup power, professional sound & lighting
- **Filterable Gallery** — Weddings / Corporate / Parties / Venue categories with images and embedded YouTube videos
- **Guided Virtual Tour** — 8 narrated stops with interactive hotspots
- **Testimonials** — Auto-rotating client reviews with manual navigation
- **Booking Form** — "Book Now" modal for event enquiries
- **Contact Section** — Address, phone, email, hours, and embedded Google Map
- **Responsive Navigation** — Sticky header with mobile menu

## Technology Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Language** | TypeScript |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3 (CSS variables) |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Routing** | React Router DOM v6 |
| **Server State** | TanStack Query |
| **Forms** | React Hook Form + Zod |
| **Icons** | Lucide React |
| **Notifications** | Sonner + shadcn/ui Toaster |

## Project Structure

```
src/
├── components/
│   ├── SandiesLogo.tsx   # Brand logo with text fallback
│   └── ui/               # shadcn/ui component library
├── hooks/                # use-toast, use-mobile
├── lib/                  # Utilities (cn helper)
├── pages/
│   ├── EventCenterWebsite.tsx  # Main marketing site
│   ├── Index.tsx               # Logo showcase page
│   └── NotFound.tsx            # 404 page
├── App.tsx               # Router and providers
├── main.tsx              # Entry point
└── index.css             # Tailwind + design tokens
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or Bun)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/DavidKofiNyarko/sandies-event-center.git
cd sandies-event-center

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build
# or
bun run build

# Preview production build
npm run preview
# or
bun run preview
```

### Linting

```bash
# Run ESLint
npm run lint
# or
bun run lint
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload (port 8080) |
| `npm run build` | Create production build |
| `npm run build:dev` | Create development build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Design System

Built on Tailwind CSS with custom tokens defined in `tailwind.config.ts` and `src/index.css`:

- **Gradients** — `gradient-sand`, `gradient-gold`, `gradient-sunset`, `gradient-elegant`
- **Shadows** — `sand`, `glow`, `elegant`
- **Animations** — `glow-pulse`, `accordion-down`, `accordion-up`
- **Dark Mode** — Supported via class strategy
- **Components** — 50+ reusable shadcn/ui components

## Content & Branding

- **Logo** — `public/logo.png` (rendered by `SandiesLogo`, with text fallback if the image fails to load)
- **Favicon** — `public/favicon.ico`
- **Venue** — Kutunse satellite, behind DVLA, Accra, Ghana
- **Phone** — +233-206273120 / +233-240468404
- **Email** — sandiesastoria@gmail.com
- **Hours** — Mon–Sun, 9AM–5PM

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary software developed for Sandies Event Center.

## Support

For technical support or questions, contact the development team or open an issue on [GitHub](https://github.com/DavidKofiNyarko/sandies-event-center).
