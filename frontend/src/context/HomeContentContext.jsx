import { createContext, useContext, useCallback, useMemo, useState, useEffect } from 'react'

const STORAGE_KEY = 'king-obamedo-home-content'

const defaultContent = {
  hero: {
    badge: 'Trusted NGO Since 2020',
    title1: 'Empowering',
    title2: 'Communities',
    title3: 'Transforming Lives',
    subtitle: "Building a brighter future for Nigeria through education, employment, and sustainable community development programs.",
    stat1Value: '10,000+',
    stat1Label: 'Lives Impacted',
    stat2Value: '200+',
    stat2Label: 'Programs',
    stat3Value: '50+',
    stat3Label: 'Partners',
    mainImageUrl: '/founder/Empowering.png',
    mainImageTitle: 'Community Impact',
    mainImageCaption: 'Transforming lives across Nigeria',
    rightCard1Value: '200+',
    rightCard1Label: 'Programs',
    rightCard2Value: '5,000+',
    rightCard2Label: 'Students',
    ourStoryButtonText: 'Our Story',
    scrollText: 'Scroll',
    backgroundImageUrl: '/founder/kingeobamedo.jpeg',
  },
  impact: {
    badge: 'Our Impact',
    heading: 'Making a Real Difference',
    subtext: "Together, we're creating lasting change in communities across Nigeria. Every number represents a life transformed.",
    stats: [
      { value: '10,000+', label: 'Lives Touched', description: 'People directly impacted', gradient: 'from-blue-500 to-cyan-500' },
      { value: '5,000+', label: 'Children Educated', description: 'Students supported', gradient: 'from-green-500 to-emerald-500' },
      { value: '200+', label: 'Programs Completed', description: 'Successful initiatives', gradient: 'from-red-500 to-pink-500' },
      { value: '50+', label: 'Partners', description: 'Trusted organizations', gradient: 'from-purple-500 to-indigo-500' },
    ],
    footerBadge: 'Growing impact every day',
  },
  about: {
    badge: 'About Our Foundation',
    title: 'Empowering Communities, Transforming Lives',
    paragraph1: 'King E Obamedo Foundation is a dedicated non-profit organization committed to creating lasting positive change in communities across Nigeria. We focus on empowering individuals through education, skills training, employment opportunities, and community development initiatives.',
    paragraph2: 'Our foundation believes in the power of education, economic empowerment, and community support to transform lives and build stronger, more resilient communities.',
    keyPoints: ['10,000+ Lives Touched', '200+ Programs Completed', '50+ Trusted Partners'],
    buttonText: 'Learn More About Us',
    sinceBadge: 'Since 2020',
    imageUrl: '/founder/kingeobamedo.jpeg',
  },
  highlightPrograms: {
    badge: 'Our Programs',
    title: 'Transforming Lives Through Action',
    subtitle: 'Comprehensive programs designed to address the most pressing needs in our communities.',
    buttonText: 'Explore All Programs',
  },
  galleryPreview: {
    badge: 'Gallery',
    title: 'See Our Impact in Action',
    subtitle: 'A visual journey through our programs, events, and community impact.',
    buttonText: 'View Full Gallery',
  },
  testimonials: {
    badge: 'Testimonials',
    title: 'Stories of Transformation',
    subtitle: 'Real stories from people whose lives have been touched by our work.',
    items: [
      { id: 1, name: 'Amina Hassan', role: 'Beneficiary', location: 'Lagos', content: 'The foundation provided my children with scholarships that changed our lives completely. Today, they are pursuing their dreams in university. We are forever grateful.', rating: 5 },
      { id: 2, name: 'John Okonkwo', role: 'Community Leader', location: 'Abuja', content: 'Their programs brought real change to our community. Many families received support and opportunities they never had before. This is genuine impact.', rating: 5 },
      { id: 3, name: 'Fatima Ibrahim', role: 'Volunteer', location: 'Kano', content: 'Volunteering with this foundation has been life-changing. I see the real impact we make every day. The transparency and dedication of the team is remarkable.', rating: 5 },
    ],
  },
  partners: {
    badge: 'Our Partners',
    title: 'Trusted by Leading Organizations',
    subtitle: 'We work with dedicated partners who share our vision of creating lasting positive change.',
    emptyMessage: 'Partners will be listed here as they join our mission.',
    items: [],
  },
  callToAction: {
    title: 'Get Involved Today',
    subtitle: "Join us in making a real difference. Whether you donate, volunteer, or join our programs, your participation creates lasting positive change.",
    actions: [
      { title: 'Make a Donation', description: 'Support our programs and make a lasting impact in communities across Nigeria.', link: '/donate', variant: 'primary', color: 'from-accent-orange to-orange-600' },
      { title: 'Volunteer With Us', description: 'Join our team of dedicated volunteers and help us create positive change.', link: '/get-involved', variant: 'outline', color: 'from-primary-navy to-primary-navy-dark' },
      { title: 'Join Our Programs', description: 'Explore our programs and apply for skills training, employment opportunities, or educational support.', link: '/programs', variant: 'outline', color: 'from-green-500 to-emerald-600' },
    ],
    trustBadges: ['100% Transparent', 'Verified NGO', 'Tax Deductible'],
    getStartedButtonText: 'Get Started',
  },
}

function loadContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultContent
    const parsed = JSON.parse(raw)
    return deepMerge(defaultContent, parsed)
  } catch {
    return defaultContent
  }
}

function deepMerge(target, source) {
  const out = { ...target }
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) && source[key] !== null) {
      if (Array.isArray(target[key])) {
        out[key] = Array.isArray(source[key]) ? source[key] : target[key]
      } else {
        out[key] = deepMerge(target[key] || {}, source[key] || {})
      }
    } else if (source[key] !== undefined) {
      out[key] = source[key]
    }
  }
  return out
}

const HomeContentContext = createContext(null)

export function HomeContentProvider({ children }) {
  const [content, setContentState] = useState(loadContent)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
    } catch (e) {
      console.warn('Failed to persist home content', e)
    }
  }, [content])

  const updateSection = useCallback((section, data) => {
    setContentState((prev) => ({
      ...prev,
      [section]: typeof data === 'function' ? data(prev[section]) : { ...prev[section], ...data },
    }))
  }, [])

  const resetSection = useCallback((section) => {
    if (defaultContent[section] === undefined) return
    setContentState((prev) => ({ ...prev, [section]: defaultContent[section] }))
  }, [])

  const resetAll = useCallback(() => {
    setContentState(defaultContent)
  }, [])

  const value = useMemo(
    () => ({ content, updateSection, resetSection, resetAll, defaults: defaultContent }),
    [content, updateSection, resetSection, resetAll]
  )

  return <HomeContentContext.Provider value={value}>{children}</HomeContentContext.Provider>
}

export function useHomeContent() {
  const ctx = useContext(HomeContentContext)
  if (!ctx) return { content: defaultContent, updateSection: () => {}, resetSection: () => {}, resetAll: () => {}, defaults: defaultContent }
  return ctx
}
