import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Air Freight",
    "Sea Freight",
    "Road Transport",
    "Warehousing",
    "Customs Clearance",
    "Project Cargo",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold">
                <span className="text-accent">XL</span>
                <span className="text-primary-foreground"> Logistics</span>
                <span className="text-accent">»</span>
              </span>
            </a>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for comprehensive logistics solutions. 
              We deliver excellence across the globe with reliability and precision.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-primary-foreground/80 text-sm">
                  Corporation No 67/4805A, First Floor,
                  Alliance Residency, Marine Drive,
                  Kochi, Kerala - 682031
                </span>
              </li>
              <li>
                <a href="tel:+919745000068" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="text-accent" size={18} />
                  <span>+91 9745 0000 68</span>
                </a>
              </li>
              <li>
                <a href="mailto:xllogisticscokindia@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="text-accent" size={18} />
                  <span className="text-sm">xllogisticscokindia@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} XL Logistics. All rights reserved.</p>
            <p>GST: 32AAAFX4135F1ZK</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
