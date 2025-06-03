import React from 'react';
import { Truck, Wrench, Phone, Mail, MapPin, ChevronRight, Droplets, Construction, Sparkles, SprayCan as Spray, Instagram } from 'lucide-react';

function App() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation section */}
      <nav className="bg-gradient-to-r from-gray-50 to-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <img 
                src="/logo.svg"
                alt="Assembly Industrial Fabrication Logo"
                className="h-16 w-auto"
              />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Assembly Industrial Fabrication</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-yellow-500">Services</a>
              <a href="#about" onClick={scrollToAbout} className="text-gray-700 hover:text-yellow-500">About</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-500">Contact</a>
              <a 
                href="https://www.instagram.com/assemblyindustrial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-yellow-500"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-2 rounded-md hover:from-yellow-500 hover:to-yellow-400 transition"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section with gradient transition */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-black"></div>
        <div className="pt-32 pb-20 px-4 bg-black text-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Professional Commercial Vehicle Upfitting Solutions
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Specializing in custom water trucks, dump trucks, flatbeds, and professional welding services
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={scrollToContact}
                    className="bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition flex items-center font-bold"
                  >
                    Get Started <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-md hover:bg-yellow-500 hover:text-black transition font-bold">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://i.imgur.com/c6bVzJX.jpg"
                    alt="Industrial Truck"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-black"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialized Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-black">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-6">
                <Droplets className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Water Trucks</h3>
              <p className="text-gray-600 mb-4">
                Custom water truck solutions for dust control, construction sites, and more. Built to your specifications.
              </p>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img 
                  src="https://i.imgur.com/zwt03Rr.jpg"
                  alt="Water Truck"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-black">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-6">
                <Truck className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dump Trucks</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty dump truck upfitting for construction and industrial applications.
              </p>
              <img 
                src="https://i.imgur.com/78qZN4b.jpg"
                alt="Dump Truck"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-black">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-6">
                <Wrench className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Flatbeds</h3>
              <p className="text-gray-600 mb-4">
                Custom flatbed solutions designed for versatility and durability in any working condition.
              </p>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img 
                  src="https://i.imgur.com/kmFW248.jpg"
                  alt="Flatbed Truck"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-black">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-6">
                <Sparkles className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Welding Services</h3>
              <p className="text-gray-600 mb-4">
                Professional welding and fabrication services for all your industrial needs. Expert craftsmanship guaranteed.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
                alt="Welding Service"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-black">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-6">
                <Spray className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Powder Coating</h3>
              <p className="text-gray-600 mb-4">
                Professional powder coating services for superior durability and finish. Perfect for industrial and commercial applications.
              </p>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img 
                  src="https://i.imgur.com/VGggA4p.png"
                  alt="Powder Coating Service"
                  className="w-full h-48 object-contain bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with gradient transitions */}
      <section id="about" className="relative">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-black"></div>
        <div className="py-20 bg-black text-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Assembly Industrial Fabrication?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mt-1">
                      <ChevronRight className="h-4 w-4 text-black" />
                    </div>
                    <p className="ml-4 text-gray-300">9+ years of industry experience</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mt-1">
                      <ChevronRight className="h-4 w-4 text-black" />
                    </div>
                    <p className="ml-4 text-gray-300">Custom solutions tailored to your needs</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mt-1">
                      <ChevronRight className="h-4 w-4 text-black" />
                    </div>
                    <p className="ml-4 text-gray-300">Quality craftsmanship and attention to detail</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mt-1">
                      <ChevronRight className="h-4 w-4 text-black" />
                    </div>
                    <p className="ml-4 text-gray-300">Comprehensive warranty and support</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://i.imgur.com/FKX7Hc5.jpg"
                  alt="Workshop"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-6 rounded-lg font-bold">
                  <p className="text-2xl font-bold">9+</p>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-black"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-8 w-8 text-yellow-500" />
                <a 
                  href="tel:+16614870618"
                  className="text-xl text-black hover:text-yellow-500 transition-colors"
                >
                  (661) 487-0618
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-8 w-8 text-yellow-500" />
                <a 
                  href="mailto:design@assemblyindustrial.com"
                  className="text-xl text-black hover:text-yellow-500 transition-colors"
                >
                  design@assemblyindustrial.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-8 w-8 text-yellow-500" />
                <a 
                  href="https://maps.google.com/?q=11931+Edison+Hwy,+Bakersfield,+CA+93307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-black hover:text-yellow-500 transition-colors"
                >
                  11931 Edison Hwy, Bakersfield, CA 93307
                </a>
              </div>
            </div>
            <div className="mt-12 h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Assembly Industrial Fabrication Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.440758544725!2d-118.89406848479072!3d35.36757888026985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea69c2d4aa7fed%3A0x1f5e0e3aa23024d0!2s11931%20Edison%20Hwy%2C%20Bakersfield%2C%20CA%2093307!5e0!3m2!1sen!2sus!4v1710901245159!5e0"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-400 py-8 border-t border-yellow-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/logo.svg"
                alt="Assembly Industrial Fabrication Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-white">Assembly Industrial Fabrication</span>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} Assembly Industrial Fabrication. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;