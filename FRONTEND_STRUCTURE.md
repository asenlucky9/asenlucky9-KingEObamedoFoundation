# King E Obamedo Foundation - Frontend Structure

## Project Overview
**Foundation Name:** King E Obamedo Foundation  
**Location:** Nigeria  
**Type:** Non-Profit Organization  
**Tech Stack:** React + Tailwind CSS + Firebase + Netlify

---

## 📁 Folder Structure

```
king-e-obamedo-foundation/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── images/
│       ├── hero/
│       ├── about/
│       ├── programs/
│       ├── gallery/
│       └── team/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── ScrollToTop.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Programs.jsx
│   │   │   ├── Impact.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Partners.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── donation/
│   │   │   ├── DonationForm.jsx
│   │   │   ├── DonationAmount.jsx
│   │   │   ├── PaymentMethod.jsx
│   │   │   └── DonationSuccess.jsx
│   │   │
│   │   └── volunteer/
│   │       ├── VolunteerForm.jsx
│   │       └── VolunteerCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── ProgramsDetail.jsx
│   │   ├── Gallery.jsx
│   │   ├── Donate.jsx
│   │   ├── Volunteer.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   └── NotFound.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── DonationContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useDonation.js
│   │   ├── useFirebase.js
│   │   └── usePayment.js
│   │
│   ├── services/
│   │   ├── firebase/
│   │   │   ├── config.js
│   │   │   ├── auth.js
│   │   │   ├── firestore.js
│   │   │   ├── storage.js
│   │   │   └── analytics.js
│   │   │
│   │   ├── payment/
│   │   │   ├── paystack.js
│   │   │   └── flutterwave.js
│   │   │
│   │   └── api/
│   │       ├── programs.js
│   │       ├── donations.js
│   │       └── volunteers.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── formatters.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.config.js
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── .env.example
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
├── firebase.json
└── README.md
```

---

## 🎨 Design System & Colors

### Color Palette
- **Navy Blue** (`#1e3a8a` / `#1e40af`): Trust, Stability
- **Orange** (`#f97316` / `#ea580c`): Energy, Hope, Action
- **White** (`#ffffff`): Clean, Professional
- **Gray Scale**: For text and backgrounds

### Typography
- **Headings**: Bold, Impactful
- **Body**: Clean, Readable
- **Fonts**: System fonts or Google Fonts (Inter/Poppins)

---

## 📄 Page Structure & Routes

### 1. **Home Page** (`/`)
**Sections:**
- Hero Section (Full-width banner with CTA)
- About Preview (Brief intro)
- Programs Overview (3-4 featured programs)
- Impact Statistics (Numbers & achievements)
- Testimonials (Success stories)
- Call-to-Action (Donate/Volunteer)
- Partners/Sponsors

### 2. **About Page** (`/about`)
**Sections:**
- Mission & Vision
- Our Story/History
- Core Values
- Team Members
- Board of Directors
- Achievements Timeline

### 3. **Programs Page** (`/programs`)
**Features:**
- Program Grid/List View
- Filter by Category
- Search Functionality
- Program Cards with:
  - Image
  - Title
  - Description
  - Impact Stats
  - Donate Button

### 4. **Program Detail Page** (`/programs/:id`)
**Sections:**
- Program Hero Image
- Full Description
- Objectives
- Impact Metrics
- Gallery
- Donation CTA
- Related Programs

### 5. **Donate Page** (`/donate`)
**Features:**
- Donation Form
- Amount Selection (Quick amounts + Custom)
- Payment Method Selection (Paystack/Flutterwave)
- Donor Information Form
- Recurring Donation Option
- Donation Impact Preview
- Success/Confirmation Page

### 6. **Volunteer Page** (`/volunteer`)
**Features:**
- Volunteer Opportunities List
- Application Form
- Skills/Interests Selection
- Availability Calendar
- Volunteer Testimonials

### 7. **Gallery Page** (`/gallery`)
**Features:**
- Photo Grid
- Filter by Category/Event
- Lightbox View
- Image Captions
- Video Section (if applicable)

### 8. **Blog/News Page** (`/blog`)
**Features:**
- Blog Post Grid
- Categories/Tags
- Search
- Featured Posts
- Pagination

### 9. **Blog Post Page** (`/blog/:slug`)
**Features:**
- Full Article
- Author Info
- Share Buttons
- Related Posts
- Comments (optional)

### 10. **Contact Page** (`/contact`)
**Features:**
- Contact Form
- Office Address
- Phone Numbers
- Email
- Social Media Links
- Map Integration (Google Maps)

---

## 🧩 Component Breakdown

### **Common Components**

#### Header/Navbar
- Logo
- Navigation Links (Home, About, Programs, Donate, Volunteer, Gallery, Blog, Contact)
- Donate Button (Prominent CTA)
- Mobile Menu Toggle
- Language Switcher (English/Yoruba/Hausa/Igbo - optional)

#### Footer
- Foundation Info
- Quick Links
- Contact Information
- Social Media Icons
- Newsletter Signup
- Copyright & Legal Links

#### Button Component
- Variants: Primary (Orange), Secondary (Navy), Outline, Ghost
- Sizes: Small, Medium, Large
- States: Default, Hover, Active, Disabled, Loading

#### Card Component
- Image Card
- Text Card
- Stat Card
- Program Card
- Testimonial Card

---

### **Section Components**

#### Hero Section
- Background Image/Video
- Headline & Subheadline
- CTA Buttons (Donate, Learn More)
- Scroll Indicator

#### About Section
- Mission Statement
- Vision Statement
- Core Values Grid

#### Programs Section
- Program Cards Grid
- Filter Tabs
- View More Button

#### Impact Section
- Statistics Counter Animation
- Impact Metrics Cards
- Visual Charts/Graphs

#### Testimonials Section
- Carousel/Slider
- Testimonial Cards
- Author Info & Image

#### Partners Section
- Partner Logos Grid
- Become a Partner CTA

---

### **Donation Components**

#### DonationForm
- Amount Input/Selection
- Payment Gateway Selection
- Donor Details Form
- Recurring Donation Toggle
- Terms & Conditions Checkbox

#### PaymentMethod
- Paystack Integration
- Flutterwave Integration
- Payment Status Handling

#### DonationSuccess
- Thank You Message
- Receipt Download
- Share Options
- Impact Message

---

## 🔥 Firebase Integration

### Collections Structure
```
firestore/
├── programs/
│   └── {programId}/
│       ├── title
│       ├── description
│       ├── imageUrl
│       ├── category
│       ├── impactStats
│       └── createdAt
│
├── donations/
│   └── {donationId}/
│       ├── amount
│       ├── donorName
│       ├── donorEmail
│       ├── paymentMethod
│       ├── programId (optional)
│       ├── status
│       └── timestamp
│
├── volunteers/
│   └── {volunteerId}/
│       ├── name
│       ├── email
│       ├── phone
│       ├── skills
│       ├── availability
│       └── status
│
├── blog/
│   └── {postId}/
│       ├── title
│       ├── content
│       ├── author
│       ├── imageUrl
│       ├── category
│       ├── publishedAt
│       └── views
│
└── gallery/
    └── {imageId}/
        ├── imageUrl
        ├── caption
        ├── category
        └── uploadedAt
```

---

## 💳 Payment Integration

### Paystack
- Initialize Payment
- Verify Transaction
- Handle Callbacks
- Webhook Support

### Flutterwave
- Initialize Payment
- Verify Transaction
- Handle Callbacks
- Webhook Support

---

## 🎯 Key Features

### 1. **Responsive Design**
- Mobile-first approach
- Tablet & Desktop optimized
- Touch-friendly interactions

### 2. **Performance**
- Image optimization
- Lazy loading
- Code splitting
- Service Worker (PWA ready)

### 3. **SEO**
- Meta tags
- Open Graph tags
- Structured data
- Sitemap

### 4. **Accessibility**
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance

### 5. **Analytics**
- Firebase Analytics
- Google Analytics (optional)
- Event tracking

---

## 📱 Responsive Breakpoints

```javascript
sm: '640px'   // Mobile
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large Desktop
2xl: '1536px' // Extra Large
```

---

## 🚀 Deployment Configuration

### Netlify
- Build command: `npm run build`
- Publish directory: `build` or `dist`
- Environment variables setup
- Redirect rules for SPA routing

### Firebase
- Hosting configuration
- Firestore rules
- Storage rules
- Authentication setup

---

## 📦 Dependencies (Key Packages)

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "tailwindcss": "^3.x",
  "firebase": "^10.x",
  "react-paystack": "^3.x",
  "react-flutterwave": "^1.x",
  "framer-motion": "^10.x",
  "react-icons": "^4.x",
  "react-hot-toast": "^2.x"
}
```

---

## 🔐 Environment Variables

```env
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=

REACT_APP_PAYSTACK_PUBLIC_KEY=
REACT_APP_FLUTTERWAVE_PUBLIC_KEY=

REACT_APP_SITE_URL=
```

---

## 📋 Next Steps (After Approval)

1. ✅ Initialize React project with Vite/CRA
2. ✅ Setup Tailwind CSS
3. ✅ Configure Firebase
4. ✅ Create folder structure
5. ✅ Build common components
6. ✅ Implement routing
7. ✅ Create pages
8. ✅ Integrate payment gateways
9. ✅ Add Firebase services
10. ✅ Style with Tailwind
11. ✅ Test & Deploy

---

## 🎨 Design Principles

- **Clean & Professional**: White space, clear typography
- **Trustworthy**: Navy blue accents, professional imagery
- **Energetic**: Orange CTAs, engaging animations
- **Accessible**: WCAG 2.1 AA compliance
- **Nigerian Context**: Local imagery, cultural sensitivity

---

**Ready to proceed?** Review this structure and let me know if you'd like any changes before we start coding! 🚀
