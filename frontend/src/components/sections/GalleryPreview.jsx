import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'
import Button from '../ui/Button'
import { galleryItems } from '../../data/galleryData'

const GalleryPreview = () => {
  // Show first 4 items on home page
  const previewItems = galleryItems.slice(0, 4)

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-navy/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-5 py-2.5 bg-primary-navy/10 text-primary-navy rounded-full text-sm font-semibold mb-6">
            <ImageIcon size={16} />
            <span>Gallery</span>
          </span>
          <h2 className="section-title text-center mb-6">
            See Our Impact in Action
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A visual journey through our programs, events, and community impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {previewItems.map((item, index) => (
            <Link to="/gallery" key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-primary-navy/40 group-hover:bg-primary-navy/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-xs uppercase tracking-wider text-accent-orange mb-2 block">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Button as={Link} to="/gallery" variant="outline" size="lg">
            View Full Gallery
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryPreview
