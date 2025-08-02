// theme.js - Comprehensive design system for Astro agency site
export const theme = {
  // Color palette with semantic naming
  colors: {
    // Primary brand colors
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ee9a7ff', // Main brand color
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
    
    // Neutral grays
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a'
    },
    
    // Status colors
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d'
    },
    
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309'
    },
    
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c'
    },
    
    info: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8'
    },
    
    // Semantic color aliases
    background: '#ffffff',
    foreground: '#171717',
    muted: '#f5f5f5',
    'muted-foreground': '#737373',
    border: '#e5e5e5',
    input: '#ffffff',
    ring: '#0ea5e9',
    
    // Dark mode variants
    dark: {
      background: '#0a0a0a',
      foreground: '#fafafa',
      muted: '#171717',
      'muted-foreground': '#a3a3a3',
      border: '#262626',
      input: '#171717',
      ring: '#38bdf8'
    }
  },
  
  // Typography system
  typography: {
    // Font families
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      display: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
    },
    
    // Font sizes with line heights
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
      sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
      base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
      lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
      xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
      '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
      '5xl': ['3rem', { lineHeight: '1' }],           // 48px
      '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
      '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
      '8xl': ['6rem', { lineHeight: '1' }],           // 96px
      '9xl': ['8rem', { lineHeight: '1' }]            // 128px
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
    
    // Letter spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },
  
  // Spacing scale (used for margins, padding, gaps)
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
    11: '2.75rem',      // 44px
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
  
  // Box shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000'
  },
  
  // Animation and transitions
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
      prose: '65ch',
      reading: '45rem',
      container: '1280px'
    }
  },
  
  // Component-specific tokens
  components: {
    button: {
      height: {
        sm: '2rem',      // 32px
        md: '2.5rem',    // 40px
        lg: '3rem',      // 48px
        xl: '3.5rem'     // 56px
      },
      
      padding: {
        sm: '0.5rem 1rem',
        md: '0.75rem 1.5rem',
        lg: '1rem 2rem',
        xl: '1.25rem 2.5rem'
      }
    },
    
    input: {
      height: {
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem'
      }
    },
    
    navbar: {
      height: '4rem',     // 64px
      mobileHeight: '3.5rem' // 56px
    },
    
    footer: {
      minHeight: '20rem'  // 320px
    }
  }
};

// Utility functions for theme usage
export const themeUtils = {
  // Get color with opacity
  color: (colorPath, opacity = 1) => {
    const colorValue = getNestedValue(theme.colors, colorPath);
    if (opacity === 1) return colorValue;
    return `${colorValue}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
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
  
  // Create CSS custom properties
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
      vars[`--font-size-${key}`] = Array.isArray(value) ? value[0] : value;
    });
    
    return vars;
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