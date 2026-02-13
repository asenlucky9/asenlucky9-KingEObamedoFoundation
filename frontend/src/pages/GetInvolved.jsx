import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gift, HandHeart, Users, Mail, ArrowRight, Send, CheckCircle2 } from 'lucide-react'
import Button from '../components/ui/Button'

const GetInvolved = () => {
  const [activeSection, setActiveSection] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    message: '',
  })

  const [partnershipForm, setPartnershipForm] = useState({
    organization: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: '',
  })
  const [successMessage, setSuccessMessage] = useState(null)

  const showSuccess = (message) => {
    setSuccessMessage(message)
    setTimeout(() => setSuccessMessage(null), 5000)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    showSuccess('Thank you for subscribing to our newsletter!')
    setNewsletterEmail('')
  }

  const handleVolunteerSubmit = (e) => {
    e.preventDefault()
    showSuccess('Thank you for your interest in volunteering! We will contact you soon.')
    setVolunteerForm({ name: '', email: '', phone: '', skills: '', availability: '', message: '' })
    setActiveSection(null)
  }

  const handlePartnershipSubmit = (e) => {
    e.preventDefault()
    showSuccess('Thank you for your partnership interest! We will contact you soon.')
    setPartnershipForm({ organization: '', contactPerson: '', email: '', phone: '', partnershipType: '', message: '' })
    setActiveSection(null)
  }

  const involvementOptions = [
    {
      id: 'donate',
      icon: Gift,
      title: 'Donate',
      description: 'Support our programs and make a lasting impact in communities across Nigeria. Every contribution helps transform lives.',
      color: 'from-accent-orange to-orange-600',
      action: 'donate',
    },
    {
      id: 'volunteer',
      icon: HandHeart,
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers and help us create positive change. Your time and skills make a difference.',
      color: 'from-blue-500 to-cyan-600',
      action: 'form',
    },
    {
      id: 'partner',
      icon: Users,
      title: 'Partner With Us',
      description: 'Join us as a partner and help amplify our impact. Together, we can create lasting change.',
      color: 'from-purple-500 to-indigo-600',
      action: 'form',
    },
    {
      id: 'newsletter',
      icon: Mail,
      title: 'Newsletter',
      description: 'Stay updated with our latest programs, events, and impact stories. Join our community of supporters.',
      color: 'from-green-500 to-emerald-600',
      action: 'form',
    },
  ]

  const volunteerOpportunities = [
    {
      icon: HandHeart,
      title: 'Program Support',
      description: 'Help with program delivery and participant support',
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Engage with communities and spread awareness',
    },
    {
      icon: Send,
      title: 'Skills Training',
      description: 'Share your expertise and train program participants',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[10000] px-6 py-4 bg-green-600 text-white rounded-xl shadow-lg flex items-center gap-3 min-w-[280px] max-w-md"
          >
            <CheckCircle2 className="flex-shrink-0" size={24} />
            <p className="text-sm font-medium">{successMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-navy to-primary-navy-dark text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-center mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl text-neutral-200">
              Join us in making a difference. Choose how you'd like to contribute to our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Options Grid */}
      {!activeSection && (
        <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-5 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-6">
                Ways to Get Involved
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">
                How Would You Like to Help?
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                There are many ways to support our mission. Choose the option that works best for you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {involvementOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    {option.action === 'donate' ? (
                      <Link to="/donate" className="block h-full">
                        <div className="h-full p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 hover:border-accent-orange transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                          <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md`}>
                            <Icon className="text-white" size={24} />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-primary-navy mb-3 group-hover:text-accent-orange transition-colors">
                            {option.title}
                          </h3>
                          <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                            {option.description}
                          </p>
                          <div className="flex items-center text-accent-orange font-semibold text-sm">
                            Get Started
                            <ArrowRight className="ml-2" size={16} />
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <button
                        onClick={() => setActiveSection(option.id)}
                        className="w-full h-full p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 hover:border-accent-orange transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1 text-left"
                      >
                        <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-primary-navy mb-3 group-hover:text-accent-orange transition-colors">
                          {option.title}
                        </h3>
                        <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                          {option.description}
                        </p>
                        <div className="flex items-center text-accent-orange font-semibold text-sm">
                          Get Started
                          <ArrowRight className="ml-2" size={16} />
                        </div>
                      </button>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Volunteer Section */}
      {activeSection === 'volunteer' && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <button
                onClick={() => setActiveSection(null)}
                className="flex items-center text-primary-navy hover:text-accent-orange mb-8 transition-colors font-medium"
              >
                <ArrowRight className="mr-2 rotate-180" size={18} />
                Back to Options
              </button>
              <div className="text-center mb-12">
                <span className="inline-block px-5 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-6">
                  Volunteer
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">
                  Volunteer With Us
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  Your time and skills can make a real difference in transforming lives and communities.
                </p>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Volunteer Opportunities */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Volunteer Opportunities</h3>
                {volunteerOpportunities.map((opp, index) => {
                  const Icon = opp.icon
                  return (
                    <motion.div
                      key={opp.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="p-6 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-accent-orange/30 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-accent-orange" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary-navy mb-2">{opp.title}</h4>
                          <p className="text-neutral-600 text-sm">{opp.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Volunteer Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-sm"
              >
                <h3 className="text-xl md:text-2xl font-bold text-primary-navy mb-6">Volunteer Application</h3>
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary-navy mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary-navy mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary-navy mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary-navy mb-2">Skills/Expertise</label>
                    <input
                      type="text"
                      value={volunteerForm.skills}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, skills: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                      placeholder="Teaching, IT, Marketing"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary-navy mb-2">Availability</label>
                    <input
                      type="text"
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                      placeholder="Weekends, Evenings"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary-navy mb-2">Why do you want to volunteer?</label>
                    <textarea
                      rows={4}
                      value={volunteerForm.message}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none resize-none"
                      placeholder="Tell us about your motivation..."
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Submit Application
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Partnership Section */}
      {activeSection === 'partner' && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <button
                onClick={() => setActiveSection(null)}
                className="flex items-center text-primary-navy hover:text-accent-orange mb-8 transition-colors font-medium"
              >
                <ArrowRight className="mr-2 rotate-180" size={18} />
                Back to Options
              </button>
              <div className="text-center mb-12">
                <span className="inline-block px-5 py-2 bg-primary-navy/10 text-primary-navy rounded-full text-sm font-semibold mb-6">
                  Partnership
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">
                  Partnership Opportunities
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  Join us as a partner and help amplify our impact. Together, we can create lasting change.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary-navy mb-6">Partnership Inquiry</h3>
                <form onSubmit={handlePartnershipSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary-navy mb-2">Organization Name *</label>
                      <input
                        type="text"
                        required
                        value={partnershipForm.organization}
                        onChange={(e) => setPartnershipForm({ ...partnershipForm, organization: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary-navy mb-2">Contact Person *</label>
                      <input
                        type="text"
                        required
                        value={partnershipForm.contactPerson}
                        onChange={(e) => setPartnershipForm({ ...partnershipForm, contactPerson: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary-navy mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={partnershipForm.email}
                        onChange={(e) => setPartnershipForm({ ...partnershipForm, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary-navy mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={partnershipForm.phone}
                        onChange={(e) => setPartnershipForm({ ...partnershipForm, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary-navy mb-2">Partnership Type</label>
                    <select
                      value={partnershipForm.partnershipType}
                      onChange={(e) => setPartnershipForm({ ...partnershipForm, partnershipType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                    >
                      <option value="">Select partnership type</option>
                      <option value="corporate">Corporate Partnership</option>
                      <option value="ngo">NGO Partnership</option>
                      <option value="government">Government Partnership</option>
                      <option value="foundation">Foundation Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary-navy mb-2">Tell us about your partnership interest</label>
                    <textarea
                      rows={4}
                      value={partnershipForm.message}
                      onChange={(e) => setPartnershipForm({ ...partnershipForm, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none resize-none"
                      placeholder="How would you like to partner with us?"
                    />
                  </div>
                  <Button type="submit" variant="secondary" size="lg" className="w-full">
                    Submit Partnership Inquiry
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </form>
            </motion.div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      {activeSection === 'newsletter' && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => setActiveSection(null)}
                className="flex items-center text-primary-navy hover:text-accent-orange mb-8 transition-colors font-medium"
              >
                <ArrowRight className="mr-2 rotate-180" size={18} />
                Back to Options
              </button>
              <div className="text-center mb-12">
                <span className="inline-block px-5 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-semibold mb-6">
                  Newsletter
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">
                  Stay Connected
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                  Subscribe to our newsletter and stay updated with our latest programs, events, and impact stories.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-sm"
              >
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-1">What You'll Get</h3>
                      <ul className="text-sm text-neutral-600 space-y-1">
                        <li>• Latest program updates and success stories</li>
                        <li>• Upcoming events and volunteer opportunities</li>
                        <li>• Impact reports and community stories</li>
                        <li>• Ways to get involved and support our mission</li>
                      </ul>
                    </div>
                  </div>

                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary-navy mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Subscribe to Newsletter
                      <Mail className="ml-2" size={18} />
                    </Button>
                  </form>

                  <p className="text-xs text-neutral-500 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}

export default GetInvolved
