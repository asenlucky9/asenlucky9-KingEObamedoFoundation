import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gift, HandHeart, ArrowRight, Users, Heart, Sparkles } from 'lucide-react'
import Button from '../ui/Button'

const CallToAction = () => {
  const actions = [
    {
      icon: Gift,
      title: 'Make a Donation',
      description: 'Support our programs and make a lasting impact in communities across Nigeria.',
      link: '/donate',
      variant: 'primary',
      color: 'from-accent-orange to-orange-600',
    },
    {
      icon: HandHeart,
      title: 'Volunteer With Us',
      description: 'Join our team of dedicated volunteers and help us create positive change.',
      link: '/get-involved',
      variant: 'outline',
      color: 'from-primary-navy to-primary-navy-dark',
    },
    {
      icon: Users,
      title: 'Join Our Programs',
      description: 'Explore our programs and apply for skills training, employment opportunities, or educational support.',
      link: '/programs',
      variant: 'outline',
      color: 'from-green-500 to-emerald-600',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-navy via-primary-navy-dark to-primary-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-orange/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-accent-orange/10 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-accent-orange/20 backdrop-blur-md rounded-full mb-6 md:mb-8 border-2 border-accent-orange/30">
              <Heart className="text-accent-orange" size={48} />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              Get Involved Today
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
              Join us in making a real difference. Whether you donate, volunteer, or join our programs, your participation creates lasting positive change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
            {actions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="h-full p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/20 hover:bg-white/20 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${action.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{action.title}</h3>
                    <p className="text-neutral-300 mb-5 md:mb-6 text-sm leading-relaxed">
                      {action.description}
                    </p>
                    <Button
                      as={Link}
                      to={action.link}
                      variant={action.variant === 'primary' ? 'primary' : 'outline'}
                      size="md"
                      className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-navy"
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 px-6 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <div className="flex items-center space-x-2">
                <Sparkles className="text-accent-orange" size={16} />
                <span className="text-xs md:text-sm font-medium">100% Transparent</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="text-accent-orange" size={16} />
                <span className="text-xs md:text-sm font-medium">Verified NGO</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="text-accent-orange" size={16} />
                <span className="text-xs md:text-sm font-medium">Tax Deductible</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
