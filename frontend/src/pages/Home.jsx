import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Hero from '../components/sections/Hero'
import Impact from '../components/sections/Impact'
import AboutSection from '../components/sections/AboutSection'
import HighlightPrograms from '../components/sections/HighlightPrograms'
import GalleryPreview from '../components/sections/GalleryPreview'
import Testimonials from '../components/sections/Testimonials'
import Partners from '../components/sections/Partners'
import CallToAction from '../components/sections/CallToAction'

const Home = () => {
  useDocumentTitle('Home')
  return (
    <>
      <Hero />
      <Impact />
      <AboutSection />
      <HighlightPrograms />
      <GalleryPreview />
      <Testimonials />
      <Partners />
      <CallToAction />
    </>
  )
}

export default Home
