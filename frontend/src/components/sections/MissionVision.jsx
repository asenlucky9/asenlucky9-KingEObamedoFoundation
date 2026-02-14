import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield, TrendingUp, Users } from 'lucide-react'

const MissionVision = () => {
  const missionVision = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower communities and transform lives through sustainable programs in education, employment, skills training, and community development.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A Nigeria where every individual has access to quality education, meaningful employment opportunities, and the resources needed to build a prosperous future.',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We care deeply about the communities we serve',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency and accountability in all we do',
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'Measurable results that create lasting change',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Working together for collective success',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-navy/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2.5 bg-primary-navy/10 text-primary-navy rounded-full text-sm font-semibold mb-6">
            Our Foundation
          </span>
          <h2 className="section-title text-center mb-6">
            Mission & Vision
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Guided by our core values, we work tirelessly to create positive change.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {missionVision.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="h-full p-10 bg-white dark:bg-neutral-800 rounded-3xl border-2 border-neutral-100 dark:border-neutral-700 hover:border-accent-orange/30 hover:shadow-2xl transition-all duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-navy dark:text-white mb-5">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-4">Our Core Values</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">The principles that guide everything we do</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="text-center p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 hover:border-accent-orange/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-accent-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-orange/20 transition-colors">
                  <Icon className="text-accent-orange" size={28} />
                </div>
                <h4 className="text-xl font-bold text-primary-navy dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MissionVision
