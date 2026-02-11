import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Filter } from 'lucide-react'
import { programs, programCategories } from '../data/programsData'

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-neutral-200">
              Comprehensive programs designed to empower individuals and transform communities across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-12 pr-10 py-3 border-2 border-neutral-200 rounded-xl focus:border-accent-orange focus:outline-none appearance-none bg-white"
                >
                  {programCategories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-neutral-600">
              Showing {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <Link to={`/programs/${program.id}`} className="block h-full">
                    <div className="h-full p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border-2 border-neutral-200 hover:border-accent-orange transition-all duration-300 hover:shadow-xl group-hover:-translate-y-2">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="text-white" size={28} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-accent-orange transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-neutral-600 mb-6 leading-relaxed text-sm">
                        {program.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {program.features.slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                        <span className="text-sm font-semibold text-accent-orange">
                          {program.impact}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-accent-orange group-hover:text-white flex items-center justify-center transition-colors">
                          <ArrowRight size={16} className="text-neutral-600 group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-neutral-600 mb-4">No programs found</p>
              <p className="text-neutral-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Programs
