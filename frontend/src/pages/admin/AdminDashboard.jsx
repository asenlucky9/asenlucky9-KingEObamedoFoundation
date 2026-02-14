import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { DollarSign, Briefcase, Images, Users, TrendingUp, FileText } from 'lucide-react'

const AdminDashboard = () => {
  useDocumentTitle('Admin - Dashboard')

  const stats = [
    { label: 'Total Donations', value: '—', icon: DollarSign, color: 'from-emerald-500 to-teal-600' },
    { label: 'Programs', value: '6', icon: Briefcase, color: 'from-blue-500 to-indigo-600' },
    { label: 'Gallery Items', value: '—', icon: Images, color: 'from-purple-500 to-pink-600' },
    { label: 'Volunteers', value: '—', icon: Users, color: 'from-orange-500 to-amber-600' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-primary-navy dark:text-white">Dashboard</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
          Welcome to the King E Obamedo Foundation admin panel.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                <Icon size={24} className="text-white" strokeWidth={2} />
              </div>
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{stat.label}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
        <h2 className="text-lg font-semibold text-primary-navy dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/admin/home"
            className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-navy/30 dark:hover:border-accent-orange/50 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <FileText size={20} className="text-accent-orange" strokeWidth={2} />
            <span className="font-medium">Edit Home Content</span>
          </Link>
          <Link
            to="/admin/donations"
            className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-navy/30 dark:hover:border-accent-orange/50 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <TrendingUp size={20} className="text-accent-orange" strokeWidth={2} />
            <span className="font-medium">View Donations</span>
          </Link>
          <Link
            to="/admin/programs"
            className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-navy/30 dark:hover:border-accent-orange/50 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <Briefcase size={20} className="text-primary-navy dark:text-primary-navy-light" strokeWidth={2} />
            <span className="font-medium">Manage Programs</span>
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-navy/30 dark:hover:border-accent-orange/50 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <TrendingUp size={20} className="text-neutral-500" strokeWidth={2} />
            <span className="font-medium">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
