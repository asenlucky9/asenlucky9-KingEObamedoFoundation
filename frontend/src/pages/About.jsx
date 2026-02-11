import { motion } from 'framer-motion'
import { Calendar, Target, TrendingUp, Award, Users, Heart, GraduationCap, Briefcase, MapPin, Mail, Phone, Building2 } from 'lucide-react'

const About = () => {
  const history = [
    {
      year: '2020',
      title: 'Foundation Established',
      description: 'King E Obamedo Foundation was founded with a vision to empower communities and transform lives across Nigeria.',
    },
    {
      year: '2021',
      title: 'First Major Programs',
      description: 'Launched education support and skills training programs, impacting over 1,000 individuals in the first year.',
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Expanded to include women empowerment and youth employment programs, reaching 5,000+ beneficiaries.',
    },
    {
      year: '2023',
      title: 'Community Development',
      description: 'Initiated community development projects and sports talent support programs across multiple states.',
    },
    {
      year: '2024',
      title: 'Growing Impact',
      description: 'Reached milestone of 10,000+ lives touched through comprehensive programs and partnerships.',
    },
  ]

  const goals = [
    {
      icon: Users,
      title: 'Reach 50,000 Lives',
      description: 'By 2026, we aim to directly impact 50,000 individuals through our various programs.',
    },
    {
      icon: Award,
      title: 'Expand Programs',
      description: 'Launch new initiatives in entrepreneurship, technology training, and rural development.',
    },
    {
      icon: Target,
      title: 'Strengthen Partnerships',
      description: 'Build strategic partnerships with government, corporate, and international organizations.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Impact',
      description: 'Create self-sustaining programs that continue to benefit communities long-term.',
    },
  ]

  const education = [
    {
      degree: 'MS in Taxation',
      school: 'Baruch College, Zicklin School of Business',
      location: 'New York, NY',
      year: 'Dec 2018',
      icon: GraduationCap,
    },
    {
      degree: 'BBA in Accounting',
      school: 'Baruch College',
      location: 'New York, NY',
      year: 'Sept 2014',
      icon: GraduationCap,
    },
    {
      degree: 'AS in Business Accounting',
      school: 'Westchester Community College',
      location: 'Valhalla, NY',
      year: 'Dec 2011',
      icon: GraduationCap,
    },
  ]

  const certifications = [
    {
      title: 'Certified Public Accountant',
      date: 'Mar 2020',
      icon: Award,
    },
    {
      title: 'IRS Enrolled Agent',
      date: 'Feb 2019',
      icon: Award,
    },
  ]

  const experience = [
    {
      company: 'Bestman Global LLC',
      location: 'Houston, TX',
      position: 'Logistics Owner',
      period: 'Feb 2022 – Present',
      description: 'Provide transportation logistics for customers focused on timely deliveries while maintaining cost efficiency. Ensuring seamless intermodal shipments and verifying loads.',
      icon: Briefcase,
    },
    {
      company: 'Intuit Inc.',
      location: 'San Diego, CA',
      position: 'Remote Tax Expert',
      period: 'Jan 2020 – Jan 2022',
      description: 'Helped clients with tax questions and calculations. Provided tax advice, guidance and assisted clients with filing appropriate federal and state forms.',
      icon: Briefcase,
    },
    {
      company: 'PwC (PricewaterhouseCoopers LLP)',
      location: 'New York, NY',
      position: 'Tax Staff',
      period: 'Jun 2018 – Jan 2020',
      description: 'Prepared client workpapers and tax returns. Prepared and filed various tax compliance forms including Form 1065, 1120, and responded to IRS and State Tax Authority inquiries.',
      icon: Briefcase,
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-neutral-200">
              Learn about our foundation's history, mission, and the impact we're creating in communities across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <img 
                    src="/founder/kingeobamedo.jpeg" 
                    alt="King E. Obamedo - Founder" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-accent-orange text-white px-5 py-2.5 rounded-full shadow-xl font-bold text-sm">
                  Founder & CEO
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-5 py-2.5 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-6">
                Our Founder
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">
                King E. Obamedo
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                King E. Obamedo Foundation was established by a visionary leader with a strong background in accounting, taxation, and business. With professional experience at leading firms like PwC and Intuit, King brings a unique combination of financial expertise and business acumen to community development.
              </p>
              <p className="text-base text-neutral-600 mb-8 leading-relaxed">
                Driven by a passion for empowerment and social justice, the foundation was built on the belief that every individual deserves access to education, employment opportunities, and the resources needed to build a prosperous future. King's commitment to transparency, accountability, and measurable impact continues to guide our work today.
              </p>
              
              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4 p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-accent-orange flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-sm font-semibold text-primary-navy mb-1">Headquarters</p>
                    <p className="text-xs text-neutral-600">8 Obamedo Lane, Off Mission RD<br />Benin City, Edo State</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="text-accent-orange flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-sm font-semibold text-primary-navy mb-1">Branch Office</p>
                    <p className="text-xs text-neutral-600">Okungbowa House, Ugbogui-Ikoha RD<br />Ugbogui Town, Ovia SW</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-white to-neutral-50 rounded-3xl border-2 border-neutral-100"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary-navy">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => {
                  const Icon = edu.icon
                  return (
                    <div key={index} className="pb-6 border-b border-neutral-200 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-primary-navy">{edu.degree}</h4>
                        <span className="text-xs text-neutral-500 font-medium">{edu.year}</span>
                      </div>
                      <p className="text-sm text-neutral-600 font-medium">{edu.school}</p>
                      <p className="text-xs text-neutral-500 mt-1">{edu.location}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-white to-neutral-50 rounded-3xl border-2 border-neutral-100"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <Award className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary-navy">Licenses & Certifications</h3>
              </div>
              <div className="space-y-6">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon
                  return (
                    <div key={index} className="pb-6 border-b border-neutral-200 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-primary-navy mb-1">{cert.title}</h4>
                          <p className="text-xs text-neutral-500">{cert.date}</p>
                        </div>
                        <div className="w-10 h-10 bg-accent-orange/10 rounded-lg flex items-center justify-center">
                          <Icon className="text-accent-orange" size={20} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Professional Experience</h3>
              <p className="text-lg text-neutral-600">Building expertise to serve communities better</p>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 bg-white rounded-2xl border-2 border-neutral-100 hover:border-accent-orange/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="text-accent-orange" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-primary-navy mb-1">{exp.position}</h4>
                          <p className="text-lg font-semibold text-neutral-700">{exp.company}</p>
                          <p className="text-sm text-neutral-500">{exp.location}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed mt-4">{exp.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2.5 bg-primary-navy/10 text-primary-navy rounded-full text-sm font-semibold mb-6">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
              Foundation History
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A timeline of our growth and impact over the years.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-orange to-primary-navy"></div>

            <div className="space-y-12">
              {history.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative pl-28"
                >
                  <div className="absolute left-0 w-20 h-20 bg-gradient-to-br from-accent-orange to-orange-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div className="bg-white p-8 rounded-2xl border-2 border-neutral-100 hover:border-accent-orange/30 hover:shadow-xl transition-all">
                    <div className="text-2xl font-bold text-accent-orange mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-3">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Impact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2.5 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-6">
              Our Goals
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
              Goals & Future Impact
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our vision for the future and the goals we're working towards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => {
              const Icon = goal.icon
              return (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border-2 border-neutral-100 hover:border-accent-orange/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-accent-orange" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-3">{goal.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{goal.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gradient-to-br from-primary-navy to-primary-navy-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Information</h2>
            <p className="text-xl text-neutral-200">Get in touch with us</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <MapPin className="w-12 h-12 text-accent-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Headquarters</h3>
              <p className="text-neutral-200 text-sm leading-relaxed">
                8 Obamedo Lane, Off Mission RD<br />
                Benin City, Edo State
              </p>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Building2 className="w-12 h-12 text-accent-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Branch Office</h3>
              <p className="text-neutral-200 text-sm leading-relaxed">
                Okungbowa House, Ugbogui-Ikoha RD<br />
                Ugbogui Town, Ovia SW
              </p>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Mail className="w-12 h-12 text-accent-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Mailing Address</h3>
              <p className="text-neutral-200 text-sm leading-relaxed">
                PO Box 24324<br />
                Houston, TX 77229, USA<br />
                <a href="tel:+13474614375" className="text-accent-orange hover:text-accent-orange-light mt-2 block">(347) 461-4375</a>
                <a href="mailto:king@obamedo.net" className="text-accent-orange hover:text-accent-orange-light">king@obamedo.net</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
