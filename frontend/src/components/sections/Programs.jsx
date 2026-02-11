import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Heart, Briefcase, Users, ArrowRight, Sparkles } from 'lucide-react'
import Button from '../ui/Button'

const Programs = () => {
  const programs = [
    {
      id: 1,
      icon: GraduationCap,
      title: 'Education Initiative',
      description: 'Providing quality education, scholarships, and learning resources to underprivileged children across Nigeria.',
      impact: '2,500+ children',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      icon: Heart,
      title: 'Healthcare Access',
      description: 'Free medical care, health awareness programs, and preventive healthcare services for families in need.',
      impact: '1,800+ families',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      id: 3,
      icon: Briefcase,
      title: 'Economic Empowerment',
      description: 'Skills training, microfinance programs, and entrepreneurship support to create sustainable livelihoods.',
      impact: '800+ individuals',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      id: 4,
      icon: Users,
      title: 'Community Development',
      description: 'Infrastructure projects, clean water initiatives, and community-building programs that transform neighborhoods.',
      impact: '15+ communities',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-navy/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} />
            <span>Our Programs</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            Transforming Lives Through Action
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive programs designed to address the most pressing needs in our communities and create lasting positive change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <Link to={`/programs/${program.id}`} className="block h-full">
                  <div className={`h-full p-8 bg-white rounded-2xl border-2 ${program.borderColor} hover:border-accent-orange transition-all duration-300 hover:shadow-xl group-hover:-translate-y-2`}>
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-accent-orange transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed text-sm">
                      {program.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                      <span className="text-sm font-semibold text-accent-orange">
                        {program.impact}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-accent-orange group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowRight size={16} className="text-neutral-600 group-hover:text-white" />
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
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Button as={Link} to="/programs" variant="outline" size="lg">
            Explore All Programs
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs
