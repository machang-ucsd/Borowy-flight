import React, { useState, useEffect } from 'react';
import { Plane, Calendar, Map, CheckCircle, Menu, X, ArrowRight, Instagram, Mail, Phone } from 'lucide-react';
import maciejFlying from './assets/maciej_flying.jpg';
import maciejHeadshot from './assets/maciej_borowy_headshot.jpg';
import flightOnCoastline from './assets/flight_on_coastline.jpg';
import nightTime from './assets/night_time.jpg';
import planeInSky from './assets/plane_in_sky.jpg';
import resourcesOnTable from './assets/resources_on_table.jpeg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // Added 'top-0 left-0 right-0' to force the nav to the edges of the viewport
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="mx-auto w-full max-w-screen-2xl px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
          <Plane className="rotate-45" size={24} />
          BOROWY FLIGHT
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-sky-400 font-medium transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105">
            Book Session
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-sky-400 text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-sky-500 text-center text-white px-6 py-3 rounded-lg font-bold">
            Book Discovery
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    // Changed grid to flex for better full-screen reliability
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={maciejFlying} 
          alt="Cockpit view over coast" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-block bg-sky-500/20 text-sky-300 px-4 py-1 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-sky-500/30">
            Based in North Texas
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master the Skies <br/>
            <span className="text-sky-400">On Your Terms</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl">
            Freelance flight instruction tailored to your schedule. Train in your own aircraft or a rental with a dedicated, safety-focused instructor.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#contact" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px]">
              Start Training <ArrowRight size={20} />
            </a>
            <a href="#how-it-works" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center">
              How It Works
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

const ValueProps = () => {
  const props = [
    {
      icon: <Plane className="text-sky-400" size={40} />,
      title: "Your Plane or Rental",
      desc: "I come to you. We can train in your personal aircraft or I can guide you to the best rental fleets in DFW."
    },
    {
      icon: <Calendar className="text-sky-400" size={40} />,
      title: "Flexible Scheduling",
      desc: "No strict flight school hours. We book 1:1 sessions that fit around your work and life balance."
    },
    {
      icon: <CheckCircle className="text-sky-400" size={40} />,
      title: "Personalized Curricula",
      desc: "Instruction tailored to your pace and learning style, focusing on safety and real-world proficiency."
    }
  ];

  return (
    <div id="how-it-works" className="py-24 bg-slate-50">
      <div className="mx-auto w-full max-w-screen-2xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Freelance?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Break free from the rigid structures of large academies. Get an instructor who is personally invested in your success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {props.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="mb-6 bg-slate-100 w-16 h-16 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="about" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-screen-2xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={maciejHeadshot} 
                alt="Mac - Flight Instructor" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-10 -right-10 w-full h-full bg-slate-100 rounded-2xl -z-0 rotate-6 hidden md:block"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-100 rounded-full -z-0 hidden md:block"></div>
          </div>
          
          <div>
            <div className="inline-block bg-sky-100 text-sky-800 px-4 py-1 rounded-full text-sm font-bold mb-6">
              MEET YOUR INSTRUCTOR
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Maciej "Mac" Borowy</h2>
            <div className="text-lg text-slate-600 space-y-6">
              <p>
                I'm Mac, a North Texas based flight instructor dedicated to creating safe, competent, and confident pilots.
              </p>
              <p>
                My journey started with a fascination for aviation at a young age, leading me to graduate from the prestigious <span className="font-semibold text-slate-900">American Airlines Cadet Academy</span>. That rigorous training environment taught me the value of going above and beyond the minimum standards.
              </p>
              <p>
                As a freelance instructor, I bring that airline-quality discipline to a relaxed, personalized setting. My goal isn't just to help you pass a checkride—it's to give you the decision-making skills to fly your family and friends safely for years to come.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {['CFI', 'CFII', 'CSEL', 'CMEL', 'IGI'].map((rating) => (
                  <span key={rating} className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg text-sm border border-slate-200">
                    {rating}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Private Pilot Training",
      desc: "Your first step into aviation. Comprehensive ground and flight training to earn your wings.",
      image: flightOnCoastline,
    },
    {
      title: "Instrument Rating",
      desc: "Master the clouds and complex airspace. Learn to fly solely by reference to instruments.",
      image: nightTime,
    },
    {
      title: "Commercial Pilot",
      desc: "Take your flying to the professional level. Precision mastery for those seeking a career.",
      image: planeInSky,
    },
    {
      title: "Flight Reviews & Refreshers",
      desc: "Haven't flown in a while? We'll get you current, proficient, and confident again.",
      image: resourcesOnTable,
    },
  ];

  return (
    <div id="services" className="py-24 bg-slate-900 text-white">
      <div className="mx-auto w-full max-w-screen-2xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Training Services</h2>
            <p className="text-slate-400 max-w-xl text-lg">
              From your first discovery flight to professional ratings, I provide comprehensive instruction tailored to your goals.
            </p>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors mt-6 md:mt-0">
            View Pricing Options <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl h-96 cursor-pointer">
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 p-6">
                <div className="w-12 h-1 bg-sky-500 mb-4 rounded-full transition-all duration-300 group-hover:w-20"></div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: 'Private Pilot Training',
    aircraftAccess: '',
  });
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Build the URL-encoded body that Google Forms expects
      const formBody = new URLSearchParams({
        'entry.424800689': formData.firstName,        // First Name
        'entry.484310287': formData.lastName,         // Last Name
        'entry.940221405': formData.email,            // Email
        'entry.2005779949': formData.interest,        // Interest
        'entry.1996330512': formData.aircraftAccess,  // Aircraft Access
      });

      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdnLTvMwB5uyZNbSE2uLj_qoUiCeAOkw354cTYi32UOTb5I0w/formResponse',
        {
          method: 'POST',
          mode: 'no-cors', // required for Google Forms from frontend
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formBody.toString(),
        }
      );

      // With no-cors we can’t inspect the response, so assume success if no error thrown
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out! Mac will get back to you shortly.',
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        interest: 'Private Pilot Training',
        aircraftAccess: '',
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message:
          'Something went wrong sending your message. Please try again, or reach out directly via phone or email.',
      });
    }
  };
  return (
    <div id="contact" className="py-24 bg-slate-50">
      <div className="mx-auto w-full max-w-screen-2xl px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Let's Fly</h3>
              <p className="text-slate-300 mb-8">
                Ready to start your training or have questions about aircraft ownership? Reach out directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Call or Text</p>
                    <p className="font-semibold">(858) 354-1663</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                    <p className="font-semibold">borowymac@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400">
                    <Map size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Base</p>
                    <p className="font-semibold">North Texas / DFW Area</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="md:col-span-3 p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">I'm interested in...</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-slate-600"
                >
                  <option>Private Pilot Training</option>
                  <option>Instrument Rating</option>
                  <option>Commercial Pilot</option>
                  <option>Flight Review (BFR)</option>
                  <option>Other / Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Do you have access to an aircraft?</label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="aircraftAccess"
                      value="own"
                      checked={formData.aircraftAccess === 'own'}
                      onChange={handleChange}
                      className="text-sky-500 focus:ring-sky-500"
                    />
                    <span className="text-slate-600">Yes, I own one</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="aircraftAccess"
                      value="rent"
                      checked={formData.aircraftAccess === 'rent'}
                      onChange={handleChange}
                      className="text-sky-500 focus:ring-sky-500"
                    />
                    <span className="text-slate-600">No, I need to rent</span>
                  </label>
                </div>
              </div>

              {status.type && (
                <div
                  className={`text-sm mb-2 ${
                    status.type === 'success'
                      ? 'text-emerald-600'
                      : status.type === 'error'
                      ? 'text-red-600'
                      : 'text-slate-500'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all transform active:scale-95 shadow-lg shadow-slate-900/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold text-white tracking-wider flex items-center gap-2 mb-2">
              <Plane className="rotate-45" size={20} />
              BOROWY FLIGHT
            </div>
            <p className="text-sm">Safe. Personal. Professional.</p>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            {/* <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a> */}
          </div>

          <div className="text-sm">
            &copy; {new Date().getFullYear()} Borowy Flight. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-slate-900 overflow-x-hidden relative">
      <Navigation />
      <Hero />
      <ValueProps />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;