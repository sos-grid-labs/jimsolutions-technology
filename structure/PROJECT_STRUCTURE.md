# Recommended Project Structure

```text
jimsolutions-technology/
├── public/
│   └── img/
│       ├── logo.jpg
│       ├── hero/
│       ├── projects/
│       ├── gallery/
│       ├── solar/
│       ├── electrical/
│       ├── appliances/
│       ├── kitchens/
│       └── interiors/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── services/electrical/page.tsx
│   │   ├── services/solar/page.tsx
│   │   ├── services/appliances/page.tsx
│   │   ├── services/kitchen/page.tsx
│   │   ├── services/interior-design/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── faq/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── lib/
│   └── styles/
├── docs/
├── prompts/
├── AGENTS.md
└── README.md
```

## Note
If your current images are in a root `img/` folder, move them into `public/img/` for easiest use with Next.js.
