import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 bg-accent-orange/10 rounded-full mb-8">
            <Search className="text-accent-orange" size={64} />
          </div>
          <h1 className="text-8xl md:text-9xl font-bold text-primary-navy mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-navy mb-4">Page Not Found</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as={Link} to="/" variant="primary" size="lg" className="flex items-center">
              <Home className="mr-2" size={18} />
              Go Home
            </Button>
            <Button as={Link} to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
