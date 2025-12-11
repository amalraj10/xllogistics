import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Ship, Plane } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="XL Logistics warehouse and freight operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Your Trusted Logistics Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
              Delivering Excellence
              <span className="block text-accent">Across the Globe</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-up animation-delay-200">
              From air freight to ocean cargo, road transport to warehousing — 
              XL Logistics provides comprehensive supply chain solutions with reliability and precision.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up animation-delay-300">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold group">
                Get a Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <a href="#services">
                <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold">
                  Our Services
                </Button>
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20 animate-fade-up animation-delay-400">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Plane className="text-accent" size={28} />
                </div>
                <p className="text-2xl font-bold">Air</p>
                <p className="text-sm text-primary-foreground/70">Freight</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Ship className="text-accent" size={28} />
                </div>
                <p className="text-2xl font-bold">Sea</p>
                <p className="text-sm text-primary-foreground/70">Freight</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Truck className="text-accent" size={28} />
                </div>
                <p className="text-2xl font-bold">Road</p>
                <p className="text-sm text-primary-foreground/70">Transport</p>
              </div>
            </div>
          </div>

          {/* Service Cards on desktop */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Plane, title: "Air Freight", desc: "Fast global delivery" },
                { icon: Ship, title: "Sea Freight", desc: "Cost-effective shipping" },
                { icon: Truck, title: "Road Transport", desc: "Pan-India coverage" },
                { icon: "📦", title: "Warehousing", desc: "Secure storage" },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className={`bg-background/10 backdrop-blur-md border border-primary-foreground/20 rounded-xl p-6 hover:bg-background/20 transition-all duration-300 animate-fade-up`}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    {typeof service.icon === "string" ? (
                      <span className="text-2xl">{service.icon}</span>
                    ) : (
                      <service.icon className="text-accent" size={24} />
                    )}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
