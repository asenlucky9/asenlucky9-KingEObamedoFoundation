import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { BookOpen } from 'lucide-react'

const AdminBlog = () => {
  useDocumentTitle('Admin - Blog')

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-primary-navy dark:text-white">Blog</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
          Create and manage blog posts.
        </p>
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-12 text-center">
        <BookOpen size={64} className="mx-auto text-neutral-300 dark:text-neutral-600 mb-6" strokeWidth={1.5} />
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Blog Management</h3>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
          Write and publish blog articles. Integrate with Firestore or a headless CMS to enable.
        </p>
        <button
          disabled
          className="mt-6 px-6 py-3 rounded-lg bg-primary-navy/10 dark:bg-primary-navy/20 text-primary-navy dark:text-primary-navy-light font-medium cursor-not-allowed opacity-60"
        >
          Coming Soon
        </button>
      </div>
    </div>
  )
}

export default AdminBlog
