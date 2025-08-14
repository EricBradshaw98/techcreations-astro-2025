// /src/config/heroConfig.js
// Hero configurations for different pages

export const homeHeroConfig = {
  headline: "You Provide the Copy, We Build the Future",
  subheadline: "Effortless Website Transformation",
  description: "Send us your content and get a lightning-fast, secure website built on enterprise infrastructure. No technical work required - we handle everything from development to hosting to ongoing maintenance.",
  primaryCta: { text: "Start Your Transformation", href: "/contact" },
  secondaryCta: { text: "See Our Process", href: "/about" },
  heroImage: "/hero-transformation.webp",
  heroImageAlt: "Modern website transformation process illustration",
  variant: "process-focused", // Changed from "split"
  showStats: true,
  stats: [
    { number: "0", label: "Technical Work for You" },
    { number: "300", suffix: "%", label: "Average Speed Improvement" },
    { number: "99.9", suffix: "%", label: "Uptime Guarantee" },
    { number: "48", label: "Hours to Launch" }
  ],
  
  // New process props
  showProcess: true,
  processSteps: [
    { number: "1", title: "Send Content", description: "Share your text, images, and brand assets", icon: "📤" },
    { number: "2", title: "We Build", description: "Custom development on enterprise infrastructure", icon: "🔧" },
    { number: "3", title: "You're Live", description: "Simple DNS change, zero downtime launch", icon: "🚀" }
  ],
  
  // New before/after props
  showBeforeAfter: true,
  beforeAfter: {
    before: {
      image: "/before-wordpress.webp",
      alt: "Slow WordPress website",
      stats: [
        { label: "Load Time", value: "3.2s" },
        { label: "Security Score", value: "C" },
        { label: "SEO Score", value: "65" }
      ]
    },
    after: {
      image: "/after-astro.webp", 
      alt: "Fast Astro website",
      stats: [
        { label: "Load Time", value: "0.8s" },
        { label: "Security Score", value: "A+" },
        { label: "SEO Score", value: "98" }
      ]
    }
  },
  
  showLogos: true,
  clientLogos: [
    { src: "/logos/client-1.svg", alt: "Satisfied Business Owner", width: 120, height: 40 },
    { src: "/logos/client-2.svg", alt: "Growing Company", width: 120, height: 40 },
    { src: "/logos/client-3.svg", alt: "Modern Business", width: 120, height: 40 },
    { src: "/logos/client-4.svg", alt: "Success Story", width: 120, height: 40 },
    { src: "/logos/client-5.svg", alt: "Happy Client", width: 120, height: 40 }
  ],
  trustedByText: "Trusted by businesses who chose the effortless way"
};

export const servicesHeroConfig = {
  headline: "Send Us Your Content, Get Enterprise-Grade Results",
  subheadline: "Complete Website Solutions",
  description: "Custom Astro development, enterprise hosting infrastructure, and ongoing development retainers. All you need is your content - we handle 100% of the technical work.",
  primaryCta: { text: "Get Your Free Audit", href: "/contact" },
  secondaryCta: { text: "View Our Services", href: "#services" },
  heroImage: "/hero-services.webp",
  heroImageAlt: "Complete website solution services",
  variant: "split",
  showStats: true,
  stats: [
    { number: "1", label: "DNS Change Required" },
    { number: "100", suffix: "%", label: "Managed by Us" },
    { number: "0", label: "Downtime During Launch" },
    { number: "24/7", label: "Ongoing Support" }
  ],
  showLogos: true,
  trustedByText: "Join businesses who focus on growth, not technology"
};

export const aboutHeroConfig = {
  headline: "We Make Modern Websites Effortless for Business Owners",
  subheadline: "Our Story",
  description: "We discovered that business owners shouldn't need to be web developers to have exceptional websites. That's why we handle 100% of the technical complexity while you focus on what you do best.",
  primaryCta: { text: "Work With Us", href: "/contact" },
  secondaryCta: { text: "See Our Work", href: "/portfolio" },
  heroImage: "/hero-about.webp",
  heroImageAlt: "Team making websites effortless",
  variant: "split",
  showStats: true,
  stats: [
    { number: "5", suffix: "+", label: "Years Simplifying Websites" },
    { number: "150", suffix: "+", label: "Effortless Transformations" },
    { number: "100", suffix: "%", label: "Client Satisfaction" },
    { number: "0", label: "Technical Hassle" }
  ],
  showLogos: false,
  trustedByText: "Building long-term partnerships, not just websites"
};

export const portfolioHeroConfig = {
  headline: "Real Transformations, Real Results",
  subheadline: "Our Portfolio",
  description: "See how we've transformed businesses with modern websites built on enterprise infrastructure. Every project started with just content and ended with exceptional results.",
  primaryCta: { text: "Start Your Project", href: "/contact" },
  secondaryCta: { text: "Filter Projects", href: "#portfolio" },
  heroImage: "/hero-portfolio.webp",
  heroImageAlt: "Showcase of website transformations",
  variant: "split",
  showStats: true,
  stats: [
    { number: "150", suffix: "+", label: "Websites Transformed" },
    { number: "85", suffix: "%", label: "Average Speed Increase" },
    { number: "12", label: "Industries Served" },
    { number: "48", label: "Hours Average Launch" }
  ],
  showLogos: false,
  trustedByText: "Results that speak louder than promises"
};

export const blogHeroConfig = {
  headline: "Insights for Business Growth, Not Technical Complexity",
  subheadline: "Our Blog",
  description: "Learn how modern websites can grow your business without the technical headaches. Practical insights for business owners who want results, not tech lectures.",
  primaryCta: { text: "Get Free Insights", href: "#newsletter" },
  secondaryCta: { text: "Browse Articles", href: "#articles" },
  heroImage: "/hero-blog.webp",
  heroImageAlt: "Business-focused website insights",
  variant: "split",
  showStats: true,
  stats: [
    { number: "500", suffix: "+", label: "Business Owners Helped" },
    { number: "50", suffix: "+", label: "Practical Guides" },
    { number: "0", label: "Technical Jargon" },
    { number: "Weekly", label: "New Insights" }
  ],
  showLogos: false,
  trustedByText: "Insights that actually help your business"
};

export const contactHeroConfig = {
  headline: "Ready for Your Effortless Website Transformation?",
  subheadline: "Let's Get Started",
  description: "Book your free consultation and discover how simple it is to get a modern, fast, secure website. All you need is your content - we handle everything else.",
  primaryCta: { text: "Book Free Consultation", href: "#contact-form" },
  secondaryCta: { text: "Call Us Now", href: "tel:+1234567890" },
  heroImage: "/hero-contact.webp",
  heroImageAlt: "Start your website transformation today",
  variant: "centered",
  showStats: true,
  stats: [
    { number: "24", label: "Hour Response Time" },
    { number: "0", label: "Obligation Consultation" },
    { number: "48", label: "Hours to Proposal" },
    { number: "100", suffix: "%", label: "Transparency" }
  ],
  showLogos: false,
  trustedByText: "Join the businesses who chose the effortless path"
};

// Individual service page configs
export const astroDevHeroConfig = {
  headline: "You Provide the Words, We Build the Future",
  subheadline: "Custom Astro Development",
  description: "Modern websites built with cutting-edge technology, optimized for performance and designed for your business goals. Just send us your content and brand assets.",
  primaryCta: { text: "Start Your Build", href: "/contact" },
  secondaryCta: { text: "See Examples", href: "/portfolio" },
  variant: "split",
  showStats: true,
  stats: [
    { number: "4", suffix: "x", label: "Faster Than WordPress" },
    { number: "100", label: "Lighthouse Score Possible" },
    { number: "0", label: "Security Vulnerabilities" },
    { number: "48", label: "Hours to Launch" }
  ]
};

export const hostingHeroConfig = {
  headline: "Built by Us, Hosted by Us, Managed Completely for You",
  subheadline: "Enterprise Hosting Infrastructure",
  description: "VPN-protected hosting with automated backups, monitoring, and security. Enterprise-grade infrastructure without enterprise complexity.",
  primaryCta: { text: "Secure Your Infrastructure", href: "/contact" },
  secondaryCta: { text: "View Features", href: "#features" },
  variant: "split",
  showStats: true,
  stats: [
    { number: "99.9", suffix: "%", label: "Uptime Guarantee" },
    { number: "0", label: "Security Breaches" },
    { number: "Daily", label: "Automated Backups" },
    { number: "24/7", label: "Monitoring" }
  ]
};

export const retainerHeroConfig = {
  headline: "Your Dedicated Development Team Without the Overhead",
  subheadline: "Development Retainers",
  description: "Ongoing development, updates, and optimization handled by experts. Submit requests, we handle everything - no technical management required.",
  primaryCta: { text: "Get Your Team", href: "/contact" },
  secondaryCta: { text: "See Packages", href: "#packages" },
  variant: "split",
  showStats: true,
  stats: [
    { number: "24", label: "Hour Average Response" },
    { number: "100", suffix: "%", label: "Handled by Us" },
    { number: "0", label: "Technical Management" },
    { number: "Unlimited", label: "Small Requests" }
  ]
};

//Case studies ---------------------------

export const caseStudiesData = {
  // Featured case studies for main portfolio display
  featured: [
    {
      id: "ecommerce-transformation-techgear",
      title: "E-commerce Platform Transformation",
      client: "TechGear Pro",
      industry: "Technology Retail",
      description: "Complete digital transformation for a tech retailer, resulting in 300% revenue growth and expanded market reach across North America.",
      challenge: "TechGear Pro's legacy website suffered from poor user experience, mobile performance issues, and a 1.2% conversion rate that was bleeding potential revenue. Their outdated inventory system couldn't handle peak traffic, and customer acquisition costs were spiraling out of control.",
      solution: "We built a modern, headless e-commerce platform using Next.js and Shopify Plus, implementing advanced search with Algolia, personalized product recommendations using machine learning, and a seamless mobile-first checkout experience. We also integrated real-time inventory management and automated email marketing workflows.",
      results: [
        { metric: "300", value: "%", label: "Revenue Increase" },
        { metric: "245", value: "%", label: "Conversion Rate Boost" },
        { metric: "85", value: "%", label: "Mobile Traffic" },
        { metric: "60", value: "%", label: "Customer Retention" }
      ],
      image: "/images/case-studies/techgear-hero.jpg",
      imageAlt: "TechGear Pro modern e-commerce website showing product catalog and mobile responsive design",
      tags: ["E-commerce", "UX/UI Design", "Mobile Optimization", "Performance", "Machine Learning"],
      href: "/portfolio/techgear-pro",
      featured: true,
      completedDate: "2024-03-15",
      projectDuration: "4 months",
      teamSize: 6,
      technologies: ["Next.js", "Shopify Plus", "Algolia", "Vercel", "Stripe"],
      testimonial: {
        quote: "The transformation exceeded our wildest expectations. Our revenue tripled in just 6 months.",
        author: "Sarah Chen",
        position: "CEO, TechGear Pro"
      }
    },
    {
      id: "saas-platform-cloudflow",
      title: "SaaS Platform Development",
      client: "CloudFlow",
      industry: "Project Management Software",
      description: "End-to-end development of a collaborative project management SaaS platform that acquired 10,000+ active users within 6 months of launch.",
      challenge: "CloudFlow needed to build a scalable SaaS platform from scratch with complex user management, real-time collaboration features, and enterprise-grade security. They were competing against established players like Asana and Monday.com with a limited budget and tight timeline.",
      solution: "We developed a cloud-native platform using React, Node.js, and PostgreSQL with real-time collaboration via WebSockets. The platform features advanced project templates, team analytics, integrations with 50+ tools, and enterprise SSO. We implemented a freemium model with seamless upgrade paths.",
      results: [
        { metric: "10", value: "K+", label: "Active Users" },
        { metric: "99.9", value: "%", label: "Uptime SLA" },
        { metric: "4.8", value: "/5", label: "User Rating" },
        { metric: "65", value: "%", label: "Feature Adoption" }
      ],
      image: "/images/case-studies/cloudflow-dashboard.jpg",
      imageAlt: "CloudFlow SaaS platform dashboard showing project management interface with real-time collaboration",
      tags: ["SaaS Development", "Real-time Features", "Cloud Architecture", "WebSockets", "API Design"],
      href: "/portfolio/cloudflow",
      featured: true,
      completedDate: "2024-01-20",
      projectDuration: "8 months",
      teamSize: 8,
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      testimonial: {
        quote: "They delivered a world-class platform that our users love. The real-time features are game-changing.",
        author: "Marcus Johnson",
        position: "Founder, CloudFlow"
      }
    },
    {
      id: "healthcare-app-medconnect",
      title: "HIPAA-Compliant Healthcare App",
      client: "MedConnect",
      industry: "Healthcare Technology",
      description: "HIPAA-compliant mobile application connecting patients with healthcare providers, reducing appointment booking time by 40% and improving patient satisfaction scores.",
      challenge: "MedConnect needed a secure, compliant platform for sensitive medical data while maintaining excellent user experience. The challenge was balancing strict healthcare regulations with the need for a consumer-friendly interface that could handle telemedicine consultations.",
      solution: "We built native iOS and Android apps with end-to-end encryption, biometric authentication, and seamless appointment booking. The platform includes secure video consultations, prescription management, health record storage, and integration with major EMR systems.",
      results: [
        { metric: "25", value: "K+", label: "App Downloads" },
        { metric: "40", value: "%", label: "Faster Appointments" },
        { metric: "95", value: "%", label: "User Satisfaction" },
        { metric: "100", value: "%", label: "HIPAA Compliance" }
      ],
      image: "/images/case-studies/medconnect-mobile.jpg",
      imageAlt: "MedConnect mobile app interface showing appointment booking and telemedicine consultation features",
      tags: ["Mobile Development", "Healthcare", "HIPAA Compliance", "Security", "Telemedicine"],
      href: "/portfolio/medconnect",
      featured: false,
      completedDate: "2023-11-10",
      projectDuration: "6 months",
      teamSize: 7,
      technologies: ["React Native", "Node.js", "MongoDB", "WebRTC", "AWS HIPAA"],
      testimonial: {
        quote: "The app has revolutionized how our patients interact with our practice. Booking is now effortless.",
        author: "Dr. Emily Rodriguez",
        position: "Chief Medical Officer, MedConnect"
      }
    },
    {
      id: "fintech-platform-investsmart",
      title: "AI-Powered Investment Platform",
      client: "InvestSmart",
      industry: "Financial Technology",
      description: "Revolutionary investment platform with AI-powered insights and automated portfolio management, serving 50,000+ active investors managing $2.5B+ in assets.",
      challenge: "InvestSmart wanted to democratize investment management with AI-driven insights while maintaining enterprise-level security and regulatory compliance. They needed to compete with established robo-advisors while offering unique value propositions.",
      solution: "We developed a comprehensive fintech platform with machine learning algorithms for portfolio optimization, real-time market data integration, automated rebalancing, and sophisticated risk management tools. The platform includes social trading features and educational content.",
      results: [
        { metric: "50", value: "K+", label: "Active Investors" },
        { metric: "2.5", value: "B+", label: "Assets Under Management" },
        { metric: "99.99", value: "%", label: "Security Score" },
        { metric: "35", value: "%", label: "Better Returns vs S&P 500" }
      ],
      image: "/images/case-studies/investsmart-platform.jpg",
      imageAlt: "InvestSmart investment platform showing AI-powered portfolio analytics and market insights",
      tags: ["Fintech", "AI/Machine Learning", "Data Analytics", "Security", "Compliance"],
      href: "/portfolio/investsmart",
      featured: true,
      completedDate: "2024-02-28",
      projectDuration: "10 months",
      teamSize: 12,
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "Apache Kafka", "AWS"],
      testimonial: {
        quote: "The AI insights have given our users a significant edge in the market. Truly impressive technology.",
        author: "David Park",
        position: "CTO, InvestSmart"
      }
    }
  ],

  // All case studies for comprehensive portfolio view
  all: [
    // Include all featured cases plus additional projects
    {
      id: "nonprofit-website-greenearth",
      title: "Non-Profit Website Redesign",
      client: "Green Earth Foundation",
      industry: "Environmental Non-Profit",
      description: "Complete website redesign and donation platform optimization that increased online donations by 180% and volunteer sign-ups by 120%.",
      challenge: "Green Earth Foundation's website was outdated, had poor mobile experience, and their donation process had a 75% abandonment rate. They needed to increase online engagement and streamline their fundraising efforts.",
      solution: "We redesigned their website with a focus on storytelling, impact visualization, and simplified donation flows. We integrated with major payment processors, added recurring donation options, and created a volunteer management system.",
      results: [
        { metric: "180", value: "%", label: "Donation Increase" },
        { metric: "120", value: "%", label: "Volunteer Sign-ups" },
        { metric: "65", value: "%", label: "Mobile Traffic" },
        { metric: "25", value: "%", label: "Donation Abandonment" }
      ],
      image: "/images/case-studies/greenearth-website.jpg",
      imageAlt: "Green Earth Foundation website showing impact stories and streamlined donation interface",
      tags: ["Non-Profit", "Donation Platform", "Storytelling", "Mobile Optimization"],
      href: "/portfolio/green-earth-foundation",
      featured: false,
      completedDate: "2023-09-15",
      projectDuration: "3 months",
      teamSize: 4,
      technologies: ["WordPress", "Stripe", "Mailchimp", "Google Analytics"],
      testimonial: {
        quote: "The new website has transformed our fundraising capabilities. Donations have never been higher.",
        author: "Maria Santos",
        position: "Executive Director, Green Earth Foundation"
      }
    },
    {
      id: "restaurant-chain-app-tastebud",
      title: "Restaurant Chain Mobile App",
      client: "TasteBud Restaurants",
      industry: "Food & Beverage",
      description: "Multi-location restaurant app with online ordering, loyalty program, and table reservations, serving 100,000+ customers across 45 locations.",
      challenge: "TasteBud needed to unify their customer experience across multiple locations while competing with delivery apps. They wanted to increase direct orders and build customer loyalty without paying third-party commissions.",
      solution: "We developed a comprehensive mobile app with location-based menus, real-time order tracking, integrated loyalty rewards, table reservations, and push notifications for promotions. The app includes offline functionality and seamless payment processing.",
      results: [
        { metric: "100", value: "K+", label: "App Users" },
        { metric: "45", value: "", label: "Restaurant Locations" },
        { metric: "30", value: "%", label: "Direct Order Increase" },
        { metric: "85", value: "%", label: "Customer Retention" }
      ],
      image: "/images/case-studies/tastebud-app.jpg",
      imageAlt: "TasteBud restaurant app showing menu ordering interface and loyalty rewards",
      tags: ["Mobile App", "Food Service", "Loyalty Program", "Multi-location", "Payment Processing"],
      href: "/portfolio/tastebud-restaurants",
      featured: false,
      completedDate: "2023-12-05",
      projectDuration: "5 months",
      teamSize: 6,
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "Firebase"],
      testimonial: {
        quote: "Our app has become essential for our customers. Direct orders are up 30% since launch.",
        author: "Chef Roberto Martinez",
        position: "Owner, TasteBud Restaurants"
      }
    },
    {
      id: "manufacturing-erp-steelworks",
      title: "Manufacturing ERP System",
      client: "SteelWorks Industrial",
      industry: "Manufacturing",
      description: "Custom ERP system for manufacturing operations, reducing production costs by 20% and improving delivery times by 35% through better resource management.",
      challenge: "SteelWorks was using multiple disconnected systems for inventory, production planning, and quality control. This led to inefficiencies, delayed deliveries, and difficulty tracking production costs accurately.",
      solution: "We built a comprehensive ERP system integrating inventory management, production scheduling, quality control, and financial reporting. The system includes real-time dashboards, automated alerts, and integration with existing machinery.",
      results: [
        { metric: "20", value: "%", label: "Cost Reduction" },
        { metric: "35", value: "%", label: "Faster Deliveries" },
        { metric: "90", value: "%", label: "Inventory Accuracy" },
        { metric: "15", value: "%", label: "Productivity Increase" }
      ],
      image: "/images/case-studies/steelworks-erp.jpg",
      imageAlt: "SteelWorks ERP system dashboard showing production metrics and inventory management",
      tags: ["ERP System", "Manufacturing", "Inventory Management", "Production Planning", "Integration"],
      href: "/portfolio/steelworks-industrial",
      featured: false,
      completedDate: "2024-04-10",
      projectDuration: "12 months",
      teamSize: 10,
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "Apache Camel"],
      testimonial: {
        quote: "The ERP system has streamlined our entire operation. We're more efficient than ever before.",
        author: "John Thompson",
        position: "Operations Manager, SteelWorks Industrial"
      }
    },
    {
      id: "education-platform-learnfast",
      title: "Online Learning Platform",
      client: "LearnFast Academy",
      industry: "Education Technology",
      description: "Comprehensive online learning platform with interactive courses, progress tracking, and certification system, serving 75,000+ students worldwide.",
      challenge: "LearnFast needed to transition from in-person training to online delivery while maintaining engagement and learning outcomes. They required a platform that could handle multimedia content, assessments, and certification tracking.",
      solution: "We developed a full-featured learning management system with video streaming, interactive quizzes, discussion forums, progress analytics, and automated certification. The platform supports multiple languages and payment methods.",
      results: [
        { metric: "75", value: "K+", label: "Active Students" },
        { metric: "95", value: "%", label: "Course Completion" },
        { metric: "4.9", value: "/5", label: "Student Rating" },
        { metric: "40", value: "%", label: "Revenue Growth" }
      ],
      image: "/images/case-studies/learnfast-platform.jpg",
      imageAlt: "LearnFast online learning platform showing course interface and progress tracking",
      tags: ["EdTech", "Learning Management", "Video Streaming", "Certification", "Analytics"],
      href: "/portfolio/learnfast-academy",
      featured: false,
      completedDate: "2023-10-22",
      projectDuration: "7 months",
      teamSize: 8,
      technologies: ["React", "Node.js", "MongoDB", "AWS S3", "Stripe", "WebRTC"],
      testimonial: {
        quote: "The platform has enabled us to reach students globally while maintaining high engagement levels.",
        author: "Dr. Sarah Williams",
        position: "Academic Director, LearnFast Academy"
      }
    },
    {
      id: "real-estate-platform-propfinder",
      title: "Real Estate Marketplace",
      client: "PropFinder",
      industry: "Real Estate Technology",
      description: "Advanced property search platform with AI-powered recommendations, virtual tours, and integrated mortgage calculator, facilitating $500M+ in property transactions.",
      challenge: "PropFinder wanted to differentiate their platform in a crowded real estate market by providing superior search capabilities and user experience. They needed to integrate multiple data sources and provide accurate, real-time property information.",
      solution: "We built a sophisticated search platform with machine learning-powered property recommendations, 360-degree virtual tours, neighborhood analytics, mortgage calculators, and agent matching. The platform aggregates data from multiple MLS sources.",
      results: [
        { metric: "500", value: "M+", label: "Transaction Volume" },
        { metric: "250", value: "K+", label: "Property Listings" },
        { metric: "60", value: "%", label: "User Engagement" },
        { metric: "25", value: "%", label: "Faster Sales" }
      ],
      image: "/images/case-studies/propfinder-platform.jpg",
      imageAlt: "PropFinder real estate platform showing property search results and virtual tour interface",
      tags: ["Real Estate", "Machine Learning", "Virtual Tours", "Data Integration", "Search"],
      href: "/portfolio/propfinder",
      featured: false,
      completedDate: "2024-01-08",
      projectDuration: "9 months",
      teamSize: 11,
      technologies: ["Vue.js", "Python", "Elasticsearch", "PostgreSQL", "Three.js"],
      testimonial: {
        quote: "The AI recommendations have revolutionized how our users discover properties. Engagement is through the roof.",
        author: "Michael Chen",
        position: "Product Manager, PropFinder"
      }
    }
  ],

  // Industry-specific data for filtering
  industries: [
    "Technology",
    "Healthcare",
    "Financial Services",
    "E-commerce",
    "Education",
    "Manufacturing",
    "Real Estate",
    "Non-Profit",
    "Food & Beverage"
  ],

  // Technology tags for filtering
  technologies: [
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Python",
    "Java",
    "React Native",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Machine Learning",
    "AI",
    "E-commerce",
    "Mobile Development",
    "SaaS",
    "API Development",
    "Cloud Architecture",
    "Security",
    "Performance Optimization"
  ],

  // Project types for categorization
  projectTypes: [
    "Web Application",
    "Mobile App",
    "E-commerce Platform",
    "SaaS Platform",
    "Enterprise Software",
    "Website Redesign",
    "API Development",
    "Data Analytics",
    "AI/ML Implementation",
    "Cloud Migration"
  ]
};

// Helper functions for data manipulation
export const caseStudyHelpers = {
  // Get featured case studies
  getFeatured: () => caseStudiesData.featured,
  
  // Get case studies by industry
  getByIndustry: (industry) => {
    return caseStudiesData.all.filter(study => study.industry === industry);
  },
  
  // Get case studies by technology
  getByTechnology: (technology) => {
    return caseStudiesData.all.filter(study => 
      study.technologies.includes(technology) || study.tags.includes(technology)
    );
  },
  
  // Get recent case studies
  getRecent: (limit = 6) => {
    return caseStudiesData.all
      .sort((a, b) => new Date(b.completedDate) - new Date(a.completedDate))
      .slice(0, limit);
  },
  
  // Search case studies
  search: (query) => {
    const searchTerm = query.toLowerCase();
    return caseStudiesData.all.filter(study => 
      study.title.toLowerCase().includes(searchTerm) ||
      study.client.toLowerCase().includes(searchTerm) ||
      study.industry.toLowerCase().includes(searchTerm) ||
      study.description.toLowerCase().includes(searchTerm) ||
      study.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  },
  
  // Get case study by ID
  getById: (id) => {
    return caseStudiesData.all.find(study => study.id === id);
  },
  
  // Get related case studies
  getRelated: (currentId, limit = 3) => {
    const current = caseStudyHelpers.getById(currentId);
    if (!current) return [];
    
    return caseStudiesData.all
      .filter(study => study.id !== currentId)
      .filter(study => 
        study.industry === current.industry ||
        study.tags.some(tag => current.tags.includes(tag))
      )
      .slice(0, limit);
  }
};

// Export default for easy importing
export default caseStudiesData;