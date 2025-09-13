import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, HeadphonesIcon, Phone, Building2, Users, MessageSquare, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import servicesHeroImage from "@/assets/services-hero.jpg";

const services = [
  {
    id: "inbound-support",
    icon: HeadphonesIcon,
    title: "Inbound Support",
    description: "24/7 customer service excellence with multilingual capabilities and advanced technology integration.",
    features: ["24/7 Availability", "Multilingual Support", "Omnichannel Integration", "Quality Assurance"]
  },
  {
    id: "outbound-sales",
    icon: Phone,
    title: "Outbound Sales",
    description: "Lead generation and sales conversion that drives revenue growth with proven methodologies.",
    features: ["Lead Generation", "Sales Conversion", "CRM Integration", "Performance Analytics"]
  },
  {
    id: "back-office",
    icon: Building2,
    title: "Back-Office Operations",
    description: "Data processing, document management, and administrative support to streamline operations.",
    features: ["Data Processing", "Document Management", "Administrative Support", "Process Automation"]
  },
  {
    id: "virtual-assistants",
    icon: Users,
    title: "Virtual Assistants",
    description: "Dedicated remote professionals for specialized business tasks and executive support.",
    features: ["Executive Support", "Administrative Tasks", "Research & Analysis", "Project Management"]
  },
  {
    id: "omnichannel",
    icon: MessageSquare,
    title: "Omnichannel Support",
    description: "Seamless customer experience across all communication channels and touchpoints.",
    features: ["Multi-Channel Integration", "Unified Customer View", "Real-time Handoffs", "Channel Analytics"]
  },
  {
    id: "workforce-management",
    icon: BarChart3,
    title: "Workforce Management",
    description: "Optimized scheduling and performance analytics for peak efficiency and cost control.",
    features: ["Resource Planning", "Performance Analytics", "Quality Management", "Cost Optimization"]
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0">
          <img 
            src={servicesHeroImage} 
            alt="Professional services" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-accent-sky/90">
              Comprehensive BPO solutions designed to enhance customer experience and drive business growth across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className={`card-hover fade-in-up stagger-${index % 2 + 1}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/services/${service.id}`}>
                    <Button variant="default" className="group w-full">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We specialize in creating tailored BPO solutions that perfectly match your unique business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Discuss Your Needs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}