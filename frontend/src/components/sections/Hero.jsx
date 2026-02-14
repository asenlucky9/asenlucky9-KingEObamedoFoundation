import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { useHomeContent } from '../../context/HomeContentContext'
import { ArrowRight, CheckCircle2, Play } from 'lucide-react'
import Button from '../ui/Button'

const Hero = () => {
  const { t } = useLanguage()
  const { content } = useHomeContent()
  const hero = content.hero
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero.backgroundImageUrl})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/95 via-primary-navy/90 to-primary-navy/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent"></div>
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/30"
            >
              <CheckCircle2 className="text-accent-orange" size={18} />
              <span className="text-sm font-semibold text-white">{hero.badge}</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
              {hero.title1}
              <br />
              <span className="text-accent-orange">{hero.title2}</span>
              <br />
              {hero.title3}
            </h1>

            <p className="text-xl md:text-2xl text-neutral-100 mb-10 leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button as={Link} to="/donate" variant="primary" size="lg" className="group text-lg px-10 py-5">
                {t('common.donateNow')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </Button>
              <Button as={Link} to="/about" variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-navy backdrop-blur-sm text-lg px-10 py-5">
                <Play className="mr-2" size={20} />
                {hero.ourStoryButtonText}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {[
                { value: hero.stat1Value, label: hero.stat1Label },
                { value: hero.stat2Value, label: hero.stat2Label },
                { value: hero.stat3Value, label: hero.stat3Label },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-neutral-300 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10]">
                  <img 
                    src={hero.mainImageUrl} 
                    alt={`${hero.mainImageTitle} - ${hero.mainImageCaption}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-semibold">{hero.mainImageTitle}</p>
                    <p className="text-sm text-neutral-200">{hero.mainImageCaption}</p>
                  </div>
                </div>
              </div>
              
              {/* Smaller Images */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/30 to-primary-navy/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">{hero.rightCard1Value}</div>
                    <div className="text-sm">{hero.rightCard1Label}</div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-600/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">{hero.rightCard2Value}</div>
                    <div className="text-sm">{hero.rightCard2Label}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center space-y-3 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest font-medium">{hero.scrollText}</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-3 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
