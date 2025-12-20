# Business Solutions Website

A modern Next.js website showcasing branding, software development, and SEO services.

## Features

- **Homepage** - Hero section with services overview
- **Services Pages** - Dedicated pages for Branding, Software, and SEO
- **About Page** - Company information and philosophy
- **Contact Page** - Contact form and information
- **Responsive Design** - Mobile-first, fully responsive layout
- **Modern UI** - Clean, professional design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Project Structure

```
website/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   └── services/
│       ├── page.tsx          # Services overview
│       ├── branding/
│       │   └── page.tsx      # Branding service page
│       ├── software/
│       │   └── page.tsx      # Software service page
│       └── seo/
│           └── page.tsx      # SEO service page
├── components/
│   ├── Navbar.tsx            # Navigation component
│   └── Footer.tsx            # Footer component
└── public/                   # Static assets
```

## Customization

### Update Brand Name

Replace "YourBrand" in:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)

### Update Contact Information

Edit contact details in:
- `app/contact/page.tsx`
- `components/Footer.tsx`

### Customize Colors

The website uses Tailwind CSS. Update colors in:
- Service pages (orange, blue, green gradients)
- Components (gray-900, gray-800, etc.)

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## License

Private project - All rights reserved
