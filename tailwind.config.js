/** @type {import('tailwindcss').Config} */
export const mode = 'jit';
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      sans: 'Lufga Light',
    },
    colors: {
      'secondary': {
        50: '#DFFCF0',
        100: '#BFF8E1',
        200: '#83F2C5',
        300: '#42EBA7',
        400: '#17D488',
        500: '#109460',
        600: '#0D784D',
        700: '#095738',
        800: '#063C26',
        900: '#031C12',
        950: '#010E09',
        foreground: '#ffffff',
      },
      'primary': {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EDEDED',
        300: '#E3E3E3',
        400: '#DBDBDB',
        500: '#D1D1D1',
        600: '#A8A8A8',
        700: '#7D7D7D',
        800: '#545454',
        900: '#292929',
        950: '#141414',
      },
      'accent': {
        50: '#e6f9f0',
        100: '#ccf3e1',
        200: '#99e7c2',
        300: '#66dba4',
        400: '#33cf85',
        500: '#00c367',
        600: '#009c52',
        700: '#00753e',
        800: '#004e29',
        900: '#002715',
        950: '#001309',
      },
      'error': {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a',
      },
      'warning': {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
        950: '#451a03',
      },
      'info': {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        950: '#083344',
      },
      'success': {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
        950: '#052e16',
      },
      'ring': '#fd8012',
      'background': '#ffffff',
      'ring-offset': '#ffffff',
    },
    typography: {
      DEFAULT: {
        css: {
          maxWidth: 'none',
          color: 'inherit',
          a: {
            'color': 'inherit',
            '&:hover': {
              color: 'inherit',
            },
          },
          h1: { color: 'inherit' },
          h2: { color: 'inherit' },
          h3: { color: 'inherit' },
          h4: { color: 'inherit' },
          blockquote: { color: 'inherit' },
          strong: { color: 'inherit' },
          code: { color: 'inherit' },
        },
      },
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
      'fade-in': {
        from: { opacity: '0' },
        to: { opacity: '1' },
      },
      'fade-out': {
        from: { opacity: '1' },
        to: { opacity: '0' },
      },
      'zoom-in': {
        from: { opacity: '0', transform: 'scale(0.95)' },
        to: { opacity: '1', transform: 'scale(1)' },
      },
      'zoom-out': {
        from: { opacity: '1', transform: 'scale(1)' },
        to: { opacity: '0', transform: 'scale(0.95)' },
      },
      'slide-in-from-top': {
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0)' },
      },
      'slide-in-from-bottom': {
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(0)' },
      },
      'slide-in-from-left': {
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' },
      },
      'slide-in-from-right': {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },
      },
      'infinite-scroll-left-to-right': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(100%)' },
      },
      'infinite-scroll-right-to-left': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'fade-in': 'fade-in 0.2s ease-out',
      'fade-out': 'fade-out 0.2s ease-out',
      'zoom-in': 'zoom-in 0.2s ease-out',
      'zoom-out': 'zoom-out 0.2s ease-out',
      'slide-in-from-top': 'slide-in-from-top 0.2s ease-out',
      'slide-in-from-bottom': 'slide-in-from-bottom 0.2s ease-out',
      'slide-in-from-left': 'slide-in-from-left 0.2s ease-out',
      'slide-in-from-right': 'slide-in-from-right 0.2s ease-out',
      'infinite-scroll-left-to-right': 'infinite-scroll-left-to-right 7s linear infinite',
      'infinite-scroll-right-to-left': 'infinite-scroll-right-to-left 7s linear infinite',
    },
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio'),
  require('tailwindcss-animate'),
];
