import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Calendar, MapPin, Users as UsersIcon, Award } from 'lucide-react'
import Button from '../components/ui/Button'
import { getProgramById } from '../data/programsData'

const ProgramDetail = () => {
  const { id } = useParams()
  const program = getProgramById(id)

  if (!program) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-navy mb-4">Program Not Found</h1>
          <p className="text-neutral-600 mb-8">The program you're looking for doesn't exist.</p>
          <Button as={Link} to="/programs" variant="primary">
            View All Programs
          </Button>
        </div>
      </div>
    )
  }

  const Icon = program.icon

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${program.color} text-white py-24 md:py-32`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/programs"
              className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Programs
            </Link>

            <div className="flex items-start space-x-4 mb-8">
              <div className={`w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl`}>
                <Icon className="text-white" size={40} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {program.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                  {program.description}
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">{program.participants}</div>
                <div className="text-sm text-white/80">Participants</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">{program.duration}</div>
                <div className="text-sm text-white/80">Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <Calendar className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Ongoing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <MapPin className="w-8 h-8 mb-2" />
                <div className="text-sm text-white/80">Nationwide</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Program Images Gallery */}
              {program.images && program.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-bold text-primary-navy mb-6">Program Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {program.images.slice(0, 2).map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-neutral-100"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <img
                            src={image}
                            alt={`${program.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                            onError={(e) => {
                              // Try alternative paths
                              const altPaths = [
                                image.replace('.jpg', '.jpeg'),
                                image.replace('.jpeg', '.jpg'),
                                image.replace('.jpg', '.png'),
                                image.replace('.png', '.jpg'),
                                `/founder/kingeobamedo.jpeg`
                              ]
                              
                              let currentIndex = 0
                              const tryNext = () => {
                                if (currentIndex < altPaths.length) {
                                  e.target.src = altPaths[currentIndex]
                                  currentIndex++
                                } else {
                                  e.target.style.display = 'none'
                                  e.target.parentElement.innerHTML = `
                                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                                      <div class="text-center p-6">
                                        <p class="text-neutral-400 text-sm mb-2">Image loading...</p>
                                        <p class="text-neutral-300 text-xs">${image}</p>
                                      </div>
                                    </div>
                                  `
                                }
                              }
                              
                              e.target.onerror = tryNext
                              tryNext()
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm font-medium">View Image {index + 1}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">About This Program</h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  {program.fullDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Program Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-xl">
                      <CheckCircle2 className="text-accent-orange flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Benefits</h3>
                <div className="space-y-4">
                  {program.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-neutral-50 to-white rounded-xl border border-neutral-200">
                      <Award className="text-accent-orange flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-neutral-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <div className={`${program.bgColor} p-8 rounded-2xl border-2 border-neutral-200`}>
                  <h3 className="text-2xl font-bold text-primary-navy mb-6">Get Involved</h3>
                  <p className="text-neutral-700 mb-6">
                    Interested in this program? Learn how you can participate or support our work.
                  </p>
                  <div className="space-y-4">
                    <Button as={Link} to="/get-involved" variant="primary" size="lg" className="w-full">
                      Join This Program
                    </Button>
                    <Button as={Link} to="/donate" variant="outline" size="lg" className="w-full">
                      Support This Program
                    </Button>
                    <Button as={Link} to="/contact" variant="ghost" size="md" className="w-full">
                      Contact Us
                    </Button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-neutral-300">
                    <h4 className="font-semibold text-primary-navy mb-4">Program Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-accent-orange" size={16} />
                        <span className="text-neutral-700"><strong>Duration:</strong> {program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="text-accent-orange" size={16} />
                        <span className="text-neutral-700"><strong>Location:</strong> {program.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <UsersIcon className="text-accent-orange" size={16} />
                        <span className="text-neutral-700"><strong>Participants:</strong> {program.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramDetail
