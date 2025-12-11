import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919745000068" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>+91 9745 0000 68</span>
            </a>
            <a href="mailto:xllogisticscokindia@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              <span>xllogisticscokindia@gmail.com</span>
            </a>
          </div>
          <div className="text-primary-foreground/80">
            GST: 32AAAFX4135F1ZK
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background/95 backdrop-blur-md shadow-md">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <span className="text-2xl md:text-3xl font-heading font-bold">
                <span className="text-accent">XL</span>
                <span className="text-primary"> Logistics</span>
                <span className="text-accent">»</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Get a Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full">
                Get a Quote
              </Button>
              <div className="pt-4 border-t border-border flex flex-col gap-2 text-sm">
                <a href="tel:+919745000068" className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  <span>+91 9745 0000 68</span>
                </a>
                <a href="mailto:xllogisticscokindia@gmail.com" className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  <span>xllogisticscokindia@gmail.com</span>
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
