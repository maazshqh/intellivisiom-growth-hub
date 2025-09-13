import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Clock, Award } from "lucide-react";
import { CounterAnimation } from "@/components/CounterAnimation";

const caseStudies = [
  {
    title: "E-commerce Startup Scales Support 300%",
    company: "TechFlow Commerce",
    industry: "E-commerce",
    challenge: "A rapidly growing e-commerce startup was struggling to handle increasing customer inquiries. Response times were averaging 24+ hours, customer satisfaction was dropping to 68%, and their internal team was overwhelmed.",
    solution: "We implemented a 24/7 multilingual support solution with dedicated teams for different product lines. Our team integrated seamlessly with their existing systems and established quality protocols that matched their brand voice.",
    results: [
      { metric: "95%", label: "Customer Satisfaction", icon: Award },
      { metric: "2.5", label: "Hour Avg Response Time", icon: Clock },
      { metric: "300%", label: "Support Volume Handled", icon: TrendingUp },
      { metric: "40%", label: "Cost Reduction", icon: Users }
    ],
    timeframe: "3 months",
    testimonial: "Intellivisiom didn't just solve our support problems - they became an extension of our team. Our customers can't tell the difference between our internal and outsourced support.",
    testimonialAuthor: "Sarah Chen, CEO at TechFlow Commerce"
  },
  {
    title: "SaaS Company Achieves 40% Lead Conversion Increase",
    company: "CloudSync Solutions",
    industry: "SaaS",
    challenge: "A B2B SaaS company was struggling with low lead conversion rates (12%) and needed to accelerate their sales pipeline. Their internal sales team was spending too much time on unqualified leads.",
    solution: "We deployed a specialized outbound sales team to handle lead qualification and nurturing. Using data-driven approaches and integrated CRM workflows, we created a systematic process for identifying and converting high-quality prospects.",
    results: [
      { metric: "52%", label: "Lead Conversion Rate", icon: TrendingUp },
      { metric: "200%", label: "Qualified Leads Generated", icon: Users },
      { metric: "15", label: "Days Avg Sales Cycle", icon: Clock },
      { metric: "180%", label: "ROI Improvement", icon: Award }
    ],
    timeframe: "6 months",
    testimonial: "The quality of leads from Intellivisiom is exceptional. They understand our product and can communicate value propositions better than some of our internal team members.",
    testimonialAuthor: "Michael Rodriguez, VP Sales at CloudSync Solutions"
  },
  {
    title: "Healthcare Provider Streamlines Operations",
    company: "Metro Health Network",
    industry: "Healthcare",
    challenge: "A healthcare network was drowning in administrative tasks. Patient scheduling, insurance verification, and data entry were consuming 60% of their staff's time, reducing patient care quality.",
    solution: "We established a dedicated back-office team to handle appointment scheduling, insurance verification, and medical data entry. Our HIPAA-compliant processes ensured data security while dramatically improving efficiency.",
    results: [
      { metric: "75%", label: "Reduction in Admin Time", icon: Clock },
      { metric: "98%", label: "Data Accuracy Rate", icon: Award },
      { metric: "50%", label: "Faster Patient Processing", icon: TrendingUp },
      { metric: "30%", label: "Cost Savings", icon: Users }
    ],
    timeframe: "4 months",
    testimonial: "Our medical staff can now focus on what they do best - caring for patients. The operational efficiency gains have been transformational for our practice.",
    testimonialAuthor: "Dr. Amanda Foster, Chief Medical Officer at Metro Health Network"
  }
];

export default function CaseStudies() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-accent-sky/90">
              Real results from real businesses. See how our BPO solutions have transformed operations and driven growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="card-hover overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Content */}
                    <div className="lg:col-span-2 p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-6">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {study.timeframe}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {study.title}
                      </h2>
                      
                      <div className="space-y-6 mb-8">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-destructive">Challenge</h3>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-primary">Solution</h3>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>

                      <div className="bg-muted/50 p-6 rounded-lg mb-8">
                        <blockquote className="text-foreground mb-4 italic">
                          "{study.testimonial}"
                        </blockquote>
                        <cite className="text-sm text-muted-foreground font-medium">
                          — {study.testimonialAuthor}
                        </cite>
                      </div>

                      <Button variant="default" className="group">
                        Download Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* Results */}
                    <div className="bg-muted/30 p-8 lg:p-12">
                      <h3 className="text-xl font-semibold mb-8">Results Achieved</h3>
                      
                      <div className="space-y-8">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                              <result.icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-1">
                              <CounterAnimation 
                                end={parseInt(result.metric)} 
                                suffix={result.metric.replace(/\d+/g, '')} 
                              />
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-accent-sky/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their operations with our proven BPO solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              Download All Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}