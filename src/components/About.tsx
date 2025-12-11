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
    <section id="about" className="section-padding bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Your Reliable <span className="text-primary">Logistics Partner</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              <strong className="text-foreground">XL Logistics</strong> is a professional freight forwarding 
              and logistics company based in Kochi, Kerala. We specialize in providing comprehensive 
              supply chain solutions including air freight, sea freight, road transport, 
              warehousing, and customs clearance services.
            </p>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Our skilled and dynamic team is passionate about logistics, ensuring that every 
              customer receives personalized service and complete satisfaction. With our strong 
              local knowledge and global network, we are eager to manage your worldwide logistics 
              with a unique personalized approach.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} />
                  <span className="text-foreground text-xs sm:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm sm:text-base w-full sm:w-auto">
              Learn More About Us
            </Button>
          </div>

          {/* Stats & Image */}
          <div className="relative mt-8 lg:mt-0">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-4 sm:p-6 rounded-xl text-center ${
                    index === 0 ? "bg-primary text-primary-foreground" : "bg-secondary"
                  }`}
                >
                  <stat.icon
                    className={`mx-auto mb-2 sm:mb-3 ${index === 0 ? "text-accent" : "text-primary"}`}
                    size={24}
                  />
                  <p className={`text-2xl sm:text-3xl font-heading font-bold mb-1 ${
                    index === 0 ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {stat.value}
                  </p>
                  <p className={`text-xs sm:text-sm ${
                    index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Company info card */}
            <div className="bg-secondary rounded-xl p-4 sm:p-6 border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Company Information</h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Registered Name</span>
                  <span className="text-foreground font-medium text-right">XL Logistics</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">GST Number</span>
                  <span className="text-foreground font-medium text-right">32AAAFX4135F1ZK</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Constitution</span>
                  <span className="text-foreground font-medium text-right">Partnership</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground font-medium text-right">Kochi, Kerala</span>
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
