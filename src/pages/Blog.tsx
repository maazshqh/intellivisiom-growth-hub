import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, User, Tag, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "The Future of Customer Service: AI-Powered BPO Solutions",
    excerpt: "Explore how artificial intelligence is revolutionizing customer service operations and what it means for businesses looking to scale their support capabilities.",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    featured: true
  },
  {
    id: "2", 
    title: "5 Key Metrics to Measure BPO Success",
    excerpt: "Learn about the essential KPIs that every business should track when working with a BPO partner to ensure optimal performance and ROI.",
    author: "David Chen",
    date: "March 10, 2024", 
    readTime: "6 min read",
    category: "Strategy"
  },
  {
    id: "3",
    title: "Why Startups Choose BPO for Rapid Scaling",
    excerpt: "Discover how emerging businesses leverage BPO services to achieve rapid growth while maintaining operational efficiency and cost control.",
    author: "Maria Rodriguez",
    date: "March 8, 2024",
    readTime: "7 min read", 
    category: "Startups"
  },
  {
    id: "4",
    title: "Data Security in BPO: Best Practices and Compliance",
    excerpt: "A comprehensive guide to ensuring data protection and regulatory compliance when outsourcing business processes to third-party providers.",
    author: "Michael Johnson",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Security"
  },
  {
    id: "5",
    title: "Omnichannel Support: Creating Seamless Customer Experiences",
    excerpt: "Learn how to implement effective omnichannel strategies that provide consistent, high-quality customer experiences across all touchpoints.",
    author: "Lisa Wang",
    date: "March 1, 2024",
    readTime: "9 min read",
    category: "Customer Experience"
  },
  {
    id: "6",
    title: "Cost Optimization Strategies in Business Process Outsourcing",
    excerpt: "Practical approaches to reduce operational costs while maintaining service quality through strategic BPO partnerships and process improvements.",
    author: "Robert Taylor",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Finance"
  }
];

const categories = ["All", "Technology", "Strategy", "Startups", "Security", "Customer Experience", "Finance"];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-accent-sky/90">
              Expert insights, industry trends, and best practices in business process outsourcing and customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map(post => (
        <section key={post.id} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="card-hover overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gradient-primary h-64 lg:h-auto flex items-center justify-center">
                      <div className="text-center text-primary-foreground p-8">
                        <div className="w-16 h-16 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Tag className="w-8 h-8" />
                        </div>
                        <div className="text-sm opacity-90">Featured Article</div>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="font-medium">{post.author}</div>
                            <div className="text-sm text-muted-foreground flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {post.date}
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="default" className="group">
                          Read Article
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ))}

      {/* Category Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={post.id} className={`card-hover fade-in-up stagger-${index % 3 + 1}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{post.author}</div>
                        <div className="text-xs text-muted-foreground">{post.date}</div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="group">
                      Read
                      <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest insights and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="default">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}