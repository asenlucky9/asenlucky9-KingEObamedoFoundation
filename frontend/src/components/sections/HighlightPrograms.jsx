import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import { programs } from '../../data/programsData'
import { useHomeContent } from '../../context/HomeContentContext'

const HighlightPrograms = () => {
  const { content } = useHomeContent()
  const section = content.highlightPrograms
  // Use first 6 programs from centralized data
  const featuredPrograms = programs.slice(0, 6).map(program => ({
    id: program.id,
    icon: program.icon,
    title: program.title,
    description: program.description,
    impact: program.impact,
    color: program.color,
  }))

  return (
    <section className="section-padding bg-white dark:bg-neutral-900 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-5 py-2.5 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>{section.badge}</span>
          </span>
          <h2 className="section-title text-center mb-6">
            {section.title}
          </h2>
          <p className="section-subtitle mx-auto text-center">
            {section.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredPrograms.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <Link to={`/programs/${program.id}`} className="block h-full">
                  <div className="h-full rounded-3xl overflow-hidden border-2 border-neutral-100 dark:border-neutral-700 hover:border-accent-orange/30 transition-all duration-300 hover:shadow-2xl group-hover:-translate-y-2 bg-white dark:bg-neutral-800">
                    {/* Content */}
                    <div className="p-6">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3 group-hover:text-accent-orange transition-colors leading-tight">
                        {program.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed text-sm">
                        {program.description}
                      </p>
                      
                      {/* Impact */}
                      <div className="mb-6">
                        <span className="text-sm font-semibold text-accent-orange">
                          {program.impact}
                        </span>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-700">
                        <span className="text-sm font-semibold text-accent-orange">
                          Learn More
                        </span>
                        <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-700 group-hover:bg-accent-orange group-hover:text-white flex items-center justify-center transition-all duration-300">
                          <ArrowRight size={18} className="text-neutral-600 dark:text-neutral-300 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Button as={Link} to="/programs" variant="secondary" size="lg">
            {section.buttonText}
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default HighlightPrograms
