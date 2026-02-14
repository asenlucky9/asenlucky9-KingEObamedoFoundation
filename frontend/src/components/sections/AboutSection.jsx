import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'
import { useHomeContent } from '../../context/HomeContentContext'

const AboutSection = () => {
  const { content } = useHomeContent()
  const about = content.about
  return (
    <section className="section-padding bg-white dark:bg-neutral-900 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-cover bg-center relative" style={{ backgroundImage: `url(${about.imageUrl})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-accent-orange text-white px-5 py-2.5 rounded-full shadow-xl font-bold text-sm">
                  {about.sinceBadge}
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-orange/20 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2.5 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-6">
              {about.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-navy dark:text-white mb-6">
              {about.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              {about.paragraph1}
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              {about.paragraph2}
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-10">
              {about.keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="text-accent-orange flex-shrink-0" size={20} />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            <Button as={Link} to="/about" variant="secondary" size="lg">
              {about.buttonText}
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
