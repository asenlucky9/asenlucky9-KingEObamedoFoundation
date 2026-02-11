import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Eye, Heart, ArrowRight, Award, Users, TrendingUp } from 'lucide-react'
import Button from '../ui/Button'

const AboutPreview = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower communities and transform lives through sustainable, impactful programs that create lasting change.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A Nigeria where every community thrives with equal access to education, healthcare, and economic opportunities.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, compassion, impact, and transparency guide every decision and action we take.',
      color: 'from-red-500 to-red-600',
    },
  ]

  const achievements = [
    { icon: Users, number: '10,000+', label: 'Lives Touched' },
    { icon: Award, number: '200+', label: 'Programs' },
    { icon: TrendingUp, number: '50+', label: 'Partners' },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            Building Hope, Creating Impact
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            King E Obamedo Foundation is a trusted non-profit organization dedicated to empowering communities across Nigeria through comprehensive programs in education, healthcare, and economic development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-navy to-primary-navy-dark flex items-center justify-center">
                <div className="text-center p-8 text-white">
                  <Users className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-75">Community Impact</p>
                </div>
              </div>
              {/* Decorative Badge */}
              <div className="absolute top-6 right-6 bg-accent-orange text-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold">Since 2020</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-primary-navy mb-6">
              Making a Difference Every Day
            </h3>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Founded with a vision to create lasting change, King E Obamedo Foundation has been at the forefront of community development in Nigeria. We believe in the power of education, healthcare, and economic empowerment to transform lives.
            </p>
            <p className="text-base text-neutral-600 mb-8 leading-relaxed">
              Through our comprehensive programs, we've touched thousands of lives, providing access to quality education, healthcare services, and economic opportunities. Our commitment to transparency, accountability, and measurable impact drives everything we do.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="text-center p-4 bg-neutral-50 rounded-xl">
                    <Icon className="w-8 h-8 text-accent-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary-navy">{achievement.number}</div>
                    <div className="text-xs text-neutral-600 mt-1">{achievement.label}</div>
                  </div>
                )
              })}
            </div>

            <Button as={Link} to="/about" variant="secondary" size="lg">
              Learn More About Us
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border border-neutral-200 hover:border-accent-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
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

export default AboutPreview
