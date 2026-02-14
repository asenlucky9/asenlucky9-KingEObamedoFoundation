import { motion } from 'framer-motion'
import { FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const Terms = () => {
  useDocumentTitle('Terms of Use')
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
              <FileText className="text-accent-orange" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-navy dark:text-white mb-6">Terms of Use</h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-10">Last updated: {new Date().toLocaleDateString('en-NG')}</p>

            <div className="prose prose-lg max-w-none text-neutral-700 dark:text-neutral-300 space-y-6">
              <p>
                Welcome to the King E Obamedo Foundation website. By accessing and using this site, you agree to comply with these terms of use.
              </p>
              <h2 className="text-xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Use of Website</h2>
              <p>
                This website is provided for informational purposes and to facilitate donations, volunteer sign-ups, and communication with our foundation. You agree to use the site only for lawful purposes and in a way that does not infringe on the rights of others.
              </p>
              <h2 className="text-xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Donations</h2>
              <p>
                All donations made through this website are voluntary and support the mission of King E Obamedo Foundation. Donations are generally non-refundable. We are grateful for your support in empowering communities and transforming lives.
              </p>
              <h2 className="text-xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Contact</h2>
              <p>
                For questions about these Terms of Use, please contact us at{' '}
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

export default Terms
