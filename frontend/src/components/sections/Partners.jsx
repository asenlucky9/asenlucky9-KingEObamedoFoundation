import { motion } from 'framer-motion'
import { Handshake } from 'lucide-react'
import { useHomeContent } from '../../context/HomeContentContext'

const Partners = () => {
  const { content } = useHomeContent()
  const { badge, title, subtitle, items: partners, emptyMessage } = content.partners

  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-navy/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-5 py-2.5 bg-primary-navy/10 text-primary-navy rounded-full text-sm font-semibold mb-6">
            <Handshake size={16} />
            <span>{badge}</span>
          </span>
          <h2 className="section-title text-center mb-6">
            {title}
          </h2>
          <p className="section-subtitle mx-auto text-center">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.length > 0 ? (
            partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group"
              >
                <div className="flex items-center justify-center p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-accent-orange/30 hover:shadow-md transition-all duration-300 h-32">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-full text-center text-neutral-500 dark:text-neutral-400 py-8"
            >
              {emptyMessage}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Partners
