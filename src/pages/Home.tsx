import { Button } from "@/components/ui/button";
import { CounterAnimation } from "@/components/CounterAnimation";
import { AnimatedSection, AnimatedList } from "@/components/AnimatedSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card, CardContent } from "@/components/ui/card";
import { FlipCard } from "@/components/FlipCard";
import { FloatingElement, NetworkNode, ParticleBlob, GridPattern } from "@/components/FloatingElements";
import { ScrollingLogos } from "@/components/ScrollingLogos";
import { ArrowRight, CheckCircle, Users, Clock, Award, Phone, MessageSquare, HeadphonesIcon, Building2, TrendingUp, BarChart3, Zap, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideoFallback from "@/assets/hero-video-fallback.jpg";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <img 
            src={heroVideoFallback} 
            alt="Professional business operations background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-video-overlay"></div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement className="absolute top-20 left-10" delay={0}>
            <NetworkNode size="lg" className="text-accent" />
          </FloatingElement>
          
          <FloatingElement className="absolute top-40 right-20" delay={1000}>
            <ParticleBlob className="w-20 h-20" />
          </FloatingElement>
          
          <FloatingElement className="absolute bottom-40 left-20" delay={2000}>
            <NetworkNode size="md" className="text-primary" />
          </FloatingElement>
          
          <FloatingElement className="absolute top-60 left-1/3" delay={1500}>
            <div className="w-12 h-12 border border-accent/30 rounded-lg rotate-45 bg-accent/10"></div>
          </FloatingElement>
          
          <FloatingElement className="absolute bottom-60 right-1/3" delay={500}>
            <ParticleBlob className="w-16 h-16" />
          </FloatingElement>

          <div className="absolute top-0 right-0 w-80 h-80 opacity-20">
            <GridPattern />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-primary-foreground">
              <AnimatedSection animation="fade-up-scale" duration={800}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Reliable Business Process
                  <span className="block text-accent-sky parallax-float">Solutions</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-xl md:text-2xl mb-8 text-accent-sky/90 leading-relaxed">
                  Intellivision Services delivers exceptional customer experiences and streamlines operations while you focus on growth.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="scale-up" delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button variant="hero" size="xl" className="group button-hover glow-hover">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="hero-outline" size="xl" className="button-hover">
                    View Services
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Trust Metrics */}
            <div className="relative">
              <AnimatedList staggerDelay={150} animation="fade-up-scale" className="grid grid-cols-1 gap-6">
                {[
                  { value: 95, suffix: "%", label: "Customer Satisfaction", icon: Users, color: "from-blue-500 to-blue-600" },
                  { value: "24/7", label: "Coverage Available", icon: Clock, color: "from-green-500 to-green-600" },
                  { value: 8, suffix: "+", label: "Years Experience", icon: Award, color: "from-purple-500 to-purple-600" }
                ].map((metric, index) => (
                  <div key={index} className="bg-card/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center group hover:bg-card/20 transition-all duration-300">
                    <div className="flex items-center justify-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center`}>
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-3xl font-bold text-accent-sky mb-1">
                          {typeof metric.value === 'number' ? (
                            <CounterAnimation end={metric.value} suffix={metric.suffix || ""} />
                          ) : (
                            metric.value
                          )}
                        </div>
                        <div className="text-primary-foreground/80 text-sm">{metric.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </AnimatedList>
            </div>
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

      {/* Services Preview - 3D Flip Cards */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <GridPattern />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive BPO solutions with 3D interactive service cards designed to enhance customer experience and drive business growth.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList 
            staggerDelay={100} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {[
              {
                icon: HeadphonesIcon,
                title: "Inbound Support",
                subtitle: "24/7 customer service excellence with multilingual capabilities.",
                description: "Professional customer support agents handle inquiries, resolve issues, and ensure exceptional service quality across all channels.",
                features: ["24/7 Availability", "Multilingual Support", "Quality Assurance"],
                href: "/services/inbound-support"
              },
              {
                icon: Phone,
                title: "Outbound Sales",
                subtitle: "Lead generation and sales conversion that drives revenue growth.",
                description: "Strategic outbound campaigns designed to generate qualified leads and convert prospects into loyal customers.",
                features: ["Lead Generation", "Sales Conversion", "CRM Integration"],
                href: "/services/outbound-sales"
              },
              {
                icon: Building2,
                title: "Back-Office Operations",
                subtitle: "Data processing, document management, and administrative support.",
                description: "Streamlined back-office processes including data entry, document processing, and administrative task automation.",
                features: ["Data Processing", "Document Management", "Process Automation"],
                href: "/services/back-office"
              },
              {
                icon: Users,
                title: "Virtual Assistants",
                subtitle: "Dedicated remote professionals for specialized business tasks.",
                description: "Skilled virtual assistants providing executive support, research, and project management services tailored to your needs.",
                features: ["Executive Support", "Research & Analysis", "Project Management"],
                href: "/services/virtual-assistants"
              },
              {
                icon: MessageSquare,
                title: "Omnichannel Support",
                subtitle: "Seamless customer experience across all communication channels.",
                description: "Unified customer support across phone, email, chat, and social media platforms for consistent service delivery.",
                features: ["Multi-Channel Integration", "Unified Customer View", "Real-time Handoffs"],
                href: "/services/omnichannel"
              },
              {
                icon: BarChart3,
                title: "Workforce Management",
                subtitle: "Optimized scheduling and performance analytics for peak efficiency.",
                description: "Advanced workforce optimization including resource planning, performance tracking, and cost management solutions.",
                features: ["Resource Planning", "Performance Analytics", "Cost Optimization"],
                href: "/services/workforce-management"
              }
            ].map((service, index) => (
              <FlipCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                features={service.features}
                href={service.href}
                className={`fade-in-up stagger-${index % 3 + 1}`}
              />
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* Partners Section - Scrolling Logos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Companies Like These
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of satisfied clients who trust Intellivision Services with their business operations.
            </p>
          </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <ScrollingLogos />
          </AnimatedSection>
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
            Join thousands of companies that have scaled their operations with Intellivision Services' world-class BPO solutions.
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