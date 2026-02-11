import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, CreditCard, Smartphone, Building2, Gift, CheckCircle2, Lock, Shield } from 'lucide-react'
import Button from '../components/ui/Button'

const Donate = () => {
  const [formData, setFormData] = useState({
    amount: '',
    customAmount: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    donationType: 'one-time',
    designation: '',
    anonymous: false,
    paymentMethod: 'card',
  })

  const [errors, setErrors] = useState({})

  const presetAmounts = [5000, 10000, 25000, 50000, 100000, 250000]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleAmountSelect = (amount) => {
    setFormData({
      ...formData,
      amount: amount.toString(),
      customAmount: '',
    })
    if (errors.amount) {
      setErrors({ ...errors, amount: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.amount && !formData.customAmount) {
      newErrors.amount = 'Please select or enter an amount'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const donationAmount = formData.customAmount || formData.amount

    // Here you would integrate with Paystack or Flutterwave
    // For now, we'll show a success message
    console.log('Donation data:', {
      ...formData,
      amount: donationAmount,
    })

    // Simulate payment processing
    alert(`Thank you for your donation of ₦${parseInt(donationAmount).toLocaleString()}! Payment processing will be handled by Paystack/Flutterwave.`)
    
    // Reset form after submission
    setFormData({
      amount: '',
      customAmount: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      donationType: 'one-time',
      designation: '',
      anonymous: false,
      paymentMethod: 'card',
    })
  }

  const donationAmount = formData.customAmount || formData.amount || 0

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-navy via-primary-navy-dark to-primary-navy text-white py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-accent-orange/20 backdrop-blur-md rounded-full mb-8 border-2 border-accent-orange/30">
              <Heart className="text-accent-orange" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Donation</h1>
            <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed">
              Your contribution helps us transform lives and empower communities across Nigeria. Every donation makes a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-sm"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <Lock className="text-accent-orange" size={20} />
                  <span className="text-sm font-semibold text-neutral-700">Secure Payment</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Donation Amount */}
                  <div>
                    <label className="block text-lg font-bold text-primary-navy mb-4">
                      Select Donation Amount
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                      {presetAmounts.map((amount) => {
                        const formatAmount = (amt) => {
                          if (amt >= 100000) return `₦${(amt / 1000)}K`
                          if (amt >= 1000) return `₦${(amt / 1000)}K`
                          return `₦${amt.toLocaleString()}`
                        }
                        return (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => handleAmountSelect(amount)}
                            className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-200 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap ${
                              formData.amount === amount.toString()
                                ? 'border-accent-orange bg-accent-orange/10 text-accent-orange'
                                : 'border-neutral-200 hover:border-accent-orange/50 text-neutral-700'
                            }`}
                          >
                            {formatAmount(amount)}
                          </button>
                        )
                      })}
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-primary-navy mb-2">
                        Or enter custom amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 font-semibold">
                          ₦
                        </span>
                        <input
                          type="number"
                          name="customAmount"
                          value={formData.customAmount}
                          onChange={handleChange}
                          placeholder="Enter amount"
                          min="100"
                          className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-accent-orange transition-colors ${
                            errors.amount ? 'border-red-300' : 'border-neutral-200'
                          }`}
                          onFocus={() => {
                            setFormData({ ...formData, amount: '', customAmount: '' })
                          }}
                        />
                      </div>
                      {errors.amount && (
                        <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
                      )}
                    </div>
                  </div>

                  {/* Donation Type */}
                  <div>
                    <label className="block text-lg font-bold text-primary-navy mb-4">
                      Donation Type
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, donationType: 'one-time' })}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                          formData.donationType === 'one-time'
                            ? 'border-accent-orange bg-accent-orange/10'
                            : 'border-neutral-200 hover:border-accent-orange/50'
                        }`}
                      >
                        <div className="font-semibold text-primary-navy mb-1">One-Time</div>
                        <div className="text-sm text-neutral-600">Single donation</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, donationType: 'monthly' })}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                          formData.donationType === 'monthly'
                            ? 'border-accent-orange bg-accent-orange/10'
                            : 'border-neutral-200 hover:border-accent-orange/50'
                        }`}
                      >
                        <div className="font-semibold text-primary-navy mb-1">Monthly</div>
                        <div className="text-sm text-neutral-600">Recurring donation</div>
                      </button>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-bold text-primary-navy mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-primary-navy mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-accent-orange transition-colors ${
                            errors.firstName ? 'border-red-300' : 'border-neutral-200'
                          }`}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary-navy mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-accent-orange transition-colors ${
                            errors.lastName ? 'border-red-300' : 'border-neutral-200'
                          }`}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-semibold text-primary-navy mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-accent-orange transition-colors ${
                            errors.email ? 'border-red-300' : 'border-neutral-200'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary-navy mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-accent-orange transition-colors ${
                            errors.phone ? 'border-red-300' : 'border-neutral-200'
                          }`}
                          placeholder="+234 XXX XXX XXXX"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Designation */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-navy mb-2">
                      Designation (Optional)
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:outline-none focus:border-accent-orange transition-colors"
                      placeholder="e.g., In memory of..."
                    />
                  </div>

                  {/* Anonymous Donation */}
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="anonymous"
                      name="anonymous"
                      checked={formData.anonymous}
                      onChange={handleChange}
                      className="w-5 h-5 text-accent-orange border-neutral-300 rounded focus:ring-accent-orange"
                    />
                    <label htmlFor="anonymous" className="text-sm text-neutral-700">
                      Make this donation anonymous
                    </label>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-lg font-bold text-primary-navy mb-4">
                      Payment Method
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                          formData.paymentMethod === 'card'
                            ? 'border-accent-orange bg-accent-orange/10'
                            : 'border-neutral-200 hover:border-accent-orange/50'
                        }`}
                      >
                        <CreditCard className="mx-auto mb-2 text-accent-orange" size={24} />
                        <div className="text-sm font-semibold text-primary-navy">Card</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: 'bank' })}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                          formData.paymentMethod === 'bank'
                            ? 'border-accent-orange bg-accent-orange/10'
                            : 'border-neutral-200 hover:border-accent-orange/50'
                        }`}
                      >
                        <Building2 className="mx-auto mb-2 text-accent-orange" size={24} />
                        <div className="text-sm font-semibold text-primary-navy">Bank Transfer</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: 'mobile' })}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                          formData.paymentMethod === 'mobile'
                            ? 'border-accent-orange bg-accent-orange/10'
                            : 'border-neutral-200 hover:border-accent-orange/50'
                        }`}
                      >
                        <Smartphone className="mx-auto mb-2 text-accent-orange" size={24} />
                        <div className="text-sm font-semibold text-primary-navy">Mobile Money</div>
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-lg py-4"
                  >
                    <Heart className="mr-2" size={20} />
                    Donate ₦{parseInt(donationAmount || 0).toLocaleString()}
                  </Button>

                  <p className="text-xs text-neutral-500 text-center">
                    <Shield className="inline mr-1" size={12} />
                    Your payment is secure and encrypted. We never store your card details.
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Impact Card */}
                <div className="bg-gradient-to-br from-accent-orange to-orange-600 text-white p-6 rounded-2xl shadow-lg">
                  <Gift className="mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">Your Impact</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Your donation helps us provide education, skills training, and support to communities across Nigeria.
                  </p>
                </div>

                {/* Why Donate */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-200">
                  <h3 className="text-lg font-bold text-primary-navy mb-4">Why Donate?</h3>
                  <div className="space-y-3">
                    {[
                      '100% of funds go directly to programs',
                      'Transparent reporting and accountability',
                      'Tax-deductible donations',
                      'Make a lasting impact in communities',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="text-accent-orange flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bank Details */}
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                  <h3 className="text-lg font-bold text-primary-navy mb-4">Bank Transfer</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-neutral-600">Account Name:</span>
                      <div className="font-semibold text-primary-navy">King E Obamedo Foundation</div>
                    </div>
                    <div>
                      <span className="text-neutral-600">Account Number:</span>
                      <div className="font-semibold text-primary-navy">1234567890</div>
                    </div>
                    <div>
                      <span className="text-neutral-600">Bank:</span>
                      <div className="font-semibold text-primary-navy">Access Bank</div>
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

export default Donate
