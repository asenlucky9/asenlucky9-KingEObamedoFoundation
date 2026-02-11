import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, GraduationCap, Heart, Building2, TrendingUp } from 'lucide-react'

const Counter = ({ end, duration = 2, isInView }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseInt(end.replace(/[^0-9]/g, ''))
    const increment = numericValue / (duration * 60)
    const timer = setInterval(() => {
      countRef.current += increment
      if (countRef.current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(countRef.current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return <span>{count.toLocaleString()}{end.includes('+') ? '+' : ''}</span>
}

const Impact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Lives Touched',
      description: 'People directly impacted',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GraduationCap,
      value: '5,000+',
      label: 'Children Educated',
      description: 'Students supported',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      value: '200+',
      label: 'Programs Completed',
      description: 'Successful initiatives',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Building2,
      value: '50+',
      label: 'Partners',
      description: 'Trusted organizations',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-navy via-primary-navy-dark to-primary-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-5 py-2.5 bg-accent-orange/20 text-accent-orange rounded-full text-sm font-semibold mb-6">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Making a Real Difference
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Together, we're creating lasting change in communities across Nigeria. Every number represents a life transformed.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:border-accent-orange/30 transition-all duration-300 hover:shadow-xl">
                  <div className="relative p-6 md:p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl md:rounded-3xl mb-5 md:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3">
                      {isInView ? <Counter end={stat.value} isInView={isInView} /> : '0'}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-neutral-300 text-xs md:text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/20">
            <TrendingUp className="text-accent-orange" size={20} />
            <span className="text-base md:text-lg font-semibold">Growing impact every day</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Impact
