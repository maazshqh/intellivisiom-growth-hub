import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Building2, Users, Briefcase } from "lucide-react";
import startupImage from "@/assets/startup-industry.jpg";
import enterpriseImage from "@/assets/enterprise-industry.jpg";

const industries = [
  {
    title: "Startups",
    icon: TrendingUp,
    image: startupImage,
    description: "Fast, flexible support solutions that scale with your rapid growth while maintaining quality and cost-effectiveness.",
    challenges: [
      "Limited resources for customer support",
      "Need for rapid scaling capabilities",
      "Cost-effective growth solutions",
      "Maintaining quality during expansion"
    ],
    solutions: [
      "Flexible pricing models",
      "Quick deployment (2-3 weeks)",
      "Scalable team structures",
      "Growth-focused metrics"
    ]
  },
  {
    title: "Small & Medium Businesses",
    icon: Briefcase,
    image: startupImage,
    description: "Cost-effective solutions that deliver enterprise-level service quality without the enterprise-level investment.",
    challenges: [
      "Budget constraints",
      "Limited internal resources",
      "Need for professional service",
      "Competing with larger companies"
    ],
    solutions: [
      "Affordable pricing packages",
      "Dedicated account management",
      "Professional service delivery",
      "Competitive advantage tools"
    ]
  },
  {
    title: "Enterprises",
    icon: Building2,
    image: enterpriseImage,
    description: "Complex, multi-channel operations with robust compliance frameworks and advanced reporting capabilities.",
    challenges: [
      "Complex operational requirements",
      "Strict compliance needs",
      "Multi-location coordination",
      "Advanced reporting requirements"
    ],
    solutions: [
      "Enterprise-grade security",
      "Compliance management",
      "Global operation centers",
      "Advanced analytics platform"
    ]
  },
  {
    title: "Agencies",
    icon: Users,
    image: startupImage,
    description: "White-label support services that enhance your client offerings and improve retention rates.",
    challenges: [
      "Client service expectations",
      "Maintaining brand consistency",
      "Resource allocation",
      "Service quality assurance"
    ],
    solutions: [
      "White-label solutions",
      "Brand consistency protocols",
      "Flexible resource allocation",
      "Quality guarantee programs"
    ]
  }
];

export default function Industries() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-accent-sky/90">
              Tailored BPO solutions for every business size and industry, from ambitious startups to Fortune 500 enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={industry.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {industry.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {industry.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-destructive">Common Challenges</h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">Our Solutions</h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button variant="default" className="group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="card-hover overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-80 object-cover"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We work with businesses across all industries. Let's discuss how we can create a custom solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Discuss Your Industry
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}