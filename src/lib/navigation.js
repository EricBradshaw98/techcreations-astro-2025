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