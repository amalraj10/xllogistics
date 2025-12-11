import { Plane, Ship, Truck, Package, FileCheck, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for time-sensitive shipments. We connect you to major airports worldwide with express delivery options.",
    features: ["Express delivery", "Global network", "Real-time tracking"],
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description: "Cost-effective ocean freight solutions for large volume shipments. FCL and LCL options available with comprehensive port coverage.",
    features: ["FCL & LCL", "All major ports", "Competitive rates"],
  },
  {
    icon: Truck,
    title: "Road Transport",
    description: "Pan-India road transportation with a wide network of vehicles. From small parcels to full truckloads, we've got you covered.",
    features: ["Pan-India coverage", "All vehicle types", "Door-to-door"],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure and modern warehousing facilities with inventory management. Temperature-controlled and bonded storage options available.",
    features: ["Secure facilities", "Inventory mgmt", "Flexible terms"],
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert customs brokerage services to ensure smooth import and export operations. We handle all documentation and compliance.",
    features: ["Import & Export", "Documentation", "Compliance"],
  },
  {
    icon: Package,
    title: "Project Cargo",
    description: "Specialized handling for oversized and heavy cargo. Custom solutions for industrial equipment and project logistics.",
    features: ["Heavy lift", "ODC cargo", "Custom solutions"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-br from-secondary/30 via-background to-secondary/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-accent/5 rounded-full blur-lg"></div>
      </div>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-4">
            Comprehensive logistics solutions tailored to meet your business needs. 
            From pickup to delivery, we ensure your cargo reaches its destination safely and on time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300 border border-primary/10 group-hover:border-accent/20 group-hover:scale-110">
                <service.icon className="text-primary group-hover:text-accent transition-colors duration-300" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#contact">
                <Button variant="ghost" className="text-primary hover:text-accent hover:bg-accent/10 p-0 font-semibold group/btn text-sm sm:text-base">
                  Get Quote
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
              </a>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Services;
