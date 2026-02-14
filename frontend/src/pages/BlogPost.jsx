import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, BookOpen } from 'lucide-react'
import Button from '../components/ui/Button'

const BlogPost = () => {
  const { slug } = useParams()

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-navy to-primary-navy-dark text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Blog
            </Link>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Blog Post</h1>
              <p className="text-xl text-neutral-200">Article content coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <BookOpen className="w-24 h-24 text-neutral-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Post Not Found</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              The blog post you're looking for doesn't exist yet.
            </p>
            <Button as={Link} to="/blog" variant="primary">
              Back to Blog
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
