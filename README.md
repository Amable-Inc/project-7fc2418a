# B2B SaaS Landing Page

A modern, professional landing page for a B2B SaaS product built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS
- 🧩 shadcn/ui components
- 📱 Fully responsive
- 🚀 Performance optimized

## Sections Included

1. **Navigation** - Fixed header with CTA buttons
2. **Hero Section** - Eye-catching headline with email capture form
3. **Features** - 6 key features with icons
4. **Social Proof** - Company logos
5. **Testimonials** - Customer reviews with ratings
6. **Pricing** - 3-tier pricing table
7. **CTA Section** - Call-to-action before footer
8. **Footer** - Complete footer with links

## Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Change Brand Name & Colors

- Update the brand name "SaaSify" in `app/page.tsx`
- Modify colors in `tailwind.config.ts` and throughout the components
- Update the gradient colors in the logo and buttons

### Modify Content

All content is in `app/page.tsx`. Update:
- Hero headline and description
- Features array
- Testimonials array
- Pricing plans array
- Footer links

### Add More Components

This project uses shadcn/ui. Add more components:

```bash
npx shadcn-ui@latest add [component-name]
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

## Project Structure

```
/home/user/project/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── ui/              # shadcn/ui components
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts         # Utility functions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## License

MIT
