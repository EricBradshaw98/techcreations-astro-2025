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