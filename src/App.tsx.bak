import { motion, AnimatePresence } from 'framer-motion'
import { Phone, CheckCircle, Thermometer, ShieldCheck, Settings, Wind, Star, ArrowRight, ChevronDown, MessageSquare, Quote, Facebook, Twitter, Instagram, Menu, X, Mail, Clock, Send, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const BRAND = {
  name: 'Arctic Air',
  fullName: 'Arctic Air HVAC',
  phone: '(800) 555-0199',
  email: 'service@arcticairhvac.com',
  address: '123 Comfort Lane, Irvine, CA 92602',
  location: 'Irvine, CA',
  tagline: 'Premium Heating & Cooling'
}

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
    id: 'irvine',
    name: 'Irvine',
    heroTitle: 'Serving Irvine With Excellence',
    description: `We are proud to serve Irvine, bringing top-tier HVAC services to businesses and residents in the heart of Orange County. As a hub of innovation and family life, Irvine recognizes the value of excellence, and we are committed to delivering tailored solutions that meet the high standards of this community. From the busy commercial centers near UCI to the pristine residential neighborhoods of Turtle Rock and Woodbridge, our technicians ensure your environment remains perfectly climate-controlled year-round. We understand the specific architectural styles and environmental factors that influence heating and cooling efficiency in Irvine, allowing us to provide preventative maintenance and rapid repairs that keep your systems running at peak performance while minimizing energy costs. Whether you need a complex installation for a new office space or a delicate repair for your home's air quality system, we bring the expertise and reliability that Irvine deserves.`,
    mapImage: '/locations/irvine.png'
  },
  {
    id: 'tustin',
    name: 'Tustin',
    heroTitle: 'Serving Tustin With Excellence',
    description: `Our highly skilled team is dedicated to providing Tustin residents with HVAC services that are not only effective but also long-lasting. In a city that beautifully blends historic charm with modern development, we take a versatile approach to every project. Whether you live in a classic home in Old Town Tustin that requires careful integration of modern climate control or a contemporary residence in Tustin Legacy, we use modern techniques, innovative solutions, and best practices to ensure the highest level of comfort. Our deep understanding of Tustin’s local climate allows us to recommend the most efficient heating and cooling systems tailored to your specific needs. We prioritize transparent communication and timely service, ensuring that every Tustin family can enjoy a reliable HVAC system that stands up to the California sun. Trust us to be your local comfort partners, dedicated to maintaining the health and efficiency of your home's mechanical systems.`,
    mapImage: '/locations/tustin.png'
  },
  {
    id: 'costa-mesa',
    name: 'Costa Mesa',
    heroTitle: 'Serving Costa Mesa With Excellence',
    description: `Costa Mesa families trust us for our transparent, reliable, and excellent customer service. Known as the 'City of the Arts,' Costa Mesa expects quality and precision, and we strive to reflect those values in every HVAC installation and repair we perform. No matter the size or scope of the service you require—from high-efficiency AC units for retail spaces near South Coast Plaza to custom heating solutions for suburban homes—we are prepared to assist with outstanding results and professional support. We take pride in our ability to diagnose complex issues quickly and offer cost-effective solutions that don't compromise on quality. Our technicians are trained on the latest smart home integrations and eco-friendly technologies, helping Costa Mesa residents reduce their carbon footprint while maximizing indoor comfort. We aren't just your HVAC contractors; we are members of the local community dedicated to ensuring your home is a sanctuary of clean, comfortable air regardless of the season.`,
    mapImage: '/locations/costa-mesa.png'
  },
  {
    id: 'santa-ana',
    name: 'Santa Ana',
    heroTitle: 'Serving Santa Ana With Excellence',
    description: `In Santa Ana, we've built a reputation for excellence and reliability through years of dedicated service to this vibrant and diverse community. Our process is designed to be straightforward, efficient, and hassle-free, ensuring your home or business stays comfortable throughout every season. We understand that Santa Ana's unique mix of historic architecture and dense urban layout requires a specialized touch, whether it's navigating tight spaces for a furnace replacement or optimizing air distribution in a multi-story building. Our localized expertise allows us to provide targeted maintenance that addresses common regional issues like heavy dust or coastal moisture. We are committed to fast response times, recognizing that an HVAC failure in the Santa Ana heat is more than just an inconvenience—it's a priority. By choosing us, you're partnering with a team that values integrity and hard work as much as the people of Santa Ana do, ensuring your comfort is never left to chance.`,
    mapImage: '/locations/santa-ana.png'
  },
  {
    id: 'newport-beach',
    name: 'Newport Beach',
    heroTitle: 'Serving Newport Beach With Excellence',
    description: `Newport Beach properties require specialized care due to the unique coastal environment, where salt air and high humidity can take a heavy toll on mechanical systems. We provide tailored cooling and heating solutions that prioritize both performance and equipment longevity for our beachside clients. From the iconic peninsula to the exclusive heights of Newport Coast, we understand the aesthetic and technical requirements of high-end coastal homes. Our team specializes in corrosion-resistant HVAC components and advanced dehumidification systems designed to protect your coastal investment from the elements. We offer white-glove service that respects the privacy and time of our Newport Beach customers, delivering precision workmanship that integrates seamlessly with your home's design. Whether you’re looking to upgrade to a whisper-quiet multi-zone system or need specialized maintenance for a luxury property, we bring the expertise and elite service level that Newport Beach demands.`,
    mapImage: '/locations/newport-beach.png'
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
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
            AA
          </div>
          <span className="text-2xl font-heading font-bold text-primary tracking-tight">{BRAND.name}</span>
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
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">AA</div>
          <span className="text-xl font-heading font-bold tracking-tight">{BRAND.name}</span>
        </div>
        <p className="text-base leading-relaxed mb-6">
          Expert HVAC services providing comfort and quality air to homes and businesses across {BRAND.location} and the surrounding areas.
        </p>
        <div className="flex gap-3">
          {[Facebook, Twitter, Instagram].map((Icon, i) => (
            <div key={i} className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer">
              <Icon size={16} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Company</h4>
        <ul className="space-y-4 text-base">
          <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Services</h4>
        <ul className="space-y-4 text-base">
          {services.map(s => (
            <li key={s.id}><Link to={s.link} className="hover:text-primary transition-colors">{s.title}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Locations</h4>
        <ul className="space-y-4 text-base">
          {locations.map(loc => (
            <li key={loc.id}><Link to={`/locations/${loc.id}`} className="hover:text-primary transition-colors">{loc.name}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Reach Us</h4>
        <div className="space-y-4 text-base">
          <p className="leading-relaxed">{BRAND.address}</p>
          <a href={`tel:${BRAND.phone}`} className="block text-white font-bold text-2xl tracking-tight hover:text-primary transition-colors">{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`} className="block text-secondary font-medium underline hover:text-primary transition-colors">{BRAND.email}</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-white/5 text-center text-[10px] tracking-[0.5em] uppercase opacity-30 font-bold">
      © 2026 {BRAND.fullName}. All rights reserved. Professional comfort since 2011.
    </div>
  </footer>
)
const AboutPage = () => (
  <div className="pt-20">
    {/* Page Hero - Aligned with Service Pages */}
    <section className="relative py-14 md:py-20 lg:py-24 overflow-hidden bg-[#F8FAFF]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10 blur-3xl opacity-30" />
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
            Focused on Your <br/><span className="text-secondary">Comfort</span> Since 2011
          </h1>
          <p className="text-xl text-text/60 mb-10 leading-relaxed max-w-xl">
            {BRAND.name} started with a simple belief: every homeowner in {BRAND.location} deserves reliable HVAC service without the stress. Over a decade later, that's still our driving force.
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
            When we first opened our doors in 2011, we noticed a recurring theme among homeowners: they were tired of waiting for technicians who never showed up or didn't explain what they were doing. We decided to build a company that prioritized clarity and consistency.
          </p>
          <p>
            Today, {BRAND.fullName} is recognized as a leader in premium heating and cooling across the {BRAND.location} area. We've stayed small enough to care about every individual client but grown skilled enough to handle the most complex mechanical challenges.
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
            { title: 'Community Care', desc: 'Serving our neighbors in Irvine isn\'t just business; it\'s personal. We treat your home with the same respect as our own.' }
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

const ContactPage = () => (
  <div className="pt-20">
    <section className="relative py-14 md:py-20 lg:py-24 overflow-hidden bg-[#F8FAFF]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10 blur-3xl opacity-30" />
      <div className="max-w-7xl mx-auto px-4">

        {/* Headline always first — above the 2-col grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 text-secondary font-bold mb-6 uppercase tracking-[0.2em] text-[13px] bg-secondary/10 px-4 py-2 rounded-full">
            <MessageSquare size={16} />
            Contact Us
          </div>
          <h1 className="text-[32px] md:text-[48px] lg:text-[72px] font-heading font-bold text-text mb-4 leading-[1.1]">
            Get Your <span className="text-secondary">Free Quote</span> Today
          </h1>
          <p className="text-xl text-text/60 leading-relaxed max-w-xl">
            Ready to experience premium comfort? Fill out the form or give us a call. Our team is ready to help.
          </p>
        </motion.div>

        {/* 2-col grid: form first in DOM (mobile), contact info second in DOM (mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Form: first on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-50 lg:order-last"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text/60 px-2 uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-text outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text/60 px-2 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" placeholder="(800) 000-0000" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-text outline-none" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text/60 px-2 uppercase tracking-wider">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-text outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text/60 px-2 uppercase tracking-wider">Your City</label>
                  <input type="text" placeholder="New York" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-text outline-none" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text/60 px-2 uppercase tracking-wider">Service Needed</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-text outline-none appearance-none">
                  <option>AC Repair</option>
                  <option>AC Installation</option>
                  <option>Heating Service</option>
                  <option>System Maintenance</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text/60 px-2 uppercase tracking-wider">Your Message</label>
                <textarea placeholder="How can we help you?" rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-text outline-none resize-none" />
              </div>
              <button type="submit" className="w-full btn-primary py-6 text-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
                <Send size={20} />
                Submit My Request
              </button>
            </form>
          </motion.div>

          {/* Contact info: second on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 lg:order-first"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary border border-slate-50">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-text/40 font-bold uppercase tracking-wider text-xs mb-1">Call Us Anywhere</p>
                <a href={`tel:${BRAND.phone}`} className="text-2xl font-bold text-text hover:text-primary transition-colors">{BRAND.phone}</a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary border border-slate-50">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-text/40 font-bold uppercase tracking-wider text-xs mb-1">Email Our Team</p>
                <p className="text-2xl font-bold text-text">{BRAND.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary border border-slate-50">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-text/40 font-bold uppercase tracking-wider text-xs mb-1">Service Hours</p>
                <p className="text-2xl font-bold text-text">Mon - Sat: 8am - 6pm</p>
              </div>
            </div>
          </motion.div>

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
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10 blur-3xl opacity-30 select-none pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 text-secondary font-bold mb-6 uppercase tracking-[0.2em] text-[13px] bg-secondary/10 px-4 py-2 rounded-full">
              <Wind size={16} />
              Trusted HVAC Services
            </div>
            <h1 className="text-[48px] md:text-[64px] font-heading font-bold text-text mb-6 leading-[1.05] tracking-tight">
              Reliable <br/><span className="text-secondary">Heating & Cooling</span> <br/>for Every Season
            </h1>
            <p className="text-lg md:text-xl text-text/60 mb-10 max-w-xl leading-relaxed">
              Professional HVAC solutions for {BRAND.location}. From fast repairs to full installations, we keep your environment perfect all year long.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#services" 
              className="btn-primary px-8 py-4 text-lg shadow-xl shadow-cta/20 whitespace-nowrap"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-[40px] shadow-2xl"
          >
            <img 
              src="/homepage_hero.png" 
              alt="Professional HVAC Technician" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
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
            <div className="absolute -inset-10 bg-white/5 rounded-[60px] blur-3xl -z-10" />
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
              <div key={i} className="bg-white p-12 rounded-[50px] shadow-2xl shadow-slate-100/30 border border-slate-50 relative group">
                <div className="absolute top-10 right-10 text-secondary opacity-5 group-hover:opacity-20 transition-opacity">
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
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
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

const ServicePage = () => {
  const { id } = useParams()
  const service = services.find(s => (s as any).id === id) as any

  if (!service) return <div className="pt-40 text-center">Service not found</div>

  return (
    <div className="pt-20">
      <section className="relative py-14 md:py-20 lg:py-24 overflow-hidden bg-[#F8FAFF]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10 blur-3xl opacity-30" />
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">Need immediate assistance?</h2>
            <p className="text-base md:text-xl text-white/70 mb-8 leading-relaxed font-medium">
              Our technicians are on standby to help you with your {service.title.toLowerCase()} needs. Experience the {BRAND.name} difference today.
            </p>
            <div className="flex flex-col gap-4">
              <a href={`tel:${BRAND.phone}`} className="bg-cta text-white px-8 py-4 rounded-2xl font-bold text-base md:text-xl hover:opacity-90 transition-all text-center whitespace-nowrap">
                Call {BRAND.phone}
              </a>
              <Link to="/contact" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-base md:text-xl hover:bg-white/20 transition-all text-center backdrop-blur-md whitespace-nowrap">
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
              Our Service Coverage — {location.name}, CA
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
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
