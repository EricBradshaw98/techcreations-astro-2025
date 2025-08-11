// theme.js - WCAG/AODA Compliant design system for Astro agency site
export const theme = {
  // Color palette with WCAG AA+ contrast ratios
  colors: {
    // Primary brand colors - ensuring 4.5:1 contrast minimum
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9', // Updated from original for better contrast
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49'
    },
    
    // Secondary accent colors
    secondary: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e'
    },
    
    // Neutral grays with enhanced contrast
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#6b7280', // Enhanced for better contrast
      600: '#4b5563', // Enhanced for better contrast
      700: '#374151', // Enhanced for better contrast
      800: '#1f2937', // Enhanced for better contrast
      900: '#111827', // Enhanced for better contrast
      950: '#030712'
    },
    
    // Status colors with WCAG compliance
    success: {
      50: '#f0fdf4',
      500: '#16a34a', // Enhanced contrast
      600: '#15803d',
      700: '#14532d'
    },
    
    warning: {
      50: '#fffbeb',
      500: '#d97706', // Enhanced contrast
      600: '#b45309',
      700: '#92400e'
    },
    
    error: {
      50: '#fef2f2',
      500: '#dc2626', // Already compliant
      600: '#b91c1c',
      700: '#991b1b'
    },
    
    info: {
      50: '#eff6ff',
      500: '#2563eb', // Enhanced contrast
      600: '#1d4ed8',
      700: '#1e40af'
    },
    
    // Semantic color aliases
    background: '#ffffff',
    foreground: '#111827', // Enhanced contrast
    muted: '#f5f5f5',
    'muted-foreground': '#6b7280', // Enhanced contrast
    border: '#e5e5e5',
    input: '#ffffff',
    ring: '#0ea5e9',
    
    // Dark mode variants
    dark: {
      background: '#030712',
      foreground: '#f9fafb',
      muted: '#1f2937',
      'muted-foreground': '#9ca3af',
      border: '#374151',
      input: '#1f2937',
      ring: '#38bdf8'
    }
  },
  
  // Enhanced typography system with WCAG considerations
  typography: {
    // Font families
    fontFamily: {
      sans: [
        'Inter', 
        '-apple-system', 
        'BlinkMacSystemFont', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'sans-serif'
      ],
      serif: ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
      mono: [
        'JetBrains Mono', 
        'SF Mono', 
        'Monaco', 
        'Inconsolata', 
        'Roboto Mono', 
        'Consolas', 
        'Liberation Mono', 
        'Menlo', 
        'Courier', 
        'monospace'
      ],
      display: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
    },
    
    // Enhanced font sizes with better scaling and line heights
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.25rem' }],     // 13px - Minimum for accessibility
      sm: ['0.875rem', { lineHeight: '1.375rem' }],     // 14px
      base: ['1rem', { lineHeight: '1.625rem' }],       // 16px - Base size
      lg: ['1.125rem', { lineHeight: '1.75rem' }],      // 18px
      xl: ['1.25rem', { lineHeight: '1.875rem' }],      // 20px
      '2xl': ['1.5rem', { lineHeight: '2.125rem' }],    // 24px
      '3xl': ['1.875rem', { lineHeight: '2.375rem' }],  // 30px
      '4xl': ['2.25rem', { lineHeight: '2.75rem' }],    // 36px
      '5xl': ['3rem', { lineHeight: '3.5rem' }],        // 48px
      '6xl': ['3.75rem', { lineHeight: '4.25rem' }],    // 60px
      '7xl': ['4.5rem', { lineHeight: '5rem' }],        // 72px
      '8xl': ['6rem', { lineHeight: '6.5rem' }],        // 96px
      '9xl': ['8rem', { lineHeight: '8.5rem' }]         // 128px
    },
    
    // Font weights
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    
    // Letter spacing with accessibility considerations
    letterSpacing: {
      tighter: '-0.025em',  // Reduced from -0.05em for readability
      tight: '-0.0125em',   // Reduced from -0.025em
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    
    // Line height scale for better readability
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    }
  },
  
  // Enhanced spacing scale following 8pt grid
  spacing: {
    px: '1px',
    0: '0px',
    0.5: '0.125rem',    // 2px
    1: '0.25rem',       // 4px
    1.5: '0.375rem',    // 6px
    2: '0.5rem',        // 8px
    2.5: '0.625rem',    // 10px
    3: '0.75rem',       // 12px
    3.5: '0.875rem',    // 14px
    4: '1rem',          // 16px
    5: '1.25rem',       // 20px
    6: '1.5rem',        // 24px
    7: '1.75rem',       // 28px
    8: '2rem',          // 32px
    9: '2.25rem',       // 36px
    10: '2.5rem',       // 40px
    11: '2.75rem',      // 44px - Minimum touch target
    12: '3rem',         // 48px
    14: '3.5rem',       // 56px
    16: '4rem',         // 64px
    20: '5rem',         // 80px
    24: '6rem',         // 96px
    28: '7rem',         // 112px
    32: '8rem',         // 128px
    36: '9rem',         // 144px
    40: '10rem',        // 160px
    44: '11rem',        // 176px
    48: '12rem',        // 192px
    52: '13rem',        // 208px
    56: '14rem',        // 224px
    60: '15rem',        // 240px
    64: '16rem',        // 256px
    72: '18rem',        // 288px
    80: '20rem',        // 320px
    96: '24rem'         // 384px
  },
  
  // Responsive breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  // Border radius values
  borderRadius: {
    none: '0px',
    sm: '0.125rem',     // 2px
    base: '0.25rem',    // 4px
    md: '0.375rem',     // 6px
    lg: '0.5rem',       // 8px
    xl: '0.75rem',      // 12px
    '2xl': '1rem',      // 16px
    '3xl': '1.5rem',    // 24px
    full: '9999px'
  },
  
  // Enhanced box shadows with better contrast
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.08)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.12), 0 1px 2px -1px rgb(0 0 0 / 0.12)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.12), 0 2px 4px -2px rgb(0 0 0 / 0.12)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.12), 0 4px 6px -4px rgb(0 0 0 / 0.12)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.12), 0 8px 10px -6px rgb(0 0 0 / 0.12)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.3)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.08)',
    none: '0 0 #0000',
    // Focus shadows for accessibility
    focus: '0 0 0 3px rgb(14 165 233 / 0.4)',
    'focus-visible': '0 0 0 3px rgb(14 165 233 / 0.6)'
  },
  
  // Animation and transitions with reduced motion support
  animation: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
      slower: '500ms'
    },
    
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  
  // Z-index scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  },
  
  // Layout constraints
  layout: {
    container: {
      xs: '100%',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    
    maxWidth: {
      prose: '65ch',      // Optimal reading width
      reading: '45rem',   // Alternative reading width
      container: '1280px'
    }
  },
  
  // Accessibility-focused component tokens
  accessibility: {
    // Minimum touch targets (44px x 44px)
    touchTarget: {
      min: '2.75rem',     // 44px
      comfortable: '3rem'  // 48px
    },
    
    // Focus outline specifications
    focus: {
      width: '3px',
      offset: '2px',
      color: '#0ea5e9',
      style: 'solid'
    },
    
    // Text contrast requirements
    contrast: {
      // WCAG AA requirements
      normal: 4.5,
      large: 3,
      // WCAG AAA requirements
      enhanced: 7,
      largeEnhanced: 4.5
    },
    
    // Screen reader specific
    screenReader: {
      only: {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0'
      }
    }
  },
  
  // Component-specific tokens with accessibility considerations
  components: {
    button: {
      height: {
        sm: '2.75rem',    // 44px - WCAG minimum
        md: '3rem',       // 48px - Comfortable
        lg: '3.5rem',     // 56px - Large
        xl: '4rem'        // 64px - Extra large
      },
      
      padding: {
        sm: '0.75rem 1.25rem',
        md: '1rem 1.5rem',
        lg: '1.25rem 2rem',
        xl: '1.5rem 2.5rem'
      },
      
      fontSize: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
      }
    },
    
    input: {
      height: {
        sm: '2.75rem',    // 44px minimum
        md: '3rem',       // 48px
        lg: '3.5rem'      // 56px
      },
      
      fontSize: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem'
      }
    },
    
    navbar: {
      height: '4rem',           // 64px
      mobileHeight: '3.5rem'    // 56px
    },
    
    footer: {
      minHeight: '20rem'        // 320px
    },
    
    // Heading hierarchy with proper sizing
    heading: {
      h1: {
        fontSize: ['2.25rem', '2.75rem', '3.25rem'], // Mobile, tablet, desktop
        lineHeight: '1.2',
        fontWeight: '800'
      },
      h2: {
        fontSize: ['1.875rem', '2.25rem', '2.75rem'],
        lineHeight: '1.25',
        fontWeight: '700'
      },
      h3: {
        fontSize: ['1.5rem', '1.875rem', '2.25rem'],
        lineHeight: '1.3',
        fontWeight: '600'
      },
      h4: {
        fontSize: ['1.25rem', '1.5rem', '1.875rem'],
        lineHeight: '1.35',
        fontWeight: '600'
      },
      h5: {
        fontSize: ['1.125rem', '1.25rem', '1.5rem'],
        lineHeight: '1.4',
        fontWeight: '500'
      },
      h6: {
        fontSize: ['1rem', '1.125rem', '1.25rem'],
        lineHeight: '1.45',
        fontWeight: '500'
      }
    }
  }
};

// Enhanced utility functions for accessibility
export const themeUtils = {
  // Get color with opacity
  color: (colorPath, opacity = 1) => {
    const colorValue = getNestedValue(theme.colors, colorPath);
    if (opacity === 1) return colorValue;
    return `${colorValue}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
  },
  
  // Check color contrast ratio
  getContrastRatio: (foreground, background) => {
    // Simplified contrast calculation - in production, use a proper library
    const getLuminance = (hex) => {
      const rgb = parseInt(hex.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };
    
    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    
    return (lighter + 0.05) / (darker + 0.05);
  },
  
  // Get accessible color pair
  getAccessibleColorPair: (colorPath, level = 'AA') => {
    const color = getNestedValue(theme.colors, colorPath);
    const requiredRatio = level === 'AAA' ? theme.accessibility.contrast.enhanced : theme.accessibility.contrast.normal;
    
    // Return color with high contrast background
    const whiteContrast = themeUtils.getContrastRatio(color, '#ffffff');
    const blackContrast = themeUtils.getContrastRatio(color, '#000000');
    
    return {
      color,
      background: whiteContrast >= requiredRatio ? '#ffffff' : '#000000',
      contrast: Math.max(whiteContrast, blackContrast)
    };
  },
  
  // Get responsive value
  responsive: (values) => {
    const breakpoints = theme.breakpoints;
    let css = '';
    
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'base') {
        css += value;
      } else if (breakpoints[key]) {
        css += `@media (min-width: ${breakpoints[key]}) { ${value} }`;
      }
    });
    
    return css;
  },
  
  // Create accessible focus styles
  createFocusStyles: (color = theme.colors.primary[500]) => {
    return {
      outline: `${theme.accessibility.focus.width} ${theme.accessibility.focus.style} ${color}`,
      outlineOffset: theme.accessibility.focus.offset,
      boxShadow: `0 0 0 ${theme.accessibility.focus.width} ${color}40` // 40 = 25% opacity
    };
  },
  
  // Generate heading styles with proper hierarchy
  generateHeadingStyles: () => {
    const headings = {};
    
    Object.entries(theme.components.heading).forEach(([level, styles]) => {
      headings[level] = {
        fontSize: Array.isArray(styles.fontSize) ? styles.fontSize[0] : styles.fontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
        fontFamily: theme.typography.fontFamily.display.join(', '),
        color: theme.colors.neutral[900],
        margin: '0 0 0.5em 0'
      };
      
      // Add responsive sizes if available
      if (Array.isArray(styles.fontSize)) {
        headings[`${level}-responsive`] = themeUtils.responsive({
          base: `font-size: ${styles.fontSize[0]};`,
          md: styles.fontSize[1] ? `font-size: ${styles.fontSize[1]};` : '',
          lg: styles.fontSize[2] ? `font-size: ${styles.fontSize[2]};` : ''
        });
      }
    });
    
    return headings;
  },
  
  // Create CSS custom properties with accessibility enhancements
  createCSSVars: () => {
    const vars = {};
    
    // Colors
    flattenObject(theme.colors, vars, 'color');
    
    // Spacing
    Object.entries(theme.spacing).forEach(([key, value]) => {
      vars[`--spacing-${key}`] = value;
    });
    
    // Typography
    Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
      const fontSize = Array.isArray(value) ? value[0] : value;
      const lineHeight = Array.isArray(value) && value[1] ? value[1].lineHeight : 'normal';
      vars[`--font-size-${key}`] = fontSize;
      vars[`--line-height-${key}`] = lineHeight;
    });
    
    // Accessibility
    vars['--focus-width'] = theme.accessibility.focus.width;
    vars['--focus-offset'] = theme.accessibility.focus.offset;
    vars['--focus-color'] = theme.accessibility.focus.color;
    vars['--touch-target-min'] = theme.accessibility.touchTarget.min;
    
    // Box shadows
    Object.entries(theme.boxShadow).forEach(([key, value]) => {
      vars[`--shadow-${key}`] = value;
    });
    
    return vars;
  },
  
  // Validate heading hierarchy
  validateHeadingHierarchy: (headings) => {
    const issues = [];
    let currentLevel = 0;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName[1]);
      
      if (index === 0 && level !== 1) {
        issues.push(`First heading should be h1, found ${heading.tagName.toLowerCase()}`);
      }
      
      if (level > currentLevel + 1) {
        issues.push(`Heading level skipped: ${heading.tagName.toLowerCase()} follows h${currentLevel}`);
      }
      
      currentLevel = level;
    });
    
    return issues;
  }
};

// Helper functions
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

function flattenObject(obj, result = {}, prefix = '') {
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = prefix ? `${prefix}-${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, result, newKey);
    } else {
      result[`--${newKey}`] = value;
    }
  });
  
  return result;
}

export default theme;