export const servicesOverviewConfig = {
  eyebrow: "What We Do",
  headline: "Effortless Website Transformation - You Focus on Business, We Handle Everything",
  description: "Send us your content and get a lightning-fast, secure website built on enterprise infrastructure. No technical work required - we handle everything from development to hosting to ongoing maintenance.",
  ctaText: "See All Services",
  ctaHref: "/services",
  variant: "cards",
  showCta: true,
  maxServices: 6,
  services: [
    {
      icon: "🚀",
      title: "Custom Astro Development",
      description: "Modern websites built for speed and performance. Just send us your content - we handle all the technical development work.",
      features: [
        "Lightning-fast load times (sub-second)",
        "Mobile-first responsive design", 
        "SEO optimized from day one",
        "Zero technical work required from you"
      ],
      href: "/services/astro-development",
      highlighted: true,
      stats: {
        primary: "4x Faster",
        secondary: "than WordPress"
      }
    },
    {
      icon: "🔒",
      title: "Enterprise Hosting & Security",
      description: "VPN-protected hosting with automated backups and 24/7 monitoring. Your website stays fast, secure, and online.",
      features: [
        "99.9% uptime guarantee",
        "VPN-protected admin access",
        "Automated daily backups with 30-day retention",
        "24/7 security monitoring and threat protection"
      ],
      href: "/services/hosting",
      highlighted: false,
      stats: {
        primary: "99.9%",
        secondary: "Uptime"
      }
    },
    {
      icon: "🔧",
      title: "Development Retainers",
      description: "Your dedicated development team without the overhead. Submit requests, we handle everything - no technical management required.",
      features: [
        "Dedicated development hours",
        "24-48 hour response time",
        "No project management needed",
        "Transparent monthly reporting"
      ],
      href: "/services/retainers",
      highlighted: false,
      stats: {
        primary: "24-48hr",
        secondary: "Response"
      }
    },
    {
      icon: "⚡",
      title: "WordPress Migration",
      description: "Seamless transition from WordPress to modern infrastructure. Keep your content, gain the performance - zero downtime.",
      features: [
        "Zero downtime migration process",
        "Content preservation guaranteed",
        "300% average performance improvement",
        "Simple DNS change to go live"
      ],
      href: "/services/migration",
      highlighted: false,
      stats: {
        primary: "0",
        secondary: "Downtime"
      }

    },
    {
  icon: "📊",
  title: "Analytics & Performance Monitoring",
  description: "Real-time insights into your website's performance, user behavior, and conversion metrics. Make data-driven decisions without the complexity.",
  features: [
    "Custom dashboard with key metrics",
    "Conversion funnel tracking",
    "Performance alerts and recommendations",
    "Monthly performance reports"
  ],
  href: "/services/analytics",
  highlighted: false,
  stats: {
    primary: "Real-time",
    secondary: "Insights"
  }
},
{
  icon: "🔍",
  title: "SEO & Content Optimization",
  description: "Boost your search rankings with technical SEO, content optimization, and ongoing performance monitoring.",
  features: [
    "Technical SEO audit and fixes",
    "Content optimization strategy",
    "Local SEO setup",
    "Monthly ranking reports"
  ],
  href: "/services/seo",
  highlighted: false,
  stats: {
    primary: "Higher",
    secondary: "Rankings"
  }
},

   
  ]
};

// Process-focused configuration showcasing the effortless experience
export const effortlessProcessConfig = {
  eyebrow: "How It Works",
  headline: "Three Simple Steps to Transform Your Website",
  description: "Every step is designed to eliminate technical complexity while delivering exceptional results. You focus on your business, we handle everything else.",
  ctaText: "Start Your Transformation",
  ctaHref: "/contact",
  variant: "cards",
  showCta: true,
  maxServices: 3,
  services: [
    {
      icon: "📤",
      title: "1. You Send Content",
      description: "Share your text, images, and brand assets through our simple submission process. No technical specifications or complex requirements needed.",
      features: [
        "Simple content submission portal",
        "Guided content collection process",
        "No technical knowledge required",
        "Content review and optimization included"
      ],
      href: "/process/content-submission",
      highlighted: false,
      processStep: 1,
      timeframe: "Day 1"
    },
    {
      icon: "🔧", 
      title: "2. We Build Everything",
      description: "Custom development, hosting setup, security configuration, performance optimization - we handle 100% of the technical implementation.",
      features: [
        "Custom Astro development",
        "Enterprise hosting infrastructure setup",
        "Security & backup configuration",
        "Performance optimization and testing"
      ],
      href: "/process/development",
      highlighted: true,
      processStep: 2,
      timeframe: "Days 2-5"
    },
    {
      icon: "🚀",
      title: "3. You Go Live",
      description: "Simple DNS change and you're live with better performance. Zero downtime, zero technical work, zero stress for you.",
      features: [
        "Zero downtime launch process",
        "Simple DNS change (we guide you)",
        "Immediate performance improvements",
        "Ongoing support and monitoring included"
      ],
      href: "/process/launch",
      highlighted: false,
      processStep: 3,
      timeframe: "Day 6"
    }
  ]
};

// Results-focused configuration for testimonials/social proof section
export const resultsShowcaseConfig = {
  eyebrow: "Results That Speak",
  headline: "Real Transformations, Real Business Impact",
  description: "See how our effortless approach delivers measurable results for businesses across industries - all without any technical work from our clients.",
  ctaText: "View All Case Studies",
  ctaHref: "/portfolio",
  variant: "cards",
  showCta: true,
  maxServices: 3,
  services: [
    {
      icon: "📈",
      title: "Performance Improvements",
      description: "Average 300% speed improvement with zero technical work required from clients. Better performance means better business results.",
      features: [
        "Average 85% reduction in load time",
        "100/100 Google Lighthouse scores achievable",
        "Improved Core Web Vitals rankings",
        "Better mobile performance across devices"
      ],
      href: "/results/performance",
      highlighted: true,
      metrics: {
        before: "3.2s average load time",
        after: "0.8s average load time",
        improvement: "300% faster"
      }
    },
    {
      icon: "🛡️",
      title: "Security & Reliability",
      description: "Enterprise-grade security and 99.9% uptime without any security management needed from your team.",
      features: [
        "VPN-protected admin access",
        "Automated security monitoring",
        "Zero successful security breaches",
        "99.9% uptime across all clients"
      ],
      href: "/results/security",
      highlighted: false,
      metrics: {
        uptime: "99.9%",
        breaches: "0",
        monitoring: "24/7"
      }
    },
    {
      icon: "💼",
      title: "Business Growth",
      description: "Faster websites drive better business results. Our clients see improved conversions, better SEO rankings, and happier users.",
      features: [
        "Average 40% improvement in conversion rates",
        "Better search engine rankings",
        "Improved user experience metrics",
        "Reduced bounce rates across the board"
      ],
      href: "/results/business-impact",
      highlighted: false,
      metrics: {
        conversions: "+40%",
        seo: "Better rankings",
        users: "Happier experience"
      }
    }
  ]
};

// Individual service page configurations using enhanced theme
export const astroDevServiceConfig = {
  eyebrow: "Custom Development",
  headline: "Modern Websites Built for Maximum Performance",
  description: "Send us your content and get a custom-built website that loads 4x faster than WordPress with enterprise-grade security and zero ongoing technical work.",
  services: [
    {
      icon: "⚡",
      title: "Lightning Speed Performance",
      description: "Built with Astro for maximum performance optimization",
      features: [
        "Sub-second load times guaranteed",
        "Optimized images with modern formats",
        "Minimal JavaScript for faster parsing", 
        "Global CDN delivery optimization"
      ],
      technicalDetails: {
        framework: "Astro",
        loadTime: "< 1 second",
        lighthouse: "100/100 possible",
        optimization: "Automatic"
      }
    },
    {
      icon: "📱",
      title: "Mobile-First Responsive Design", 
      description: "Responsive design that works perfectly across all devices and screen sizes",
      features: [
        "Touch-friendly interface design",
        "Fast mobile loading optimization",
        "Progressive app-like experience",
        "Accessibility-first development approach"
      ],
      technicalDetails: {
        approach: "Mobile-first",
        breakpoints: "Fluid responsive",
        accessibility: "WCAG AA compliant",
        testing: "Real device testing"
      }
    },
    {
      icon: "🔍",
      title: "SEO Optimized Foundation",
      description: "Built for search engines from the ground up with technical SEO best practices",
      features: [
        "Clean semantic HTML structure",
        "Structured data implementation",
        "Optimized Core Web Vitals performance",
        "Automatic XML sitemap generation"
      ],
      technicalDetails: {
        structure: "Semantic HTML5",
        schema: "Structured data",
        vitals: "Optimized",
        indexing: "Search-friendly"
      }
    }
  ]
};

export const hostingServiceConfig = {
  eyebrow: "Enterprise Hosting",
  headline: "Infrastructure That Never Lets Your Business Down",
  description: "VPN-protected hosting with automated backups, monitoring, and security. Enterprise-grade infrastructure without the enterprise complexity or cost.",
  services: [
    {
      icon: "🔒",
      title: "VPN-Protected Security",
      description: "Your admin area is completely secure and accessible only through our VPN",
      features: [
        "VPN-only administrative access",
        "SSL certificates with automatic renewal",
        "Real-time security monitoring",
        "Advanced threat protection and blocking"
      ],
      securityFeatures: {
        access: "VPN-protected",
        ssl: "Auto-renewing",
        monitoring: "24/7 real-time",
        protection: "Multi-layer"
      }
    },
    {
      icon: "💾",
      title: "Automated Backup System",
      description: "Your data is always safe with our comprehensive backup solution",
      features: [
        "Daily automated backup creation",
        "30-day backup retention policy",
        "One-click restoration process",
        "Secure offsite backup storage"
      ],
      backupFeatures: {
        frequency: "Daily automatic",
        retention: "30 days",
        restoration: "One-click",
        storage: "Secure offsite"
      }
    },
    {
      icon: "📊",
      title: "Comprehensive Monitoring",
      description: "We monitor your site 24/7 so you can focus on your business",
      features: [
        "Real-time uptime monitoring",
        "Performance metrics tracking",
        "Instant alert notifications",
        "Proactive maintenance and optimization"
      ],
      monitoringFeatures: {
        uptime: "Real-time",
        performance: "Continuous",
        alerts: "Instant",
        maintenance: "Proactive"
      }
    }
  ]
};

export const retainerServiceConfig = {
  eyebrow: "Development Retainers",
  headline: "Your Dedicated Development Team Without the Overhead",
  description: "Ongoing development support without hiring, managing, or coordinating technical teams. Submit requests, we handle everything - it's that simple.",
  services: [
    {
      icon: "👥",
      title: "Dedicated Expert Team",
      description: "Consistent team members who understand your business and project needs",
      features: [
        "Same team members for consistency",
        "Deep familiarity with your project",
        "Priority support queue access",
        "Direct communication channels"
      ],
      teamBenefits: {
        consistency: "Same developers",
        knowledge: "Project familiarity",
        access: "Priority support",
        communication: "Direct access"
      }
    },
    {
      icon: "📝",
      title: "Simple Request Management",
      description: "Easy request submission with clear progress tracking and transparent communication",
      features: [
        "User-friendly request submission portal",
        "Real-time progress tracking",
        "Clear timeline estimates",
        "Detailed monthly reporting"
      ],
      processFeatures: {
        submission: "Simple portal",
        tracking: "Real-time",
        timelines: "Clear estimates",
        reporting: "Monthly detailed"
      }
    },
    {
      icon: "🚀",
      title: "Fast Turnaround Times",
      description: "Most requests completed within 24-48 hours with emergency support available",
      features: [
        "24-48 hour standard turnaround",
        "Priority queue for retainer clients",
        "Emergency support availability",
        "Proactive improvement suggestions"
      ],
      timelineFeatures: {
        standard: "24-48 hours",
        priority: "Retainer queue",
        emergency: "Available",
        suggestions: "Proactive"
      }
    }
  ]
};

// Enhanced configuration with accessibility and performance metrics
export const enhancedServicesConfig = {
  eyebrow: "Complete Solutions",
  headline: "Everything You Need for Digital Success",
  description: "Comprehensive services designed to eliminate technical complexity while delivering exceptional results and business growth.",
  ctaText: "Explore All Services",
  ctaHref: "/services",
  variant: "cards",
  showCta: true,
  maxServices: 6,
  
  // Enhanced services with performance metrics and accessibility features
  services: [
    {
      icon: "🚀",
      title: "Custom Astro Development",
      description: "Lightning-fast websites built with modern technology for maximum performance and user experience.",
      features: [
        "Sub-second load times guaranteed",
        "WCAG AA accessibility compliance",
        "Mobile-first responsive design",
        "Zero technical work required"
      ],
      href: "/services/astro-development",
      highlighted: true,
      metrics: {
        speed: "4x faster than WordPress",
        accessibility: "WCAG AA compliant",
        performance: "100/100 Lighthouse scores"
      },
      businessBenefits: [
        "Better search rankings",
        "Higher conversion rates", 
        "Improved user experience",
        "Reduced bounce rates"
      ]
    },
    {
      icon: "🔒",
      title: "Enterprise Hosting & Security",
      description: "VPN-protected infrastructure with automated monitoring and backup systems for maximum reliability.",
      features: [
        "99.9% uptime guarantee",
        "VPN-protected admin access",
        "Automated daily backups",
        "24/7 security monitoring"
      ],
      href: "/services/hosting",
      highlighted: false,
      metrics: {
        uptime: "99.9% guaranteed",
        security: "Zero breaches",
        backups: "Daily automated"
      },
      businessBenefits: [
        "Peace of mind",
        "No technical management",
        "Always-available website",
        "Protected against threats"
      ]
    },
    {
      icon: "🔧",
      title: "Development Retainers",
      description: "Dedicated development team without the overhead of hiring and managing technical staff.",
      features: [
        "24-48 hour response times",
        "Dedicated team familiarity",
        "Simple request management",
        "Transparent monthly reporting"
      ],
      href: "/services/retainers",
      highlighted: false,
      metrics: {
        response: "24-48 hours",
        consistency: "Same team",
        management: "Zero overhead"
      },
      businessBenefits: [
        "Predictable costs",
        "No hiring hassles",
        "Expert-level work",
        "Ongoing improvements"
      ]
    },
    {
      icon: "⚡",
      title: "WordPress Migration",
      description: "Seamless transition from WordPress to modern infrastructure with zero downtime and better performance.",
      features: [
        "Zero downtime migration",
        "Content preservation guaranteed",
        "Performance improvements",
        "Simple DNS switch to go live"
      ],
      href: "/services/migration",
      highlighted: false,
      metrics: {
        downtime: "Zero",
        improvement: "300% faster",
        preservation: "100% content"
      },
      businessBenefits: [
        "No business disruption",
        "Better user experience",
        "Improved search rankings",
        "Reduced maintenance costs"
      ]
    },
    {
      icon: "📈",
      title: "Performance Optimization",
      description: "Comprehensive website optimization for speed, accessibility, and search engine performance.",
      features: [
        "Core Web Vitals optimization",
        "Image and asset optimization",
        "Accessibility improvements",
        "SEO performance enhancement"
      ],
      href: "/services/optimization",
      highlighted: false,
      metrics: {
        vitals: "Optimized",
        assets: "Compressed",
        accessibility: "Enhanced"
      },
      businessBenefits: [
        "Better search rankings",
        "Improved conversions",
        "Enhanced accessibility",
        "Faster user experience"
      ]
    },
    {
      icon: "🛠️",
      title: "Ongoing Maintenance",
      description: "Comprehensive website maintenance and support to keep your site running perfectly without any work from your team.",
      features: [
        "Regular security updates",
        "Performance monitoring",
        "Content management support",
        "Technical issue resolution"
      ],
      href: "/services/maintenance",
      highlighted: false,
      metrics: {
        updates: "Automatic",
        monitoring: "Continuous",
        support: "Comprehensive"
      },
      businessBenefits: [
        "Always up-to-date",
        "No technical worries",
        "Consistent performance",
        "Professional support"
      ]
    }
  ]
};