import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: [
      "Corporation No 67/4805A, First Floor",
      "Alliance Residency, Shanmugham Road",
      "Marine Drive, Kochi, Ernakulam",
      "Kerala - 682031"
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 9745 0000 68", "+91 9645 04 2007"],
    href: "tel:+919745000068",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["xllogisticscokindia@gmail.com"],
    href: "mailto:xllogisticscokindia@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions about our services? Need a quote? 
            Our team is ready to assist you with all your logistics needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Required
                </label>
                <select className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="">Select a service</option>
                  <option value="air">Air Freight</option>
                  <option value="sea">Sea Freight</option>
                  <option value="road">Road Transport</option>
                  <option value="warehouse">Warehousing</option>
                  <option value="customs">Customs Clearance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea 
                  placeholder="Tell us about your requirements..." 
                  rows={4}
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-background rounded-xl p-6 shadow-card flex gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <info.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {info.title}
                  </h4>
                  {info.lines.map((line, i) => (
                    info.href && i === 0 ? (
                      <a
                        key={i}
                        href={info.href}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-muted-foreground">{line}</p>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-primary rounded-xl p-8 text-center">
              <h4 className="font-heading font-semibold text-primary-foreground mb-2">
                Visit Our Office
              </h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Marine Drive, Kochi - A prime location for all your logistics needs
              </p>
              <Button 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => window.open("https://maps.google.com/?q=Marine+Drive+Kochi+Kerala", "_blank")}
              >
                <MapPin size={16} className="mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
