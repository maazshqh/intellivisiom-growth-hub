import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CounterAnimation } from "@/components/CounterAnimation";
import { ArrowRight, Users, Globe, Award, Shield, Heart, Target, Lightbulb, Handshake } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make puts our clients' success at the center."
  },
  {
    icon: Shield,
    title: "Trust & Security", 
    description: "Unwavering commitment to data protection and confidentiality."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Continuous improvement and pursuit of operational perfection."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing technology and creative solutions for better outcomes."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Building long-term relationships based on mutual success."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Delivering world-class service with local market understanding."
  }
];

const timeline = [
  {
    year: "2016",
    title: "Company Founded",
    description: "Started with a vision to revolutionize BPO services with a customer-first approach."
  },
  {
    year: "2018", 
    title: "First Major Client",
    description: "Secured partnership with Fortune 500 company, establishing our enterprise capabilities."
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Opened operations centers in 3 countries to provide 24/7 coverage."
  },
  {
    year: "2022",
    title: "Technology Innovation",
    description: "Launched AI-powered quality assurance and workforce optimization platform."
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Named 'BPO Provider of the Year' by Global Outsourcing Association."
  }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Intellivisiom
            </h1>
            <p className="text-xl md:text-2xl text-accent-sky/90">
              Since 2016, we've been empowering businesses worldwide with exceptional BPO solutions that drive growth and enhance customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: 500, suffix: "+", label: "Happy Clients" },
              { metric: 95, suffix: "%", label: "Client Retention" },
              { metric: 1000, suffix: "+", label: "Team Members" },
              { metric: 15, suffix: "+", label: "Countries Served" }
            ].map((stat, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <CounterAnimation end={stat.metric} suffix={stat.suffix} />
                  </div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower businesses of all sizes with world-class BPO solutions that enhance customer experiences, 
                  drive operational efficiency, and accelerate growth through innovative technology and exceptional service delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the global leader in transformative BPO services, setting new standards for quality, 
                  innovation, and client success while creating meaningful career opportunities for our global workforce.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className={`card-hover fade-in-up stagger-${index % 3 + 1}`}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our growth story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={event.year} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{event.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced leaders driving innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Chief Executive Officer",
                experience: "15+ years in BPO and technology leadership"
              },
              {
                name: "David Chen",
                role: "Chief Operating Officer",
                experience: "12+ years optimizing global operations"
              },
              {
                name: "Maria Rodriguez", 
                role: "Chief Technology Officer",
                experience: "10+ years in enterprise technology solutions"
              }
            ].map((leader, index) => (
              <Card key={leader.name} className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-accent-sky/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that trust Intellivisiom to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" className="group">
              Start Partnership
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              Schedule Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}