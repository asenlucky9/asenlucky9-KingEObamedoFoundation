import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { Images } from 'lucide-react'

const AdminGallery = () => {
  useDocumentTitle('Admin - Gallery')

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-primary-navy dark:text-white">Gallery</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
          Manage gallery images and categories.
        </p>
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-12 text-center">
        <Images size={64} className="mx-auto text-neutral-300 dark:text-neutral-600 mb-6" strokeWidth={1.5} />
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Gallery Management</h3>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
          Upload, organize, and manage gallery photos. Connect to Firebase Storage or your media backend to enable.
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

export default AdminGallery
