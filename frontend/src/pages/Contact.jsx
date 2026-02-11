import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react'
import Button from '../components/ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: '8 Obamedo Lane, Off Mission RD, Benin City, Edo State, Nigeria',
      link: 'https://maps.app.goo.gl/oRsVy3F47sNxgaHp9',
    },
    {
      icon: MapPin,
      title: 'Branch Office',
      details: 'Okungbowa House, Ugbogui-Ikoha RD, Ugbogui Town, Ovia SW',
      link: null,
    },
    {
      icon: Mail,
      title: 'Mailing Address',
      details: 'PO Box 24324, Houston, TX 77229, USA',
      link: null,
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '(347) 461-4375',
      link: 'tel:+13474614375',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'king@obamedo.net',
      link: 'mailto:king@obamedo.net',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Friday: 9:00 AM - 5:00 PM',
      link: null,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-navy to-primary-navy-dark text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-neutral-200">
              Get in touch with us. We'd love to hear from you and answer any questions you may have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary-navy mb-6">Get in Touch</h2>
              <p className="text-lg text-neutral-600 mb-8">
                We're here to help! Reach out to us through any of the following channels, and we'll respond as soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  const content = (
                    <div className="flex items-start space-x-4 p-6 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
                      <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-accent-orange" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-navy mb-1">{info.title}</h3>
                        <p className="text-neutral-600">{info.details}</p>
                      </div>
                    </div>
                  )

                  return info.link ? (
                    <a 
                      key={index} 
                      href={info.link} 
                      className="block"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  )
                })}
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d5.6!3d6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3737680ad87%3A0x29dfc0bd6a133c2!2s8%20Obamedo%20Ln%2C%20Avbiama%2C%20Benin%20City%20300102%2C%20Edo%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="King E Obamedo Foundation Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.app.goo.gl/oRsVy3F47sNxgaHp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-orange hover:text-accent-orange-dark text-sm font-medium inline-flex items-center space-x-1"
                >
                  <MapPin size={16} />
                  <span>View larger map</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-white to-neutral-50 p-8 rounded-2xl border-2 border-neutral-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="text-accent-orange" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-navy">Send us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary-navy mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary-navy mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none transition-colors"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-primary-navy mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none transition-colors"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
