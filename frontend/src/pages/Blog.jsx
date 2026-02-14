import { motion } from 'framer-motion'
import { BookOpen, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const Blog = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-navy to-primary-navy-dark text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-center mx-auto"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-accent-orange/20 backdrop-blur-md rounded-full mb-8 border-2 border-accent-orange/30">
              <BookOpen className="text-accent-orange" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & News</h1>
            <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed">
              Stay updated with our latest stories, impact reports, and news from the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 bg-accent-orange/10 rounded-full mb-8">
              <BookOpen className="text-accent-orange" size={64} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-navy dark:text-white mb-6">Coming Soon</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're working on bringing you inspiring stories, impact updates, and news from our programs. Check back soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} to="/" variant="primary" size="lg">
                Back to Home
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button as={Link} to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
