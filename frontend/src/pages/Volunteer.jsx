import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HandHeart, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-white">
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
              <HandHeart className="text-accent-orange" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Volunteer</h1>
            <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed">
              Join us in making a difference. Your time and skills can transform lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Redirect Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              To volunteer with us, please visit our Get Involved page where you can fill out the volunteer application form.
            </p>
            <Button as={Link} to="/get-involved" variant="primary" size="lg">
              Go to Get Involved
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Volunteer
