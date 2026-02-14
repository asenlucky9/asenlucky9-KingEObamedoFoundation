import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const Privacy = () => {
  useDocumentTitle('Privacy Policy')

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button as={Link} to="/" variant="ghost" size="sm" className="mb-8 -ml-2">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-orange/10 rounded-full mb-8">
              <Shield className="text-accent-orange" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-navy dark:text-white mb-6">Privacy Policy</h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-10">Last updated: {new Date().toLocaleDateString('en-NG')}</p>

            <div className="prose prose-lg max-w-none text-neutral-700 dark:text-neutral-300 space-y-6">
              <p>
                King E Obamedo Foundation is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information when you interact with our website and services.
              </p>
              <h2 className="text-xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Information We Collect</h2>
              <p>
                We collect information you provide directly, such as when you donate, volunteer, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and payment information.
              </p>
              <h2 className="text-xl font-bold text-primary-navy dark:text-white mt-8 mb-4">How We Use Your Information</h2>
              <p>
                We use your information to process donations, communicate with you about our programs, send updates and newsletters, and improve our services. We never sell or share your personal information with third parties for marketing purposes.
              </p>
              <h2 className="text-xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. Payment transactions are processed through secure, encrypted channels.
              </p>
              <h2 className="text-xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Contact Us</h2>
              <p>
                For questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:king@obamedo.net" className="text-accent-orange hover:text-accent-orange-dark font-medium">
                  king@obamedo.net
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
