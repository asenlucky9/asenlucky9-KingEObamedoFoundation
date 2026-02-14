import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { Briefcase } from 'lucide-react'
import { programs } from '../../data/programsData'

const AdminPrograms = () => {
  useDocumentTitle('Admin - Programs')

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-primary-navy dark:text-white">Programs</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
          Manage program content. Currently using static data.
        </p>
      </div>

      <div className="grid gap-4">
        {programs.map((program) => {
          const Icon = program.icon
          return (
          <div
            key={program.id}
            className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 flex items-start gap-4 hover:border-primary-navy/30 dark:hover:border-accent-orange/30 transition-colors"
          >
            <div className="p-3 rounded-lg bg-primary-navy/10 dark:bg-primary-navy/20 shrink-0">
              {Icon && <Icon size={24} className="text-primary-navy dark:text-primary-navy-light" strokeWidth={2} />}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-primary-navy dark:text-white">{program.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                {program.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  {program.category}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  {program.participants}
                </span>
              </div>
            </div>
            <button
              disabled
              className="px-4 py-2 text-sm font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 cursor-not-allowed"
              title="Edit functionality coming soon"
            >
              Edit
            </button>
          </div>
          )
        })}
      </div>

      <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <strong>Note:</strong> Programs are currently loaded from{' '}
          <code className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700 text-xs">programsData.js</code>.
          To enable editing, integrate with Firestore or a CMS.
        </p>
      </div>
    </div>
  )
}

export default AdminPrograms
