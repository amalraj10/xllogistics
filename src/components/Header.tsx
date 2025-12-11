import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/xl-logistics-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden lg:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4 xl:gap-6">
            <a href="tel:+919745000068" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span className="hidden xl:inline">+91 9745 0000 68</span>
              <span className="xl:hidden">+91 9745000068</span>
            </a>
            <a href="mailto:xllogisticscokindia@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              <span className="hidden xl:inline">xllogisticscokindia@gmail.com</span>
              <span className="xl:hidden">Email Us</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background/95 backdrop-blur-md shadow-md">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
            {/* Logo */}
            <a href="#home" className="flex items-center py-2 -ml-2 sm:-ml-4 md:-ml-6">
              <img 
                src={logoImage} 
                alt="XL Logistics" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain ml-2 sm:ml-4"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-foreground hover:text-primary transition-colors relative group text-sm xl:text-base"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a href="#contact">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm xl:text-base px-4 xl:px-6">
                  Get a Quote
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-secondary/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full mt-2">
                  Get a Quote
                </Button>
              </a>
              <div className="pt-4 border-t border-border flex flex-col gap-3 text-sm">
                <a href="tel:+919745000068" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50">
                  <Phone size={16} />
                  <span>+91 9745 0000 68</span>
                </a>
                <a href="mailto:xllogisticscokindia@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50">
                  <Mail size={16} />
                  <span className="text-xs sm:text-sm">xllogisticscokindia@gmail.com</span>
                </a>

              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
