import { Button } from "@/components/ui/button";
import { CounterAnimation } from "@/components/CounterAnimation";
import { AnimatedSection, AnimatedList } from "@/components/AnimatedSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Clock, Award, Phone, MessageSquare, HeadphonesIcon, Building2, TrendingUp, BarChart3, Zap, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import partnerLogo1 from "@/assets/partner-logo-1.jpg";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional call center team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <AnimatedSection animation="fade-up-scale" duration={800}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Scale Your Business with 
                <span className="block text-accent-sky parallax-float">World-Class BPO</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl mb-8 text-accent-sky/90">
                We deliver exceptional customer experiences, drive sales growth, and streamline operations while you focus on what matters most.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="scale-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="hero" size="xl" className="group button-hover glow-hover">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-outline" size="xl" className="button-hover">
                  Book 15-min Consult
                </Button>
              </div>
            </AnimatedSection>

            {/* Trust Metrics */}
            <AnimatedList staggerDelay={150} animation="fade-up-scale">
              {[
                { value: 95, suffix: "%", label: "Customer Satisfaction", icon: Users },
                { value: "24/7", label: "Coverage Available", icon: Clock },
                { value: 8, suffix: "+", label: "Years Experience", icon: Award }
              ].map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-accent-sky mb-2 transition-transform duration-300 group-hover:scale-110">
                    {typeof metric.value === 'number' ? (
                      <CounterAnimation end={metric.value} suffix={metric.suffix || ""} />
                    ) : (
                      metric.value
                    )}
                  </div>
                  <div className="text-lg flex items-center justify-center gap-2">
                    <metric.icon className="w-5 h-5 opacity-70" />
                    {metric.label}
                  </div>
                </div>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 parallax-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent rounded-full opacity-10 parallax-rotate"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Who We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From ambitious startups to Fortune 500 enterprises, we provide scalable BPO solutions that grow with your business.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList staggerDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Startups",
                description: "Fast, flexible support to scale quickly while maintaining quality.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Building2,
                title: "SMBs",
                description: "Cost-effective solutions that deliver enterprise-level service.",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: BarChart3,
                title: "Enterprises",
                description: "Complex, multi-channel operations with robust compliance.",
                color: "from-purple-500 to-violet-600"
              },
              {
                icon: Users,
                title: "Agencies",
                description: "White-label support services for your client success.",
                color: "from-orange-500 to-red-600"
              }
            ].map((item, index) => (
              <Card key={item.title} className="card-hover group glow-hover">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </CardContent>
              </Card>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive BPO solutions designed to enhance customer experience and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HeadphonesIcon,
                title: "Inbound Support",
                description: "24/7 customer service excellence with multilingual capabilities."
              },
              {
                icon: Phone,
                title: "Outbound Sales",
                description: "Lead generation and sales conversion that drives revenue growth."
              },
              {
                icon: Building2,
                title: "Back-Office Operations",
                description: "Data processing, document management, and administrative support."
              },
              {
                icon: Users,
                title: "Virtual Assistants",
                description: "Dedicated remote professionals for specialized business tasks."
              },
              {
                icon: MessageSquare,
                title: "Omnichannel Support",
                description: "Seamless customer experience across all communication channels."
              },
              {
                icon: BarChart3,
                title: "Workforce Management",
                description: "Optimized scheduling and performance analytics for peak efficiency."
              }
            ].map((service, index) => (
              <Card key={service.title} className={`card-hover fade-in-up stagger-${index % 3 + 1}`}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" className="group">
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

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Companies Like These
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of satisfied clients who trust us with their business operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <img 
                  src={partnerLogo1} 
                  alt={`Partner ${i + 1}`}
                  className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures seamless integration and optimal results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your business needs, challenges, and objectives."
              },
              {
                step: "02",
                title: "Setup",
                description: "Custom solution design with dedicated team training and onboarding."
              },
              {
                step: "03",
                title: "Launch",
                description: "Seamless go-live with continuous monitoring and quality assurance."
              },
              {
                step: "04",
                title: "Optimize",
                description: "Ongoing performance analysis and continuous improvement initiatives."
              }
            ].map((process, index) => (
              <div key={process.step} className={`text-center fade-in-up stagger-${index + 1}`}>
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-accent-sky/90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies that have scaled their operations with our world-class BPO solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="xl" className="group">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="xl">
              Book 15-min Consult
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}