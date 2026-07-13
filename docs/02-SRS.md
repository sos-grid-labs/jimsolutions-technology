# SRS — Jimsolutions Technology Website

## 1. Technology stack
- Next.js 15
- React
- TypeScript
- Tailwind CSS v4
- Font Awesome
- Google Fonts
- Framer Motion for subtle animation
- Vercel deployment

## 2. Project structure
Recommended structure:

```text
public/
  img/
    logo.jpg
    hero/
    services/
    projects/
    gallery/
  favicon.ico

src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    services/page.tsx
    services/electrical/page.tsx
    services/solar/page.tsx
    services/appliances/page.tsx
    services/kitchen/page.tsx
    services/interior-design/page.tsx
    projects/page.tsx
    gallery/page.tsx
    faq/page.tsx
    contact/page.tsx
  components/
    layout/
    sections/
    ui/
  data/
  lib/
  styles/
```

## 3. Functional requirements
- The home page shall introduce the company, services, and primary CTA
- The about page shall explain the business and value proposition
- The services page shall list all services with clear details
- The projects page shall show sample project entries and real project photos
- The gallery page shall display selected visuals from the `img` folder
- The FAQ page shall answer common customer questions
- The contact page shall display phone, email, WhatsApp, address, and hours
- The site shall include a floating WhatsApp button on all pages
- The site shall include click-to-call buttons on all pages

## 4. Non-functional requirements
- Fast loading
- Responsive on mobile, tablet, and desktop
- Accessible semantic HTML
- Strong performance on Lighthouse
- Minimal JavaScript overhead
- SEO-friendly markup
- Maintainable component structure

## 5. SEO requirements
- Unique title and description on every page
- Open Graph metadata
- Twitter card metadata
- Canonical URLs
- LocalBusiness schema
- Organization schema
- Service schema on service pages
- FAQ schema on FAQ page
- Breadcrumb schema where useful
- Image alt text
- Internal linking between service pages and contact page

## 6. UI requirements
- Use a premium, restrained color palette
- Use Manrope for headings and Inter for body text
- Use Font Awesome for social/contact icons
- Keep sections consistent and easy to scan
- Use card layouts for services and projects
- Use subtle hover interactions only

## 7. Content requirements
- Use realistic draft testimonials, clearly written as sample placeholders until approved
- Use realistic project summaries, clearly written as sample placeholders until approved
- Avoid fake proof or unverifiable claims
- Mention Lagos and nationwide service area
- Mention working hours as 8am to 10pm daily
- Mention electrical, solar, appliances, kitchen, interior, and laundry services

## 8. WhatsApp CTA behavior
WhatsApp should be the primary lead channel.

Prefilled message example:
- Hello Jimsolutions Technology, I need a quote for [service]. My location is [location].

## 9. Acceptance criteria
- The codebase matches the defined folder structure
- All pages render correctly
- Metadata is present
- WhatsApp CTA works
- The site feels professional and polished
