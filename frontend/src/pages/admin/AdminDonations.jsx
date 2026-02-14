import { useState, useEffect } from 'react'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase/config'
import { DollarSign, Loader2 } from 'lucide-react'

const AdminDonations = () => {
  useDocumentTitle('Admin - Donations')
  const [donations, setDonations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDonations = async () => {
      if (!db) {
        setError('Firebase not configured')
        setLoading(false)
        return
      }

      try {
        const q = query(
          collection(db, 'donations'),
          orderBy('createdAt', 'desc')
        )
        const snapshot = await getDocs(q)
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.() || doc.data().createdAt,
        }))
        setDonations(data)
      } catch (err) {
        console.error('Error fetching donations:', err)
        setError(err.message || 'Failed to load donations')
      } finally {
        setLoading(false)
      }
    }

    fetchDonations()
  }, [])

  const formatDate = (date) => {
    if (!date) return '—'
    const d = date instanceof Date ? date : new Date(date)
    return d.toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount || 0)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-primary-navy dark:text-white">Donations</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
          View and manage donation records from the website.
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 size={40} className="animate-spin text-accent-orange" strokeWidth={2} />
        </div>
      ) : error ? (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 text-amber-800 dark:text-amber-200">
          <p className="font-medium">Unable to load donations</p>
          <p className="text-sm mt-2">{error}</p>
          <p className="text-sm mt-2 text-amber-700 dark:text-amber-300">
            Ensure Firebase is configured and the donations collection exists.
          </p>
        </div>
      ) : donations.length === 0 ? (
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-12 text-center">
          <DollarSign size={48} className="mx-auto text-neutral-300 dark:text-neutral-600 mb-4" strokeWidth={1.5} />
          <p className="text-neutral-600 dark:text-neutral-400">No donations yet.</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
            Donations submitted through the donate page will appear here.
          </p>
        </div>
      ) : (
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                  <th className="px-6 py-4 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Donor
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Payment
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {donations.map((d) => (
                  <tr
                    key={d.id}
                    className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {formatDate(d.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-neutral-900 dark:text-white">
                          {d.anonymous ? 'Anonymous' : `${d.firstName || ''} ${d.lastName || ''}`.trim() || '—'}
                        </p>
                        {!d.anonymous && d.email && (
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">{d.email}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-primary-navy dark:text-primary-navy-light">
                      {formatAmount(d.amount)}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {d.donationType || 'one-time'}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {d.paymentMethod || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDonations
