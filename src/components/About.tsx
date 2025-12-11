import { CheckCircle2, Users, Globe, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Expert team with years of logistics experience",
  "Personalized service tailored to your needs",
  "Competitive pricing with no hidden costs",
  "Real-time tracking and updates",
  "24/7 customer support",
  "Pan-India and international coverage",
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Clock, value: "24/7", label: "Support" },
  { icon: Award, value: "100%", label: "Commitment" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Your Reliable <span className="text-primary">Logistics Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              <strong className="text-foreground">XL Logistics</strong> is a professional freight forwarding 
              and logistics company based in Kochi, Kerala. We specialize in providing comprehensive 
              supply chain solutions including air freight, sea freight, road transport, 
              warehousing, and customs clearance services.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our skilled and dynamic team is passionate about logistics, ensuring that every 
              customer receives personalized service and complete satisfaction. With our strong 
              local knowledge and global network, we are eager to manage your worldwide logistics 
              with a unique personalized approach.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Learn More About Us
            </Button>
          </div>

          {/* Stats & Image */}
          <div className="relative">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 rounded-xl text-center ${
                    index === 0 ? "bg-primary text-primary-foreground" : "bg-secondary"
                  }`}
                >
                  <stat.icon
                    className={`mx-auto mb-3 ${index === 0 ? "text-accent" : "text-primary"}`}
                    size={32}
                  />
                  <p className={`text-3xl font-heading font-bold mb-1 ${
                    index === 0 ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {stat.value}
                  </p>
                  <p className={`text-sm ${
                    index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Company info card */}
            <div className="bg-secondary rounded-xl p-6 border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-4">Company Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Registered Name</span>
                  <span className="text-foreground font-medium">XL Logistics</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST Number</span>
                  <span className="text-foreground font-medium">32AAAFX4135F1ZK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Constitution</span>
                  <span className="text-foreground font-medium">Partnership</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground font-medium">Kochi, Kerala</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
