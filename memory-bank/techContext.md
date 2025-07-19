# Technical Context - LUXA Portfolio

## Technology Stack
- **Framework**: Next.js 14+ (Latest stable version)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **Package Manager**: npm or yarn
- **Deployment**: Vercel (recommended for Next.js)

## Development Setup
- **Node.js**: Version 18+ required
- **Code Editor**: VS Code with recommended extensions
- **Version Control**: Git with GitHub
- **Environment**: Development, staging, production

## Key Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.3.0",
  "autoprefixer": "^10.4.0",
  "postcss": "^8.4.0"
}
```

## Optional Dependencies (Based on Features)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React or Heroicons
- **Date Handling**: date-fns
- **HTTP Client**: Built-in fetch or axios

## Development Tools
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier
- **Type Checking**: TypeScript compiler
- **Testing**: Jest + React Testing Library (if needed)

## Build & Deployment
- **Build Tool**: Next.js built-in
- **Hosting**: Vercel (optimized for Next.js)
- **Domain**: Custom domain setup
- **SSL**: Automatic with Vercel
- **CDN**: Global edge network

## Performance Requirements
- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Pass all thresholds
- **Load Time**: < 3 seconds on 3G
- **SEO**: 100% technical SEO score

## Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Core functionality works without JavaScript 