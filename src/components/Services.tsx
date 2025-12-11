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
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive logistics solutions tailored to meet your business needs. 
            From pickup to delivery, we ensure your cargo reaches its destination safely and on time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="text-primary group-hover:text-accent transition-colors" size={32} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="ghost" className="text-primary hover:text-accent hover:bg-accent/10 p-0 font-semibold group/btn">
                Learn More
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-navy-dark opacity-90"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Our team of logistics experts is ready to design a tailored solution 
              that perfectly fits your business requirements.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
