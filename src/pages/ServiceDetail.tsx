import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, TrendingUp, Clock, Award } from "lucide-react";
import { CounterAnimation } from "@/components/CounterAnimation";

const serviceDetails = {
  "inbound-support": {
    title: "Inbound Customer Support",
    description: "Deliver exceptional customer experiences with our 24/7 multilingual support services.",
    problems: [
      "High customer service costs",
      "Inconsistent service quality", 
      "Limited availability hours",
      "Language barriers",
      "Scalability challenges"
    ],
    solution: "Our comprehensive inbound support solution combines trained professionals, advanced technology, and proven processes to deliver consistent, high-quality customer service that scales with your business.",
    features: [
      "24/7/365 availability",
      "Multilingual support (15+ languages)",
      "Omnichannel integration",
      "Advanced ticketing systems",
      "Real-time reporting",
      "Quality assurance programs"
    ],
    results: [
      { metric: "95%", label: "Customer Satisfaction" },
      { metric: "30%", label: "Cost Reduction" },
      { metric: "24/7", label: "Availability" },
      { metric: "15+", label: "Languages Supported" }
    ]
  },
  "outbound-sales": {
    title: "Outbound Sales Services",
    description: "Drive revenue growth with our proven outbound sales and lead generation programs.",
    problems: [
      "Low conversion rates",
      "High sales team costs",
      "Inconsistent lead quality",
      "Limited market reach",
      "Time-consuming prospecting"
    ],
    solution: "Our outbound sales teams use data-driven approaches, proven scripts, and advanced CRM integration to generate qualified leads and convert prospects into customers.",
    features: [
      "Lead generation & qualification",
      "B2B & B2C sales campaigns",
      "CRM integration",
      "Performance analytics",
      "Multi-channel outreach",
      "Conversion optimization"
    ],
    results: [
      { metric: "40%", label: "Increase in Qualified Leads" },
      { metric: "25%", label: "Higher Conversion Rate" },
      { metric: "50%", label: "Cost Savings" },
      { metric: "200%", label: "ROI Improvement" }
    ]
  }
  // Add more service details as needed
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="pt-20 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground">The requested service could not be found.</p>
        <Button className="mt-6" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-accent-sky/90">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Problems We Solve
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the challenges businesses face and provide targeted solutions.
              </p>
              <div className="space-y-4">
                {service.problems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    </div>
                    <span className="text-foreground">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
                  <p className="text-muted-foreground">{service.solution}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What's Included
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive features designed to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Typical Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Real outcomes our clients achieve with our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.results.map((result, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <CounterAnimation end={parseInt(result.metric)} suffix={result.metric.replace(/\d+/g, '')} />
                  </div>
                  <div className="text-lg text-muted-foreground">{result.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-accent-sky/90 mb-8 max-w-3xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" className="group">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              Schedule Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}