export const businessNavigationConfig = {
  logo: { text: 'YourAgency', src: '/favicon.webp' },
  links: [
    { 
      href: '/', 
      label: 'Home',
      submenu: [
        { href: '/', label: 'Overview', description: 'Effortless website transformations' },
        { href: '/process', label: 'Our Process', description: 'How we make it simple for you' },
        { href: '/testimonials', label: 'Success Stories', description: 'What our clients achieve' }
      ]
    },
    { 
      href: '/services', 
      label: 'Services',
      submenu: [
        { href: '/services/astro-development', label: 'Custom Development', description: 'Modern websites built for performance' },
        { href: '/services/hosting', label: 'Enterprise Hosting', description: 'Secure, fast infrastructure management' },
        { href: '/services/retainers', label: 'Development Retainers', description: 'Ongoing development partnership' },
        { href: '/services/migration', label: 'Website Migration', description: 'Seamless transition from WordPress' }
      ]
    },
    { 
      href: '/about', 
      label: 'About',
      submenu: [
        { href: '/about', label: 'Our Story', description: 'Why we make websites effortless' },
        { href: '/about/team', label: 'Meet the Team', description: 'The people behind your success' },
        { href: '/about/approach', label: 'Our Approach', description: 'How we eliminate technical complexity' }
      ]
    },
    { 
      href: '/portfolio', 
      label: 'Portfolio',
      submenu: [
        { href: '/portfolio', label: 'All Transformations', description: 'See our complete work' },
        { href: '/portfolio/before-after', label: 'Before & After', description: 'Performance improvements' },
        { href: '/portfolio/case-studies', label: 'Case Studies', description: 'Detailed transformation stories' },
        { href: '/portfolio/industries', label: 'By Industry', description: 'Projects across business types' }
      ]
    },
    { 
      href: '/blog', 
      label: 'Resources',
      submenu: [
        { href: '/blog', label: 'Latest Insights', description: 'Business-focused web insights' },
        { href: '/blog/guides', label: 'Simple Guides', description: 'No-jargon website advice' },
        { href: '/blog/performance', label: 'Performance Tips', description: 'Speed & security insights' },
        { href: '/blog/case-studies', label: 'Client Stories', description: 'Real transformation journeys' }
      ]
    },
    { href: '/contact', label: 'Contact' }
  ],
  ctaButton: { href: '/contact', label: 'Start Your Transformation' }
};

export const footerNavigationConfig = {
  // Company information
  companyInfo: {
    name: 'YourAgency',
    description: 'We transform complex websites into effortless business assets. Specializing in modern, high-performance websites that grow with your business.',
    address: '123 Innovation Drive, Tech City, TC 12345',
    phone: '+1 (555) 123-4567',
    email: 'hello@youragency.com'
  },
  
  // Footer link sections (organized differently than main nav)
  links: {
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/about/team', label: 'Our Team' },
      { href: '/about/approach', label: 'Our Approach' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact Us' }
    ],
    services: [
      { href: '/services/astro-development', label: 'Custom Development' },
      { href: '/services/migration', label: 'Website Migration' },
      { href: '/services/hosting', label: 'Enterprise Hosting' },
      { href: '/services/retainers', label: 'Development Retainers' },
      { href: '/services/maintenance', label: 'Website Maintenance' },
      { href: '/services/consulting', label: 'Strategy Consulting' }
    ],
    resources: [
      { href: '/blog', label: 'Blog & Insights' },
      { href: '/guides', label: 'Website Guides' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/resources/tools', label: 'Free Tools' },
      { href: '/resources/downloads', label: 'Downloads' },
      { href: '/testimonials', label: 'Success Stories' }
    ],
    legal: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookie Policy' },
      { href: '/accessibility', label: 'Accessibility Statement' }
    ]
  },
  
  // Social media links
  socialLinks: [
    { 
      href: 'https://twitter.com/youragency', 
      label: 'Follow us on Twitter for web development insights', 
      icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', 
      platform: 'Twitter' 
    },
    { 
      href: 'https://linkedin.com/company/youragency', 
      label: 'Connect with us on LinkedIn for business insights', 
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z', 
      platform: 'LinkedIn' 
    },
    { 
      href: 'https://github.com/youragency', 
      label: 'Check out our open source projects on GitHub', 
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22', 
      platform: 'GitHub' 
    },
    { 
      href: 'https://youtube.com/@youragency', 
      label: 'Subscribe to our YouTube channel for tutorials', 
      icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z', 
      platform: 'YouTube' 
    }
  ],
  
  // Newsletter signup
  newsletter: {
    title: 'Stay Ahead of the Curve',
    description: 'Get weekly insights on modern web development, performance tips, and business growth strategies delivered to your inbox.',
    placeholder: 'Enter your email address',
    buttonText: 'Subscribe'
  },
  
  // Copyright notice
  copyright: `© ${new Date().getFullYear()} YourAgency. All rights reserved.`
};
