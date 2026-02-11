import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Building2 } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { label: 'Our Story', path: '/about' },
      { label: 'Mission & Vision', path: '/about#mission' },
      { label: 'Our Team', path: '/about#team' },
      { label: 'Impact', path: '/about#impact' },
    ],
    programs: [
      { label: 'Women Empowerment', path: '/programs?category=empowerment' },
      { label: 'Youth Employment', path: '/programs?category=employment' },
      { label: 'Education Support', path: '/programs?category=education' },
      { label: 'Community Development', path: '/programs?category=community' },
    ],
    getInvolved: [
      { label: 'Donate', path: '/donate' },
      { label: 'Volunteer', path: '/get-involved' },
      { label: 'Partner', path: '/get-involved' },
      { label: 'Newsletter', path: '/get-involved' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-navy via-primary-navy-dark to-primary-navy text-white">
      <div className="container-custom py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Foundation Info */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <img 
                  src="/foundetion logo/foundationlogo.png" 
                  alt="King E Obamedo Foundation Logo"
                  className="h-14 md:h-16 w-auto group-hover:scale-105 transition-transform drop-shadow-lg"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}
                />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                  <span className="text-white">King E.</span>
                  <span className="text-accent-orange mx-1">Obamedo</span>
                  <span className="text-white">Foundation</span>
                </h3>
                <p className="text-xs text-neutral-300 font-medium tracking-wide mt-1">
                  Empowering Communities, Transforming Lives
                </p>
              </div>
            </Link>
            <p className="text-neutral-300 text-xs mb-4 leading-relaxed max-w-xs">
              Empowering communities and transforming lives across Nigeria.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-accent-orange flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Icon size={14} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold mb-3 text-white uppercase tracking-wider">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-300 hover:text-accent-orange transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold mb-3 text-white uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-300 hover:text-accent-orange transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold mb-3 text-white uppercase tracking-wider">Contact</h4>
            <div className="space-y-2.5">
              <div className="flex items-start space-x-2">
                <MapPin size={12} className="mt-0.5 text-accent-orange flex-shrink-0" />
                <div className="text-white text-xs leading-relaxed">
                  <p className="font-semibold text-white text-xs mb-0.5">HQ:</p>
                  <a 
                    href="https://maps.app.goo.gl/oRsVy3F47sNxgaHp9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xs hover:text-accent-orange transition-colors block"
                  >
                    <p className="text-white text-xs">8 Obamedo Lane, Off Mission RD</p>
                    <p className="text-white text-xs">Benin City, Edo State</p>
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Building2 size={12} className="mt-0.5 text-accent-orange flex-shrink-0" />
                <div className="text-white text-xs leading-relaxed">
                  <p className="font-semibold text-white text-xs mb-0.5">Branch:</p>
                  <p className="text-white text-xs">Okungbowa House</p>
                  <p className="text-white text-xs">Ugbogui Town, Ovia SW</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={12} className="mt-0.5 text-accent-orange flex-shrink-0" />
                <div className="text-white text-xs leading-relaxed">
                  <p className="font-semibold text-white text-xs mb-0.5">Mail:</p>
                  <p className="text-white text-xs">PO Box 24324</p>
                  <p className="text-white text-xs">Houston, TX 77229, USA</p>
                </div>
              </div>
              <div className="pt-1 space-y-1">
                <a href="tel:+13474614375" className="flex items-center space-x-1.5 text-neutral-300 hover:text-accent-orange text-xs transition-colors">
                  <Phone size={12} className="text-accent-orange" />
                  <span>(347) 461-4375</span>
                </a>
                <a href="mailto:king@obamedo.net" className="flex items-center space-x-1.5 text-neutral-300 hover:text-accent-orange text-xs transition-colors">
                  <Mail size={12} className="text-accent-orange" />
                  <span>king@obamedo.net</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-neutral-400 text-xs">
              © {currentYear} King E Obamedo Foundation. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Link to="/privacy" className="text-neutral-400 hover:text-accent-orange text-xs transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-neutral-400 hover:text-accent-orange text-xs transition-colors">
                Terms
              </Link>
              <Link to="/contact" className="text-neutral-400 hover:text-accent-orange text-xs transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
