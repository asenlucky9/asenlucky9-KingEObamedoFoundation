# King E. Obamedo Foundation - Project Structure

## Overview
A modern, responsive website for the King E. Obamedo Foundation built with React, Tailwind CSS, and Framer Motion.

## Project Structure

```
frontend/
├── public/                    # Static assets
│   ├── founder/             # Founder images
│   ├── foundetion logo/    # Foundation logo
│   ├── employment/          # Program images
│   └── _redirects           # Netlify redirects
│
├── src/
│   ├── components/          # Reusable components
│   │   ├── common/         # Common components (Header, Footer, Layout, Navbar)
│   │   ├── sections/       # Page sections (Hero, Impact, Programs, etc.)
│   │   └── ui/             # UI components (Button)
│   │
│   ├── data/               # Centralized data
│   │   ├── programsData.js # Program data (shared across components)
│   │   └── galleryData.js  # Gallery data
│   │
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── ProgramDetail.jsx
│   │   ├── Donate.jsx
│   │   ├── GetInvolved.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Volunteer.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/           # External services
│   │   └── firebase/       # Firebase configuration
│   │
│   ├── utils/              # Utility functions
│   │   └── helpers.js      # Helper functions (cn, formatCurrency, etc.)
│   │
│   ├── App.jsx             # Main app component with routes
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles and Tailwind directives
│
├── netlify.toml            # Netlify deployment configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## Key Features

### Design System
- **Colors**: Navy Blue (#1e3a8a), Orange (#f97316), White
- **Fonts**: Poppins, Inter, Montserrat
- **Responsive**: Mobile-first design approach
- **Animations**: Framer Motion for smooth transitions

### Data Management
- **Centralized Data**: Program data stored in `src/data/programsData.js`
- **Shared Gallery**: Gallery data in `src/data/galleryData.js`
- **Consistent**: Single source of truth for program information

### Components Architecture

#### Common Components
- **Header**: Navigation and logo
- **Footer**: Contact information and links
- **Layout**: Wrapper component with Header and Footer
- **Navbar**: Navigation menu with icons

#### Section Components
- **Hero**: Hero section with community impact image
- **Impact**: Statistics and impact metrics
- **AboutSection**: About preview on home page
- **HighlightPrograms**: Featured programs grid
- **GalleryPreview**: Gallery preview on home page
- **Testimonials**: Testimonials section
- **Partners**: Partners section
- **CallToAction**: Donation call-to-action

### Pages

1. **Home** (`/`): Landing page with all sections
2. **About** (`/about`): Foundation history, founder story, goals
3. **Programs** (`/programs`): All programs with search and filter
4. **Program Detail** (`/programs/:id`): Individual program details with gallery
5. **Donate** (`/donate`): Donation form with payment integration
6. **Get Involved** (`/get-involved`): Volunteer and partnership forms
7. **Gallery** (`/gallery`): Photo gallery with categories
8. **Contact** (`/contact`): Contact form and map
9. **Blog** (`/blog`): Blog listing (coming soon)
10. **Volunteer** (`/volunteer`): Redirects to Get Involved

### Routing
- React Router DOM for client-side routing
- Protected routes and 404 handling
- Smooth scroll navigation

### Styling
- Tailwind CSS for utility-first styling
- Custom CSS classes in `index.css`
- Responsive breakpoints: sm, md, lg
- Consistent spacing and typography scale

### Performance
- Code splitting with React Router
- Lazy loading for images
- Optimized animations
- Fast loading times

## Development

### Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Environment Variables
Create `.env` file with:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
# ... other Firebase config
```

## Deployment

### Netlify
- Configuration in `netlify.toml`
- Redirects in `public/_redirects`
- Build command: `npm install && npm run build`
- Publish directory: `dist`

## Best Practices

1. **Component Organization**: Components organized by type (common, sections, ui)
2. **Data Centralization**: Shared data in `data/` folder
3. **Reusability**: Components designed for reuse
4. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
5. **Performance**: Optimized images, lazy loading, code splitting
6. **Consistency**: Consistent styling and spacing throughout

## Future Enhancements

- [ ] Payment gateway integration (Paystack/Flutterwave)
- [ ] Firebase authentication
- [ ] Blog CMS integration
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Multi-language support
