# System Patterns - LUXA Portfolio

## Architecture Overview
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling
- **Deployment**: Vercel (optimized for Next.js)
- **Performance**: Built-in Next.js optimizations

## Key Technical Decisions
- **App Router**: Using Next.js 14+ App Router for modern routing and server components
- **Server Components**: Leveraging React Server Components for better performance
- **TypeScript**: Full TypeScript implementation for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development and consistency
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Design Patterns
- **Component-Based Architecture**: Reusable, modular components
- **Atomic Design**: Building from atoms to organisms to templates
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Performance First**: Optimized images, lazy loading, and code splitting
- **Accessibility**: WCAG 2.1 AA compliance built-in

## Component Structure
```
components/
├── ui/           # Base UI components (buttons, inputs, etc.)
├── layout/       # Layout components (header, footer, etc.)
├── sections/     # Page sections (hero, services, portfolio, etc.)
├── animations/   # Animation and interaction components
└── shared/       # Shared utilities and hooks
```

## Page Structure
```
app/
├── page.tsx      # Homepage
├── about/        # About page
├── services/     # Services page
├── portfolio/    # Portfolio/Projects page
├── contact/      # Contact page
└── layout.tsx    # Root layout
```

## State Management
- **Local State**: React useState for component-level state
- **Form State**: React Hook Form for form management
- **Global State**: Context API if needed for theme/UI state
- **Server State**: Next.js server components for data fetching

## Performance Patterns
- **Image Optimization**: Next.js Image component with automatic optimization
- **Font Loading**: Next.js font optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Caching**: Built-in Next.js caching strategies
- **Lazy Loading**: Automatic for images and components 