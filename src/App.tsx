import { motion, AnimatePresence } from 'framer-motion'
import { Phone, CheckCircle, Thermometer, ShieldCheck, Settings, Wind, Star, ArrowRight, ChevronDown, MessageSquare, Quote, Menu, X, Mail, Loader2, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const BRAND = {
  name: "Dent's Heating And Cooling",
  legalName: "Dent's Heating And Cooling Co., LLC",
  dbaName: "Dent's Heating And Cooling Co., LLC DBA Dent’s Heating And Cooling",
  phone: '(314) 420-7803',
  email: 'info@dentsheatingandcooling.com',
  address: '6942 Forest Hills Dr. St. Louis, MO 63121',
  location: 'St. Louis, MO',
  tagline: 'Premium Heating & Cooling',
  website: 'dentsheatingandcooling.com'
}

// TODO: Replace with your actual GoHighLevel Webhook URL
const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/Q3nV40ZxTxM3YVFWznES/webhook-trigger/b3b719e4-1d6d-4f65-8d9e-7c960f825519';

const services = [
  {
    id: 'cooling',
    title: 'Cooling Systems',
    description: 'Complete AC repair, installation, and optimization for maximum comfort and energy efficiency.',
    longDescription: [
      `When the summer heat hits ${BRAND.location}, you need a cooling system that isn't just functional, but optimized for the demanding climate. Our cooling solutions go beyond simple AC repair; we focus on the entire ecosystem of your home's air. From precision ductwork analysis to the latest in high-efficiency SEER2-rated units, we ensure every room stays at the perfect temperature without sending your utility bills into the stratosphere.`,
      `Our certified technicians specialize in identifying the subtle signs of system fatigue before they become expensive emergency failures. Whether you're dealing with a refrigerant leak, a failing compressor, or simply an aging unit that can't keep up with the humidity, we provide transparent diagnostics and long-term solutions. We don't just fix symptoms—we restore the reliability and peace of mind you expect from your home's cooling system.`
    ],
    technicalDetails: [
      { label: 'System Efficiency', value: 'Up to 22 SEER2' },
      { label: 'Typical Install', value: '1-2 Working Days' },
      { label: 'Warranty', value: '10-Year Parts & Labor' },
      { label: 'Eco-Friendly', value: 'R-454B Refrigerant' }
    ],
    icon: Wind,
    link: '/services/cooling',
    image: '/cooling_service.png'
  },
  {
    id: 'heating',
    title: 'Heating Solutions',
    description: 'Expert furnace repair, heat pump installation, and heating system upgrades for cold seasons.',
    longDescription: [
      `A reliable heating system is the backbone of a comfortable home during the cooler months. We provide comprehensive heating services that encompass traditional gas furnaces, modern electric heat pumps, and dual-fuel hybrid systems. Our goal is to ensure that when the temperature drops, your heating system responds instantly with clean, even heat that circulates efficiently throughout your entire property.`,
      `Modern heating technology has advanced significantly, offering AFUE ratings of up to 98%, which means significantly less wasted energy and lower operational costs. We guide you through the transition to these high-performance systems, handling everything from load calculations to final safety certifications. With our proactive maintenance and expert repair services, you can rest assured that your family will stay warm and safe, even during the coldest nights of the year.`
    ],
    technicalDetails: [
      { label: 'Furnace Efficiency', value: 'Up to 98% AFUE' },
      { label: 'Heat Pumps', value: 'HSPF2 Rated' },
      { label: 'Smart Control', value: 'Wi-Fi Enabled' },
      { label: 'Safety', value: 'CO Detection Integrated' }
    ],
    icon: Thermometer,
    link: '/services/heating',
    image: '/heating_service.png'
  },
  {
    id: 'maintenance',
    title: 'HVAC Maintenance',
    description: 'Proactive seasonal tune-ups and air quality solutions to keep your system running and the air clean.',
    longDescription: [
      `Strategic HVAC maintenance is the single most effective way to protect your investment and ensure the longevity of your mechanical systems. Our comprehensive multi-point inspection process is designed to catch minor issues—like worn capacitors or restricted airflow—before they lead to catastrophic system failure. This proactive approach doesn't just save you from unexpected repair costs; it keeps your system running at peak efficiency, reducing daily wear and tear.`,
      `In addition to mechanical reliability, our maintenance plans place heavy emphasis on indoor air quality (IAQ). We clean vital components, inspect filtration systems, and can integrate advanced UV purification and HEPA filtration to remove allergens, mold spores, and pollutants from your breathing air. A well-maintained system is a healthy system, providing you with a cleaner, more breathable home environment for your family and guests.`
    ],
    technicalDetails: [
      { label: 'Inspection Points', value: '35+ Point Check' },
      { label: 'Frequency', value: 'Bi-Annual (Spring/Fall)' },
      { label: 'IAQ Focus', value: 'HEPA & UV Compatible' },
      { label: 'Priority', value: '24/7 Priority Scheduling' }
    ],
    icon: ShieldCheck,
    link: '/services/maintenance',
    image: '/maintenance_service.png'
  }
]

const locations = [
  {
    id: 'clayton',
    name: 'Clayton',
    heroTitle: 'Serving Clayton With Excellence',
    description: `We are proud to serve Clayton, providing premium HVAC services to the professional and residential heart of St. Louis. Clayton's unique mix of multi-family residential complexes and elegant historic homes requires a specialized approach to climate control. Whether you're managing a luxury apartment building near Shaw Park or maintaining a classic residence in the Wydown-Skinker area, our technicians ensure your environment remains perfectly balanced year-round. We understand the high standards of the Clayton community and are committed to delivering efficient, quiet, and reliable heating and cooling solutions that match the sophisticated lifestyle of this area.`,
    mapImage: '/locations/clayton.png'
  },
  {
    id: 'ladue',
    name: 'Ladue',
    heroTitle: 'Serving Ladue With Excellence',
    description: `Our team is dedicated to providing Ladue residents with HVAC services that meet the highest standards of luxury and reliability. In a community known for its stunning estates and lush landscapes, we take a white-glove approach to every project. We specialize in high-efficiency systems that provide whisper-quiet operation and precise temperature control, ensuring your home remains a sanctuary of comfort. From historic renovations requiring delicate ductwork integration to modern custom builds with advanced smart-home features, we bring the expertise and attention to detail that Ladue homeowners expect.`,
    mapImage: '/locations/ladue.png'
  },
  {
    id: 'webster-groves',
    name: 'Webster Groves',
    heroTitle: 'Serving Webster Groves With Excellence',
    description: `Webster Groves families trust us for our transparent, community-focused HVAC service. Known as the 'City of the Arts,' Webster Groves has a vibrant spirit that we strive to reflect in our work. We understand the character of the century-old homes in this area and the specific challenges they present for modern heating and cooling. Our technicians are experts at retrofitting high-performance systems into older structures without compromising their architectural integrity. We take pride in keeping Webster Groves comfortable, one home at a time, ensuring that every family can enjoy clean, efficient air throughout the changing St. Louis seasons.`,
    mapImage: '/locations/webster-groves.png'
  },
  {
    id: 'kirkwood',
    name: 'Kirkwood',
    heroTitle: 'Serving Kirkwood With Excellence',
    description: `In Kirkwood, we've built a reputation for reliability through years of dedicated service to this close-knit community. From the historic Kirkwood Station to the surrounding residential neighborhoods, we provide fast and professional HVAC repairs and installations. We know that Missouri summers can be humid and winters can be harsh, which is why we prioritize responsive service for our Kirkwood neighbors. Whether you need a quick AC tune-up before the Fourth of July or a furnace replacement during a January cold snap, you can count on us for honest advice and expert workmanship.`,
    mapImage: '/locations/kirkwood.png'
  },
  {
    id: 'chesterfield',
    name: 'Chesterfield',
    heroTitle: 'Serving Chesterfield With Excellence',
    description: `Chesterfield residents and property managers rely on us for comprehensive HVAC solutions that span from the Valley to the high-end residential developments on the bluffs. As one of the largest and most dynamic areas in West County, Chesterfield requires a versatile service team capable of handling everything from complex multi-family HVAC systems to precision residential heat pumps. We are committed to helping Chesterfield properties achieve maximum energy efficiency, reducing operational costs while ensuring peak performance. Trust us to be your local comfort partners, dedicated to maintaining the health and longevity of your HVAC systems.`,
    mapImage: '/locations/chesterfield.png'
  }
]

const faqs = [
  {
    question: "How do I know if my AC needs repair?",
    answer: "Warm air, weak airflow, unusual noises, leaks, and rising energy bills can all be signs your AC system needs professional repair."
  },
  {
    question: "How often should I schedule HVAC maintenance?",
    answer: "Most systems should be serviced twice a year, once before cooling season and once before heating season, to help maintain performance."
  },
  {
    question: "When should I replace my HVAC system?",
    answer: "If your system is older, needs frequent repairs, struggles to heat or cool properly, or causes higher utility bills, it may be time to consider replacement."
  }
]

const testimonials = [
  { name: 'Rick Simmons', role: 'Homeowner', content: 'Exceptional service! They fixed my AC in the middle of a heatwave and the technician was incredibly professional. Highly recommend for any cooling issues.' },
  { name: 'Dennis Simmons', role: 'Business Owner', content: 'Truly reliable. We had a new furnace installed last month and the difference in our energy bills is already noticeable. Great team to work with.' },
  { name: 'Taylor Simmons', role: 'Property Manager', content: 'Professional, punctual, and fair pricing. They didn\'t try to upsell me on anything I didn\'t need. My go-to HVAC company from now on.' }
]

const HeroForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    if (!data.email) {
      alert('Please provide an email address so we can reach you.')
      setIsLoading(false)
      return
    }

    try {
      // Logic for GHL Webhook
      if (GHL_WEBHOOK_URL && !GHL_WEBHOOK_URL.includes('...')) {
        await fetch(GHL_WEBHOOK_URL, {
          method: 'POST',
          body: JSON.stringify({
            ...data,
            source: 'Website Hero Form',
            location: BRAND.location
          }),
          headers: { 'Content-Type': 'application/json' }
        })
      }
      
      // Simulate success for demo if no webhook
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission failed:', error)
      alert('Something went wrong. Please try calling us instead.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl text-center border-4 border-secondary/20"
      >
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-secondary/30">
          <CheckCircle className="text-white" size={44} />
        </div>
        <h3 className="text-3xl font-heading font-bold text-text mb-4">Request Sent!</h3>
        <p className="text-text/60 text-lg mb-10 font-medium">
          Your quote request has been received. One of our technicians will contact you shortly!
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="w-full btn-primary py-5 text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
        >
          Send Another Request
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl relative overflow-hidden"
    >
      
      
      <div className="relative z-10">
        <h3 className="text-2xl font-heading font-bold text-white mb-2">Get a Free Quote</h3>
        <p className="text-white/60 text-sm mb-8 font-medium">Response within 15 minutes during business hours.</p>
        
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-[0.1em] text-white/40 px-1">Full Name</label>
            <input 
              required
              name="name"
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all font-medium"
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-[0.1em] text-white/40 px-1">Service</label>
            <select 
              name="service"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all font-medium appearance-none"
            >
              <option value="AC Repair" className="bg-primary text-white">AC Repair</option>
              <option value="Installation" className="bg-primary text-white">Installation</option>
              <option value="Heating" className="bg-primary text-white">Heating</option>
              <option value="Maintenance" className="bg-primary text-white">Maintenance</option>
              <option value="Other" className="bg-primary text-white">Other</option>
            </select>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-[0.1em] text-white/40 px-1">Email Address</label>
            <input 
              required
              name="email"
              type="email" 
              placeholder="john@example.com" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all font-medium"
            />
          </div>

          <div className="space-y-1.5 -mb-2">
            <label className="text-[11px] font-black uppercase tracking-[0.1em] text-white/40 px-1">How can we help?</label>
            <textarea 
              name="message"
              placeholder="Briefly describe your needs..." 
              rows={2}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all font-medium resize-none text-sm"
            />
          </div>


          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full btn-primary py-5 mt-2 group/btn relative overflow-hidden disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
              {isLoading ? 'Sending...' : 'Send Request'} 
              {!isLoading && <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />}
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
          </button>
          
          <div className="text-center pt-4">
            <p className="text-[10px] text-white/30 font-medium">
              View our <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-secondary underline transition-colors">Privacy Policy</Link> and <Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-secondary underline transition-colors">Terms of Service</Link>
            </p>
            <p className="text-[9px] text-white/20 mt-2 font-bold uppercase tracking-widest">
              Secured & Encrypted
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

const SectionHeader = ({ 
  icon: Icon, 
  subtitle, 
  title, 
  description, 
  light = false, 
  centered = false,
  align = 'left',
  mb = '8' 
}: { 
  icon: any, 
  subtitle: string, 
  title: string, 
  description?: string, 
  light?: boolean, 
  centered?: boolean,
  align?: 'left' | 'center' | 'right',
  mb?: string
}) => {
  const isCentered = centered || align === 'center';
  const isRight = align === 'right';

  return (
    <div className={cn(isCentered ? "text-center" : isRight ? "text-right" : "text-left", `mb-${mb}`)}>
      <div className={cn(
        "inline-flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-[13px] mb-6 px-4 py-2 rounded-full",
        light ? "bg-white/10 text-white" : "bg-secondary/10 text-secondary"
      )}>
        <Icon size={16} className={light ? "" : "opacity-80"} />
        {subtitle}
      </div>
      <h2 className={cn(
        "text-[40px] md:text-[56px] font-heading font-bold mb-6 leading-[1.1]",
        light ? "text-white" : "text-text"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg max-w-2xl leading-relaxed",
          isCentered ? "mx-auto" : isRight ? "ml-auto" : "",
          light ? "text-white/60" : "text-text/50"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}

const steps = [
  { title: 'Schedule Service', description: 'Contact our team to book an appointment for repair, installation, or routine maintenance.' },
  { title: 'System Evaluation', description: 'We inspect your HVAC system, identify the issue, and recommend the right solution for your home.' },
  { title: 'Service & Repair', description: 'Our technicians complete the work with attention to performance, airflow, and system efficiency.' },
  { title: 'Final Check', description: 'We test the system, confirm everything is running properly, and answer any questions before we finish.' }
]

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const Nav = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/dark%20logo.png" alt={BRAND.name} className="h-12 w-auto object-contain" />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className={cn("transition-colors", isHome ? "text-primary" : "text-text hover:text-primary")}>Home</Link>
          <Link to="/about" className={cn("transition-colors", location.pathname === '/about' ? "text-primary" : "text-text hover:text-primary")}>About Us</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className={cn(
                "flex items-center gap-1 py-4 transition-colors",
                isServicesOpen || location.pathname.startsWith('/services') ? "text-primary" : "text-text hover:text-primary"
              )}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown size={16} className={cn("transition-transform duration-300", isServicesOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full pt-2 w-64 h-auto"
                >
                  <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 p-4 ring-1 ring-black/5 overflow-hidden">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={service.link}
                        className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                          <service.icon size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-text mb-0.5">{service.title}</div>
                          <div className="text-[11px] text-text/40 font-bold uppercase tracking-widest leading-none">View Details</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setIsLocationsOpen(true)}
            onMouseLeave={() => setIsLocationsOpen(false)}
          >
            <button 
              className={cn(
                "flex items-center gap-1 py-4 transition-colors",
                isLocationsOpen || location.pathname.startsWith('/locations') ? "text-primary" : "text-text hover:text-primary"
              )}
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
            >
              Locations
              <ChevronDown size={16} className={cn("transition-transform duration-300", isLocationsOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isLocationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full pt-2 w-64 h-auto"
                >
                  <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-4 ring-1 ring-black/5 overflow-hidden">
                    {locations.map((loc) => (
                      <Link
                        key={loc.id}
                        to={`/locations/${loc.id}`}
                        className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                        onClick={() => setIsLocationsOpen(false)}
                      >
                        <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-text mb-0.5">{loc.name}</div>
                          <div className="text-[11px] text-text/40 font-bold uppercase tracking-widest leading-none">View Service Area</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/contact" className="text-text hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:flex btn-primary items-center gap-2">
            Get a Quote
            <ArrowRight size={18} />
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-text hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <Link to="/" className="block text-lg font-bold text-text hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block text-lg font-bold text-text hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              
              <div className="space-y-3">
                <div className="text-sm font-black uppercase tracking-widest text-text/30 pt-2">Our Services</div>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.link}
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 text-text font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <service.icon size={20} className="text-primary" />
                    {service.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-3">
                <div className="text-sm font-black uppercase tracking-widest text-text/30 pt-2">Our Locations</div>
                {locations.map((loc) => (
                  <Link
                    key={loc.id}
                    to={`/locations/${loc.id}`}
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 text-text font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MapPin size={20} className="text-primary" />
                    {loc.name}
                  </Link>
                ))}
              </div>
              <a href="/#contact" className="block text-lg font-bold text-text hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <button className="w-full btn-primary py-4 mt-4">Get a Quote</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const Footer = () => (
  <footer className="bg-text text-white/50 py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
      {/* Brand column — spans 2 cols on md */}
      <div className="col-span-2 md:col-span-3 lg:col-span-1">
        <div className="flex items-center gap-3 text-white mb-6">
          <img src="/light%20logo.png" alt={BRAND.name} className="h-10 w-auto object-contain" />
        </div>
        <p className="text-base leading-relaxed mb-6">
          Expert HVAC services providing comfort and quality air to homes and multi-family properties across {BRAND.location} and the surrounding areas.
        </p>
        </div>


      <div>
        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Company</h4>
        <ul className="space-y-4 text-base">
          <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Services</h4>
        <ul className="space-y-4 text-base">
          {services.map(s => (
            <li key={s.id}><Link to={s.link} className="hover:text-white transition-colors">{s.title}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Locations</h4>
        <ul className="space-y-4 text-base">
          {locations.map(loc => (
            <li key={loc.id}><Link to={`/locations/${loc.id}`} className="hover:text-white transition-colors">{loc.name}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Reach Us</h4>
        <div className="space-y-4 text-base">
          <p className="leading-relaxed">{BRAND.address}</p>
          <a href={`tel:${BRAND.phone}`} className="block text-white font-bold text-2xl tracking-tight hover:text-secondary transition-colors">{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`} className="block text-secondary font-medium underline hover:text-white transition-colors">{BRAND.email}</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-white/5 text-center text-[10px] tracking-[0.5em] uppercase opacity-30 font-bold">
      © 2026 {BRAND.legalName}. All rights reserved. Professional comfort since 1986.
    </div>
  </footer>
)
const AboutPage = () => (
  <div className="pt-20">
    {/* Page Hero - Aligned with Service Pages */}
    <section className="relative py-14 md:py-20 lg:py-24 overflow-hidden bg-[#F8FAFF]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10 blur-3xl opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="inline-flex items-center gap-3 text-secondary font-bold mb-6 uppercase tracking-[0.2em] text-[13px] bg-secondary/10 px-4 py-2 rounded-full">
            <CheckCircle size={16} />
            Our Legacy
          </div>
          <h1 className="text-[32px] md:text-[48px] lg:text-[72px] font-heading font-bold text-text mb-8 leading-[1.1]">
            Focused on Your <br/><span className="text-secondary">Comfort</span> Since 1986
          </h1>
          <p className="text-xl text-text/60 mb-10 leading-relaxed max-w-xl">
            {BRAND.name} started with a simple belief: every homeowner in {BRAND.location} deserves reliable HVAC service without the stress. Four decades later, that's still our driving force.
          </p>
          <button className="btn-primary px-10 py-5 text-lg">Schedule Your Visit</button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-3xl shadow-xl shadow-slate-200"
        >
          <img 
            src="/about_hero_cinematic.png" 
            alt="Quality HVAC Service" 
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>

    {/* Story Section - Flipped for better flow */}
    <section className="py-14 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden shadow-2xl order-2 lg:order-1"
        >
          <img 
            src="/about_hvac.png" 
            alt="Our HVAC Specialist at work" 
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 text-xl text-text/70 leading-relaxed order-1 lg:order-2"
        >
          <SectionHeader 
            icon={Star} 
            subtitle="The Journey" 
            title="Rooted in Community" 
            align="center"
            mb="8"
          />
          <p>
            When we first opened our doors in 1986, we noticed a recurring theme among homeowners: they were tired of waiting for technicians who never showed up or didn't explain what they were doing. We decided to build a company that prioritized clarity and consistency.
          </p>
          <p>
            Today, {BRAND.name} is recognized as a leader in premium heating and cooling across the {BRAND.location} area. We've stayed small enough to care about every individual client but grown skilled enough to handle the most complex mechanical challenges.
          </p>
          <p>
            Our team members aren't just technicians; they're environmental comfort specialists who take pride in making your home a better place to live. We specialize in precision diagnostics, high-efficiency system transitions, and breathable air solutions.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Values */}
    <section className="py-14 md:py-20 lg:py-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader 
          icon={ShieldCheck} 
          subtitle="Our Foundation" 
          title="The Values That Guide Us" 
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'Integrity First', desc: 'We only recommend what you actually need. No upsells, no pressure—just honest advice for your HVAC system.' },
            { title: 'Technical Mastery', desc: 'Our technicians undergo continuous training to stay at the absolute forefront of modern HVAC technology.' },
            { title: 'Community Care', desc: 'Serving our neighbors in St. Louis isn\'t just business; it\'s personal. We treat your home with the same respect as our own.' }
          ].map((val, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[50px] shadow-xl shadow-slate-200/50 border border-slate-50"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{val.title}</h3>
              <p className="text-text/60 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA - Updated */}
    <section className="py-14 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-8">Ready to experience the {BRAND.name} difference?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/contact" className="btn-primary px-10 py-5 text-lg">Get Your Free Quote</Link>
          <a href={`tel:${BRAND.phone}`} className="btn-secondary px-10 py-5 text-lg flex items-center gap-3">
            <Phone size={20} />
            Call Us
          </a>
        </div>
      </div>
    </section>
  </div>
)

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Vision')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden min-h-[95vh] flex items-center bg-primary">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none bg-primary">
          <img 
            src="/hvac_hero_bg.png" 
            alt="Premium HVAC Service Background" 
            className="w-full h-full object-cover opacity-30"
          />
          {/* Horizontal Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          {/* Vertical Overlay to ensure bottom is dark */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 text-secondary font-bold mb-8 uppercase tracking-[0.2em] text-[13px] bg-secondary/10 px-6 py-2.5 rounded-full border border-secondary/20">
                <Wind size={16} className="animate-pulse" />
                Premium HVAC Engineering
              </div>
              <h1 className="text-[44px] md:text-[68px] lg:text-[84px] font-heading font-bold text-white mb-8 leading-[1.05] tracking-tight">
                Mastering <span className="text-secondary italic">Climate</span> <br/>Control & Comfort
              </h1>
              <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-xl leading-relaxed font-medium">
                Strategic heating and cooling solutions for {BRAND.location}. We don't just fix systems; we optimize your entire environment.
              </p>
              
              <div className="flex flex-wrap gap-8 items-center border-t border-white/5 pt-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cta">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">24/7 Priority</div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Support</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Certified Techs</div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Licensed & Insured</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quote Form Component */}
            <div className="lg:col-span-5">
              <HeroForm />
            </div>
          </div>
        </div>

        {/* Simple Shadow/Fade Transition */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/10 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </section>

      {/* About Section */}
      <section id="about" className="py-14 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text first in DOM → appears first on mobile. Image uses lg:order-first to go left on desktop. */}
          <div>
            <SectionHeader 
              icon={CheckCircle} 
              subtitle="About Our Company" 
              title="Better Air. Better Flow. Better Living." 
            />
            <p className="text-lg text-text/70 mb-10 leading-relaxed">
              We help homeowners fix heating and cooling issues with practical service that improves airflow, system performance, and day-to-day living. From AC repair to seasonal tune-ups, we focus on what makes your home feel right again.
            </p>

            <div className="bg-white rounded-[40px] p-10 shadow-2xl shadow-slate-100/50 border border-slate-50">
              <div className="flex gap-8 border-b border-slate-50 mb-8">
                {['Mission', 'Vision', 'Values'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "pb-6 text-lg font-bold transition-all relative",
                      activeTab === tab ? "text-primary border-b-2 border-primary" : "text-text/30 hover:text-text/60"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="min-h-[140px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    {activeTab === 'Mission' && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <li className="flex items-center gap-4 text-text/80 font-medium"><div className="bg-cta/10 p-1 rounded-full"><CheckCircle className="text-cta" size={20} /></div> Fix Air Issues</li>
                        <li className="flex items-center gap-4 text-text/80 font-medium"><div className="bg-cta/10 p-1 rounded-full"><CheckCircle className="text-cta" size={20} /></div> Improve Performance</li>
                        <li className="flex items-center gap-4 text-text/80 font-medium"><div className="bg-cta/10 p-1 rounded-full"><CheckCircle className="text-cta" size={20} /></div> Reduce Equipment Strain</li>
                        <li className="flex items-center gap-4 text-text/80 font-medium"><div className="bg-cta/10 p-1 rounded-full"><CheckCircle className="text-cta" size={20} /></div> Easier Navigation</li>
                      </ul>
                    )}
                    {activeTab === 'Vision' && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <li className="flex items-center gap-4 text-text/80 font-medium"><div className="bg-cta/10 p-1 rounded-full"><CheckCircle className="text-cta" size={20} /></div> Cleaner Indoor Air</li>
                        <li className="flex items-center gap-4 text-text/80 font-medium"><div className="bg-cta/10 p-1 rounded-full"><CheckCircle className="text-cta" size={20} /></div> Even Room Temperatures</li>
                        <li className="flex items-center gap-4 text-text/80 font-medium"><div className="bg-cta/10 p-1 rounded-full"><CheckCircle className="text-cta" size={20} /></div> No Aging Surprises</li>
                        <li className="flex items-center gap-4 text-text/80 font-medium"><div className="bg-cta/10 p-1 rounded-full"><CheckCircle className="text-cta" size={20} /></div> Smarter Heating Decisions</li>
                      </ul>
                    )}
                    {activeTab === 'Values' && (
                      <p className="text-text/70 italic text-lg leading-relaxed">
                        "Our values are built on integrity, professionalism, and customer care. We treat every home with respect, recommend only what is needed, and work hard to deliver reliable service."
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link to="/about" className="btn-primary px-8 py-4 text-base whitespace-nowrap">Learn Our Story</Link>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs text-text/40 uppercase font-black tracking-widest mb-0.5">Call Today</div>
                  <a href={`tel:${BRAND.phone}`} className="font-bold text-text text-xl tracking-tight hover:text-primary transition-colors">{BRAND.phone}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Image: after text in DOM = below text on mobile. lg:order-first makes it appear left on desktop. */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl lg:order-first">
            <img 
              src="/about_hvac.png" 
              alt="Professional HVAC System" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-14 md:py-20 lg:py-24 bg-[#F8FAFF] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <SectionHeader 
            icon={Wind} 
            subtitle="Our Services" 
            title="Professional HVAC Excellence" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[40px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  <service.icon size={36} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-text mb-6">{service.title}</h3>
                <p className="text-text/60 mb-10 leading-relaxed text-lg">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center gap-3 font-black text-secondary uppercase tracking-widest text-sm hover:gap-5 transition-all"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 md:py-20 lg:py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2024/11/why_chose_us_bg_1.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="text-white">
            <SectionHeader 
              icon={ShieldCheck} 
              subtitle="Quality Standards" 
              title="Why Choose Us?" 
              light
            />
            <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              When it comes to HVAC, you want someone who's reliable, skilled, and customer-focused.
            </p>
            <div className="w-full h-px bg-secondary/50 mb-10" />
            
            <p className="text-white/70 mb-10 leading-relaxed max-w-xl">
              We provide proactive service with our licensed and insured professionals. Using the latest tools and techniques, we deliver top-notch results that last. With transparent pricing and a focus on satisfaction, we ensure a seamless experience.
            </p>

            <ul className="space-y-6 mb-12">
              {[
                'Experienced, licensed, and certified technicians',
                '24/7 emergency service availability',
                'Upfront pricing with no hidden fees',
                '100% satisfaction guarantee on all work'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium">
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="btn-primary px-10 py-5 text-lg">
              Request Service
            </button>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-white/5 rounded-[60px] blur-3xl -z-10 pointer-events-none" />
            <img 
              src="/wp-content/uploads/2024/11/why_chose_us_img_2.png" 
              alt="Quality HVAC Service" 
              className="w-full h-auto drop-shadow-3xl rounded-[40px]" 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 md:py-20 lg:py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 relative">
          <SectionHeader 
            icon={MessageSquare} 
            subtitle="Customer Stories" 
            title="What Homeowners Are Saying" 
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-12 rounded-[50px] shadow-2xl shadow-slate-100/30 border border-slate-50 relative group overflow-hidden">
                <div className="absolute top-10 right-10 text-secondary opacity-5 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <Quote size={80} />
                </div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, star) => <Star key={star} size={16} fill="#FFD700" color="#FFD700" />)}
                </div>
                <p className="text-text/70 text-lg italic leading-relaxed mb-10 relative z-10">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-primary font-bold text-xl uppercase">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-text text-lg">{t.name}</h5>
                    <p className="text-sm text-text/40 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-40">
            <SectionHeader 
              icon={Phone} 
              subtitle="Expert Answers" 
              title="Frequently Asked HVAC Questions" 
              description="Can't find what you're looking for? Reach out to our specialist team for immediate assistance."
            />

          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-50 rounded-[30px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-50/50">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left bg-white group"
                >
                  <span className="text-xl font-bold text-text group-hover:text-primary transition-colors">{faq.question}</span>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    openFaq === i ? "bg-primary text-white rotate-180" : "bg-slate-50 text-slate-300"
                  )}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-8 pt-0 text-text/60 text-lg leading-relaxed border-t border-slate-100/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-14 md:py-20 lg:py-24 bg-[#F6F8FF]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            icon={Settings} 
            subtitle="Our Workflow" 
            title="A Simple Process From First Call to Finished Service" 
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 border-t-2 border-dashed border-slate-100 -z-0" />
            
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-[30px] bg-white shadow-xl shadow-slate-100 flex items-center justify-center text-3xl font-black text-primary mb-10 mx-auto border border-slate-50 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {i + 1}
                </div>
                <h4 className="text-2xl font-bold text-text mb-4">{step.title}</h4>
                <p className="text-base text-text/50 leading-relaxed px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-primary rounded-[40px] md:rounded-[60px] lg:rounded-[80px] px-8 py-16 md:p-20 lg:p-24 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(99,102,241,0.5)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] opacity-50" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 relative z-10 leading-[1.1]">Ready to restore <br className="hidden md:block"/>your comfort?</h2>
            <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10 opacity-80 leading-relaxed font-medium">
              Join thousands of satisfied homeowners who trust {BRAND.name} for their heating and cooling needs.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 relative z-10 px-2">
              <Link to="/contact" className="bg-white text-primary px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-3xl font-bold text-lg md:text-2xl hover:bg-opacity-95 transition-all shadow-2xl hover:scale-105 transform whitespace-nowrap">
                Get Your Free Quote
              </Link>
              <a href={`tel:${BRAND.phone}`} className="bg-cta text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-3xl font-bold text-lg md:text-2xl hover:opacity-90 transition-all whitespace-nowrap shadow-lg shadow-cta/30">
                Call {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    if (!data.email) {
      alert('Please provide an email address so we can reach you.')
      setIsLoading(false)
      return
    }

    try {
      if (GHL_WEBHOOK_URL && !GHL_WEBHOOK_URL.includes('...')) {
        await fetch(GHL_WEBHOOK_URL, {
          method: 'POST',
          body: JSON.stringify({
            ...data,
            source: 'Website Contact Form',
            location: BRAND.location
          }),
          headers: { 'Content-Type': 'application/json' }
        })
      }
      
      // Simulate success for demo
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission failed:', error)
      alert('Something went wrong. Please try calling us instead.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-20 px-4">
        <div className="max-w-xl mx-auto text-center bg-white p-12 rounded-[40px] shadow-2xl border border-slate-50">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-4xl font-heading font-bold text-text mb-4">Request Received!</h2>
          <p className="text-xl text-text/60 mb-10">Thanks for reaching out. A specialist from Dent's Heating & Cooling will contact you shortly to discuss your needs.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-primary px-10 py-5 text-lg w-full"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 bg-white">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <SectionHeader 
              icon={Phone} 
              subtitle="Contact Us" 
              title="Let's Get Your Comfort Back on Track" 
              description="Whether it's a routine check-up or an emergency repair, our team is ready to help."
            />
            
            <div className="space-y-10 mt-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text mb-1">Call Us Directly</h4>
                  <a href={`tel:${BRAND.phone}`} className="text-2xl font-black text-secondary hover:opacity-80 transition-opacity">
                    {BRAND.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text mb-1">Email Our Team</h4>
                  <a href={`mailto:${BRAND.email}`} className="text-lg font-medium text-text/60 hover:text-primary transition-colors">
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text mb-1">Visit Our Office</h4>
                  <p className="text-lg font-medium text-text/60 leading-relaxed">
                    {BRAND.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-50">
              <div className="space-y-3">
                <label className="text-sm font-black uppercase tracking-widest text-text/40 ml-1">Full Name</label>
                <input required name="name" type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-lg font-medium" />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black uppercase tracking-widest text-text/40 ml-1">Email Address</label>
                <input required name="email" type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-lg font-medium" />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black uppercase tracking-widest text-text/40 ml-1">Service Needed</label>
                <select required name="service" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-lg font-medium">
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black uppercase tracking-widest text-text/40 ml-1">Your Message</label>
                <textarea rows={4} name="message" placeholder="How can we help you today?" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-lg font-medium resize-none"></textarea>
              </div>

                <div className="text-center pt-4 border-t border-slate-100 mt-4">
                  <p className="text-[10px] text-text/40 font-medium">
                    View our <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary underline transition-colors">Privacy Policy</Link> and <Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary underline transition-colors">Terms of Service</Link>
                  </p>
                </div>


              <button 
                disabled={isLoading}
                type="submit" 
                className="w-full btn-primary py-6 text-xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    Sending Request...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const ServicePage = () => {
  const { id } = useParams()
  const service = services.find(s => (s as any).id === id) as any

  if (!service) return <div className="pt-40 text-center">Service not found</div>

  return (
    <div className="pt-20">
      <section className="relative py-14 md:py-20 lg:py-24 overflow-hidden bg-[#F8FAFF]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10 blur-3xl opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-3 text-secondary font-bold mb-6 uppercase tracking-[0.2em] text-[13px] bg-secondary/10 px-4 py-2 rounded-full">
              <service.icon size={16} />
              Premium Service
            </div>
            <h1 className="text-[32px] md:text-[48px] lg:text-[72px] font-heading font-bold text-text mb-8 leading-[1.1]">
              Professional <br/><span className="text-secondary">{service.title}</span>
            </h1>
            <p className="text-xl text-text/60 mb-10 leading-relaxed max-w-xl">
              {service.description} We bring years of expertise to ensure your home remains comfortable, efficient, and safe all year round.
            </p>
            <Link to="/contact" className="btn-primary px-10 py-5 text-lg">Request This Service</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-3xl shadow-xl"
          >
             <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content / SEO Paragraphs */}
      <section className="py-14 md:py-18 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader 
            icon={Wind} 
            subtitle="Overview" 
            title={`Expert ${service.title} in ${BRAND.location}`} 
          />
          <div className="space-y-8 text-xl text-text/70 leading-relaxed">
            {service.longDescription.map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>


      <section className="py-14 md:py-18 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Energy Efficiency', desc: 'Lower your monthly utility bills with systems optimized for peak performance and minimal waste.' },
              { title: 'Improved Air Quality', desc: 'Breathe easier with advanced filtration that removes allergens, dust, and pollutants.' },
              { title: 'Reliable Comfort', desc: 'Expert installation and maintenance that extends the lifespan of your mechanical equipment.' }
            ].map((benefit, i) => (
              <div key={i} className="text-center p-8 rounded-[40px] bg-slate-50/50 border border-slate-100 hover:border-primary/20 transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Star size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">{benefit.title}</h3>
                <p className="text-text/60 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeader 
              icon={CheckCircle} 
              subtitle="What's Included" 
              title="A Complete Solution" 
            />
            <div className="space-y-6">
              {[
                'Full system diagnostic and performance check',
                'Expert repair and precision installation',
                'Energy efficiency optimization',
                'Safety inspection and preventative measures',
                'Professional advice on system longevity',
                'Clean and respectful work environment'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-50 transition-all hover:shadow-md hover:border-indigo-100 group">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <CheckCircle size={18} />
                  </div>
                  <span className="text-lg font-medium text-text/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary text-white p-8 md:p-12 lg:p-20 rounded-[40px] md:rounded-[60px] lg:rounded-[80px] relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">Need immediate assistance?</h2>
            <p className="text-base md:text-xl text-white/70 mb-8 leading-relaxed font-medium">
              Our technicians are on standby to help you with your {service.title.toLowerCase()} needs. Experience the {BRAND.name} difference today.
            </p>
            <div className="flex flex-col gap-4">
              <a href={`tel:${BRAND.phone}`} className="bg-cta text-white px-8 py-4 rounded-2xl font-bold text-base md:text-xl hover:opacity-90 transition-all text-center whitespace-nowrap">
                Call {BRAND.phone}
              </a>
              <Link to="/contact" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-base md:text-xl hover:bg-white/20 transition-all text-center whitespace-nowrap">
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const LocationPage = () => {
  const { id } = useParams()
  const location = locations.find(l => l.id === id)

  if (!location) return <div className="pt-40 text-center text-2xl font-bold">Location not found</div>

  return (
    <div className="pt-20">
      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 px-4">
            <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-heading font-bold text-text mb-4 leading-[1.1]">
              {location.heroTitle}
            </h1>
            <p className="text-xl text-text/60 font-medium">
              Reliable Solutions Tailored to Your Needs
            </p>
          </div>

          {/* Map shown first on mobile for immediate visual */}
          <div className="max-w-3xl mx-auto mb-12 px-4">
            <div className="relative px-4 py-4 border-[6px] border-primary/5 rounded-[32px] bg-white shadow-xl shadow-slate-200/40">
              <img
                src={location.mapImage}
                alt={`Service Area in ${location.name}`}
                className="w-full h-auto rounded-[24px] drop-shadow-md"
              />
            </div>
            <p className="text-center text-sm text-text/40 font-bold uppercase tracking-widest mt-4">
              Our Service Coverage — {location.name}, {BRAND.location}
            </p>
          </div>

          {/* Two-Column: Text + Checklist */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4">
            {/* Left: Description */}
            <div>
              <p className="text-lg text-text/70 leading-relaxed">
                {location.description}
              </p>
            </div>

            {/* Right: Checklist */}
            <div className="bg-slate-50 rounded-[32px] p-8 md:p-10">
              <h2 className="text-xl font-heading font-bold text-text mb-6">
                Why Choose Our Services in {location.name}?
              </h2>
              <ul className="space-y-4">
                {[
                  'A trusted name with years of local service experience',
                  'Affordable pricing and flexible service options',
                  'A smooth and efficient service process',
                  'A team that values customer satisfaction above all else',
                  'A reputation for delivering excellence and reliability'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-text/70">
                    <CheckCircle className="text-secondary shrink-0 mt-1" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Re-use Final CTA section from HomePage here if desired */}
      <section className="py-14 md:py-20 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-primary rounded-[40px] md:rounded-[60px] lg:rounded-[80px] px-8 py-16 md:p-20 lg:p-24 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(99,102,241,0.5)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] opacity-50" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 relative z-10 leading-[1.1]">Ready to restore your comfort in {location.name}?</h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 relative z-10 px-2">
              <Link to="/contact" className="bg-white text-primary px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-3xl font-bold text-lg md:text-2xl hover:bg-opacity-95 transition-all shadow-2xl transform active:scale-95 whitespace-nowrap">
                Get Your Free Quote
              </Link>
              <a href={`tel:${BRAND.phone}`} className="bg-cta text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-3xl font-bold text-lg md:text-2xl hover:opacity-90 transition-all whitespace-nowrap shadow-lg shadow-cta/30">
                Call {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const PrivacyPage = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-12 leading-tight">Privacy Policy</h1>
      
      <div className="space-y-12 text-text/70 leading-relaxed text-lg">
        <section>
          <p className="text-2xl font-bold text-primary mb-2">{BRAND.legalName}</p>
          <p className="font-bold text-text uppercase tracking-widest text-sm mb-8">Effective Date: January 1, 2026</p>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h2 className="text-xl font-bold text-text mb-4">
              IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA
            </h2>
            <p className="text-text leading-relaxed">
              {BRAND.legalName} ("we," "us," or "our") DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-text">1. Information We Collect</h3>
          <p>We collect the following types of information:</p>
          <div className="space-y-4">
            <p><strong>Personal Information:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name, email address, phone number, physical address</li>
              <li>Payment information when you make a purchase or request a quote</li>
              <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
            </ul>
            
            <p><strong>Non-Personal Information:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>IP address, browser type, device information</li>
              <li>Website usage patterns and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <p><strong>Customer Communication:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Records of inquiries and service requests</li>
              <li>Appointment details and preferences</li>
              <li>Service history and feedback</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-text">2. How We Use Your Information</h3>
          <p>We use collected data for:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providing and improving our services</li>
            <li>Processing transactions and payments</li>
            <li>Communicating with you about your inquiries, appointments, and promotions</li>
            <li>Enhancing website functionality and user experience</li>
            <li>Ensuring security and fraud prevention</li>
            <li>Maintaining records of your communication preferences and consent</li>
          </ul>
        </section>

        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-text">3. SMS Messaging & Compliance</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-text mb-3">Text Message Program Terms & Conditions</h4>
              <p>By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.</p>
            </div>

            <div>
              <p><strong>Opt-In & Consent:</strong></p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>You will only receive messages if you have explicitly opted in</li>
                <li>We maintain timestamped records of all opt-in actions</li>
                <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
              </ul>
            </div>

            <div>
              <p><strong>Opt-Out Instructions:</strong></p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>You can cancel SMS notifications at any time by replying "STOP"</li>
                <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
                <li>All opt-out requests are processed immediately.</li>
              </ul>
            </div>

            <div>
              <p><strong>Message Frequency & Content:</strong></p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Message frequency varies based on your interactions with our business</li>
                <li>Messages will be directly related to the services you have requested</li>
                <li>We do not send promotional content without specific consent</li>
              </ul>
            </div>

            <div>
              <p><strong>Help & Support:</strong></p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Reply "HELP" for assistance or contact us at {BRAND.email}</li>
                <li>Customer support is available during regular business hours</li>
              </ul>
            </div>

            <div>
              <p><strong>Carrier Information:</strong></p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Standard message and data rates may apply</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>Supported carriers include AT&T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h4 className="text-xl font-bold text-primary mb-4">SMS Data Protection Statement</h4>
              <p className="mb-4">No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
              <p>We implement strict data protection measures to safeguard your SMS opt-in information and consent records.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-text">4. Information Sharing & Disclosure</h3>
          <p>We do not sell, rent, or trade personal information. We may share information with:</p>
          
          <div className="space-y-4">
            <p><strong>Service Providers:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling)</li>
              <li>SMS aggregators and providers solely for the purpose of delivering messages you've consented to receive</li>
              <li>All service providers are contractually obligated to maintain confidentiality and security</li>
            </ul>

            <p><strong>Legal Compliance:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>If required by law, legal process, or to protect our rights</li>
              <li>In response to valid law enforcement requests or court orders</li>
            </ul>

            <p><strong>Business Transfers:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>In case of mergers, acquisitions, or sale of assets</li>
              <li>In such cases, your data remains protected under the terms of this policy</li>
            </ul>
          </div>
          
          <p className="mt-6">All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-text">5. Data Security</h3>
          <p>We implement and maintain reasonable security measures to protect your personal information:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Secure access controls and authentication mechanisms</li>
            <li>Regular security assessments and updates</li>
            <li>Employee training on data protection</li>
            <li>Breach notification protocols in accordance with applicable laws</li>
            <li>Secure backup systems and disaster recovery procedures</li>
          </ul>
          <p className="mt-4 italic">Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-text">6. Cookies & Tracking Technologies</h3>
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Analyze site traffic and user behavior</li>
            <li>Remember your preferences</li>
            <li>Improve website functionality and user experience</li>
            <li>Measure the effectiveness of our services</li>
          </ul>
          <p className="mt-4">You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-text">7. Your Rights & Choices</h3>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access, update, or delete your personal information</li>
            <li>Opt-out of marketing emails by clicking "unsubscribe" in our emails</li>
            <li>Opt-out of SMS messages by replying "STOP"</li>
            <li>Request information on how we process your data</li>
            <li>Withdraw consent at any time for future communications</li>
            <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
          </ul>
          <p className="mt-4">To exercise these rights, please contact us using the information in Section 10.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-text">8. Third-Party Links</h3>
          <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies. This privacy policy applies only to information collected by {BRAND.legalName}.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-text">9. Changes to This Privacy Policy</h3>
          <p>We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.</p>
        </section>

        <section className="pt-12 border-t border-slate-100">
          <h3 className="text-2xl font-bold text-text mb-6">10. Contact Us</h3>
          <p className="mb-8">If you have questions about this Privacy Policy or how your information is handled, contact us at:</p>
          
          <div className="bg-slate-50 p-8 rounded-3xl space-y-4">
            <p className="text-xl font-bold text-text">{BRAND.legalName}</p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> {BRAND.phone}</p>
              <p><strong>Email:</strong> {BRAND.email}</p>
              <p><strong>Website:</strong> {BRAND.website}</p>
            </div>
          </div>
          
          <p className="mt-12 text-sm font-bold text-text/50">By using our website and services, you consent to this Privacy Policy.</p>
        </section>
      </div>
    </div>
  </div>
);

const TermsPage = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-12 leading-tight">Terms of Service</h1>
      
      <div className="space-y-12 text-text/70 leading-relaxed text-lg">
        <section>
          <p className="text-2xl font-bold text-primary mb-2">{BRAND.legalName}</p>
          <p className="font-bold text-text uppercase tracking-widest text-sm mb-8">Effective Date: January 1, 2026</p>
        </section>

        <section className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
          <h2 className="text-2xl font-bold text-text mb-6">
            SMS Messaging Terms & Compliance
          </h2>
          <div className="space-y-6">
            <p><strong>1. Program Description:</strong> This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with {BRAND.legalName} through our website at {BRAND.website}, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.</p>
            
            <p><strong>2. Cancellation Instructions:</strong> You can cancel the SMS service at any time. Simply text "STOP" to the same number that sent you messages. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</p>
            
            <p><strong>3. Support Information:</strong> If you experience issues with the messaging program, reply with the keyword "HELP" for more assistance, or reach out directly to {BRAND.email} or call {BRAND.phone} during business hours.</p>
            
            <p><strong>4. Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.</p>
            
            <p><strong>5. Message & Data Rates:</strong> Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.</p>
            
            <p><strong>6. Supported Carriers:</strong> Our SMS program works with all major U.S. wireless carriers, including AT&T, T-Mobile, Verizon, Sprint, and most regional carriers.</p>
            
            <p><strong>7. Age Restriction:</strong> You must be 18 years or older to participate in our SMS program.</p>
            
            <p><strong>8. Privacy Policy:</strong> For privacy-related inquiries, please refer to our Privacy Policy at <Link to="/privacy" className="text-primary hover:underline">{BRAND.website}/privacy</Link></p>
            
            <p className="mt-4">We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text">General Terms</h2>
          <p>This website (the "Site") is owned and operated by {BRAND.legalName} ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from {BRAND.legalName}.</p>
          <p>Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.</p>
          <p>We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-text">Intellectual Property Rights</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text">Our Limited License to You</h3>
            <p>This Site and all the materials available on the Site are the property of {BRAND.legalName} and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.</p>
            <p>You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.</p>
            <p>Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text">Your License to Us</h3>
            <p>By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text">Disclaimers</h2>
          <p>Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.</p>
          <p>The information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.</p>
          <p>You agree at all times to indemnify and hold harmless {BRAND.legalName}, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text">Online Commerce</h2>
          <p>Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.</p>
          <p>Your participation in any dealings with third-party vendors is solely between you and the third party. {BRAND.legalName} shall not be responsible for any loss or damage incurred as a result of such dealings.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text">Registration & Passwords</h2>
          <p>To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.</p>
          <p>If you suspect unauthorized use of your account, notify us immediately at {BRAND.email}. We are not liable for any loss or damage arising from your failure to comply with this obligation.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text">Termination</h2>
          <p>We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text">Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of the state in which {BRAND.legalName} operates. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.</p>
        </section>

        <section className="pt-12 border-t border-slate-100">
          <p className="mb-4">We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.</p>
          <p className="mb-8">For any questions regarding these Terms of Service, please contact us at:</p>
          
          <div className="bg-slate-50 p-8 rounded-3xl space-y-4">
            <p className="text-xl font-bold text-text">{BRAND.legalName}</p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> {BRAND.phone}</p>
              <p><strong>Email:</strong> {BRAND.email}</p>
              <p><strong>Website:</strong> {BRAND.website}</p>
            </div>
          </div>
          
          <p className="mt-12 text-sm font-bold text-text/50">By using our website and services, you consent to these Terms of Service.</p>
        </section>
      </div>
    </div>
  </div>
);

const PMRequestPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://brand.dentsheatingandcooling.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Property Management Service Request</h1>
          <p className="text-xl text-text/70">Dedicated support for our property management partners. Submit your request below.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] p-4 md:p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 min-h-[1250px] relative overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="text-center">
              <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-4" />
              <p className="text-text/40 font-medium">Loading secure form...</p>
            </div>
          </div>

          <iframe
            src="https://brand.dentsheatingandcooling.com/widget/form/2iAos47rxlfqZ2VuHYaf"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
            id="inline-2iAos47rxlfqZ2VuHYaf" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Dents HC — Property Management Request"
            data-height="1207"
            data-layout-iframe-id="inline-2iAos47rxlfqZ2VuHYaf"
            data-form-id="2iAos47rxlfqZ2VuHYaf"
            title="Dents HC — Property Management Request"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};


export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <ScrollToTop />
      <Nav />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/locations/:id" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/pm-request" element={<PMRequestPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
