import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoImage from "@/assets/xl-logistics-logo.png";
import heroImage from "@/assets/hero-logistics.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const locations = {
    india: [
      "Calicut",
      "Cochin (Head Office)",
      "Thiruvananthapuram",
      "Chennai",
      "Mangaluru",
      "Bengaluru",
      "Mumbai",
      "Mundra",
      "Delhi"
    ],
    international: [
      "Dubai, UAE",
      "Qatar",
      "Saudi Arabia"
    ]
  };

  return (
    <footer className="relative overflow-hidden text-primary-foreground">
      {/* Background Image with Overlay - Exact same as Hero */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="XL Logistics warehouse and freight operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-navy-dark/85"></div>
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-pulse animation-delay-200"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-pulse animation-delay-400"></div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container-custom section-padding pb-8 sm:pb-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 inline-block shadow-lg border border-white/20 overflow-hidden">
                <img 
                  src={logoImage} 
                  alt="XL Logistics" 
                  className="h-16 sm:h-20 w-auto object-contain transform scale-150 sm:scale-175 hover:scale-125 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed text-base">
              Your trusted partner for comprehensive logistics solutions. 
              We deliver excellence across the globe with reliability and precision.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 border border-white/20"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Our Locations</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-accent mb-2 text-sm">India</h5>
                <ul className="space-y-2">
                  {locations.india.map((location) => (
                    <li key={location} className="text-primary-foreground/80 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-accent mb-2 text-sm">International</h5>
                <ul className="space-y-2">
                  {locations.international.map((location) => (
                    <li key={location} className="text-primary-foreground/80 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size={18} />
                </div>
                <span className="text-primary-foreground/90 text-sm leading-relaxed">
                  Corporation No 67/4805A, First Floor,
                  Alliance Residency, Marine Drive,
                  Kochi, Kerala - 682031
                </span>
              </li>
              <li>
                <a href="tel:+919745000068" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Phone className="text-accent" size={18} />
                  </div>
                  <span>+91 9745 0000 68</span>
                </a>
              </li>
              <li>
                <a href="mailto:xllogisticscokindia@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Mail className="text-accent" size={18} />
                  </div>
                  <span className="text-sm break-all">xllogisticscokindia@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} XL Logistics. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;