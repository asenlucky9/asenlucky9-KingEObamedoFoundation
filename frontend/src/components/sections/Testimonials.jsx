import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useHomeContent } from '../../context/HomeContentContext'

const Testimonials = () => {
  const { content } = useHomeContent()
  const { badge, title, subtitle, items: testimonials } = content.testimonials

  return (
    <section className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-navy/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-6">
            {badge}
          </span>
          <h2 className="section-title text-center mb-6">
            {title}
          </h2>
          <p className="section-subtitle mx-auto text-center">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative p-8 bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-100 dark:border-neutral-700 hover:border-accent-orange/30 hover:shadow-xl transition-all duration-300 h-full">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 text-accent-orange/10 group-hover:text-accent-orange/20 transition-colors" size={48} />

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-orange text-accent-orange" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-neutral-200">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-orange to-orange-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
