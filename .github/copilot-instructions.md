# Copilot Instructions - Maël's Portfolio

Professional portfolio website for Maël Lecomte - Full Stack Developer & System Administrator.

## Quick Architecture

**Tech Stack**: Next.js 14 + TypeScript + TailwindCSS + Framer Motion

**Key Features**:
- Dark mode toggle with next-themes
- Smooth animations with Framer Motion
- Responsive mobile-first design
- Dynamic project detail pages with [slug] routing
- No backend required (static data in `/lib`)

**Core Pages**:
1. `/` — Home/About with hero, timeline, CTA
2. `/competences` — Skills grid with category filtering
3. `/experiences` — Experience timeline with highlights
4. `/projets` — Project gallery with cards
5. `/projets/[slug]` — Dynamic project detail pages
6. `/contact` — Contact form + social links

**Key Components**:
- `Navbar.tsx` — Sticky header with nav + theme toggle + mobile menu
- `Footer.tsx` — Footer with links, socials, CTA
- `MotionFade.tsx` — Reusable fade/slide animation wrapper
- `SectionTitle.tsx` — Styled section headers
- `Providers.tsx` — next-themes integration

**Data Files** (in `/lib`):
- `projects.ts` — Project definitions with slug, tech, features, challenge/solution/result
- `experiences.ts` — Experience entries with period, company, technologies, highlights
- `skills.ts` — Skill categories with items (no icons imported, use Lucide when rendering)

## Important Patterns

### Animations
- Use `MotionFade` component for fade-in effects with delay/direction control
- Wrap page layouts with Framer Motion `motion.div` for stagger animations
- Use `whileHover={{ y: -8 }}` for card hover effects
- Use `initial/animate/whileInView` for scroll-triggered animations

### Colors & Styling
- Primary gradient: `from-blue-500 via-purple-500 to-pink-500`
- Dark mode: Uses `dark:` prefix for Tailwind classes
- Neutral palette: `neutral-{50,100,200,800,900}` for backgrounds/borders
- Accent: Blue 500 for primary actions

### Navigation
- Logo/home link: `/`
- All pages routable from Navbar (sticky with underline indicator)
- Mobile menu uses state toggle + conditional render
- Active page highlighted with blue gradient underline (LayoutGroup for smooth transition)

### Project Pages
- Project slug defined in `projects.ts`
- Dynamic route: `/app/projets/[slug]/page.tsx`
- Finds project in array by slug match
- Shows 404 if slug not found
- Displays challenge/solution/result in colored cards (blue/purple/green)
- Links to related projects at bottom

## Editing Workflows

### Adding a New Project
1. Add object to `projects` array in `lib/projects.ts` with:
   - `id` (unique string)
   - `slug` (URL-friendly string)
   - `title, shortDesc, fullDesc`
   - `technologies` (array of strings)
   - `features` (bullet points array)
   - `challenge, solution, result` (strings for colored cards)
   - `github?, demo?` (optional links)
   - `status` ("completed" or "in-progress")
2. Automatically appears on `/projets` page
3. Accessible at `/projets/[slug]`

### Adding a New Experience
1. Add object to `experiences` array in `lib/experiences.ts` with:
   - `id, title, company, period`
   - `description` (short summary)
   - `technologies` (array)
   - `highlights` (array of key points)
2. Automatically renders on `/experiences` page in timeline

### Adding Skills
1. Add object to `skills` array in `lib/skills.ts` with:
   - `category` (string, appears as h3 heading and filter button)
   - `items` (array of skill names)
2. Page has category filter buttons
3. All skills shown if no filter selected

### Styling Changes
- All CSS in `styles/globals.css` (Tailwind directives)
- Colors in `tailwind.config.ts` (extend colors if needed)
- Font sizes and spacing already customized in `theme.extend`

### Animations
- Increase `delay` prop in `MotionFade` to stagger elements
- Change `direction` prop ("up", "left", "right", "none")
- Modify `duration` for slower/faster animations
- Use `transition={{ duration, delay, ease: "easeOut" }}` for custom Framer Motion configs

## Technical Notes

**Routing**: Uses Next.js App Router (not Pages Router)

**Images**: No image components imported yet. If adding project images:
- Store in `/public/images/`
- Use `Image` from `next/image`
- Add `image` field to project object
- Render in project detail page

**Forms**: Contact form uses `mailto:` link (no backend). To add email service:
- Replace `handleSubmit` in `/contact/page.tsx`
- Integrate Formspree, SendGrid, or similar
- Update email address references

**Meta Tags**: Defined in `app/layout.tsx`. Update title/description for SEO.

**Performance**:
- Next.js automatic code splitting
- TailwindCSS purges unused styles
- Framer Motion optimized for 60fps
- No images currently, so no optimization needed yet

## Integrating with Main Site

Portfolio button in main site navbar should:
1. Link to `/portfolio` OR
2. Open in new tab if hosted separately
3. Use same color scheme (blue-purple gradient) for consistency

Add to main site's Navbar.tsx:
```tsx
<Link href="/portfolio" className="... button styles ...">
  Portfolio
</Link>
```

Or if separate domain:
```tsx
<a href="https://portfolio-mael.vercel.app" target="_blank" rel="noopener noreferrer">
  Portfolio
</a>
```

## Common Tasks

**Change primary color**: Update gradient in Tailwind `from-blue-500 via-purple-500 to-pink-500` references throughout pages. Or modify `tailwind.config.ts` to create custom color variables.

**Add social links**: Update URLs in `Navbar.tsx` and `Footer.tsx` social link arrays.

**Update contact email**: Find-replace `contact@example.com` throughout (appears in Footer, Contact page, Navbar footer section).

**Change header title**: Update `<h1>` in `app/page.tsx` hero section.

**Disable dark mode**: Remove `next-themes` from Navbar toggle, remove `dark:` classes (or keep as-is for always-dark aesthetic).

## Future Enhancements

- Add blog section with `[slug]` posts
- Integration with GitHub API for live project stats
- Contact form backend (Formspree, Resend, etc.)
- Project images/screenshots
- Resume PDF download
- Analytics tracking
- Testimonials carousel
- Case studies with screenshots

---

**Made with Next.js 14 + TypeScript + Framer Motion**
