# RapidProto - Rapid Prototyping Agency Website

A modern, minimal, and highly attractive website for a rapid prototyping agency specializing in IoT, embedded systems, and edge computing.

## Features

- Modern dark mode design with gradient accents
- Fully responsive layout (mobile, tablet, desktop)
- Smooth scroll animations with Framer Motion
- Interactive contact form with validation
- SEO optimized with comprehensive metadata
- Performance optimized with Next.js 14+
- TypeScript for type safety
- Tailwind CSS for styling

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Font**: Inter (Google Fonts)

## Project Structure

```
rapid-prototyping-site/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Hero.tsx            # Hero section with animations
│   ├── Services.tsx        # Services grid (6 cards)
│   ├── Process.tsx         # 4-step process timeline
│   ├── Projects.tsx        # Project showcase cards
│   ├── Partners.tsx        # Partner logo grid
│   ├── WhyChooseUs.tsx     # Feature highlights
│   ├── ContactForm.tsx     # Contact form with validation
│   └── Footer.tsx          # Footer with links
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Image assets
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd rapid-prototyping-site
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Development

The page auto-updates as you edit files. Key files to customize:

- `app/layout.tsx` - Update SEO metadata and site information
- `components/` - Modify individual sections
- `app/globals.css` - Customize colors and styles
- `lib/utils.ts` - Add utility functions

## Customization

### Color Palette

The color palette is defined in `app/globals.css`:

- Primary: `#0F172A`, `#1E293B`, `#334155`
- Accents: Cyan `#06B6D4`, Purple `#8B5CF6`, Orange `#F97316`
- Text: White `#FFFFFF`, Gray `#94A3B8`, Muted `#64748B`

### Content Updates

1. **Agency Name**: Replace "RapidProto" throughout the codebase
2. **Services**: Edit the `services` array in `components/Services.tsx`
3. **Projects**: Update the `projects` array in `components/Projects.tsx`
4. **Partners**: Modify the `partners` array in `components/Partners.tsx`
5. **Contact Info**: Update email and social links in `components/ContactForm.tsx` and `components/Footer.tsx`

### Form Backend Integration

The contact form currently simulates submission. To integrate a real backend:

1. **Option 1 - FormSpree**:
   - Sign up at [formspree.io](https://formspree.io)
   - Update the form action in `components/ContactForm.tsx`

2. **Option 2 - Custom API Route**:
   - Create `app/api/contact/route.ts`
   - Implement POST handler with email service (SendGrid, Resend, etc.)
   - Update form submission in `components/ContactForm.tsx`

## Build for Production

```bash
npm run build
npm run start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy with zero configuration

### Environment Variables

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
FORM_SUBMISSION_API=your_api_endpoint
```

## Performance

- Lighthouse Score Target: 90+
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized fonts with `next/font`

## Accessibility

- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- ARIA labels for interactive elements
- Semantic HTML structure
- Sufficient color contrast ratios

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please open an issue on GitHub or contact the development team.
