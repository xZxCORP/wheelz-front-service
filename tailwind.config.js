/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      primary: {
        50: '#fff8ed',
        100: '#fff0d4',
        200: '#ffdca9',
        300: '#ffc272',
        400: '#fe9e39',
        500: '#fd8012',
        600: '#ee6508',
        700: '#c84c09',
        800: '#9c3b10',
        900: '#7e3310',
        950: '#441706',
      },
      secondary: {
        50: '#f7f7f7',
        100: '#ededed',
        200: '#dfdfdf',
        300: '#c8c8c8',
        400: '#adadad',
        500: '#9c9c9c',
        600: '#888888',
        700: '#7b7b7b',
        800: '#676767',
        900: '#545454',
        950: '#363636',
      },
      accent: {
        50: '#eefcf4',
        100: '#d5f7e3',
        200: '#aeeece',
        300: '#7de0b3',
        400: '#4ac49d',
        500: '#2eab81',
        600: '#218a68',
        700: '#1d6e55',
        800: '#1c5745',
        900: '#1a483b',
        950: '#0a2a22',
      },
      error: {
        50: '#fff0f0',
        100: '#ffdddd',
        200: '#ffc0c0',
        300: '#ff9494',
        400: '#ff5757',
        500: '#ff2323',
        600: '#ff0000',
        700: '#d70000',
        800: '#b10000',
        900: '#920707',
        950: '#500000',
      },
      warning: {
        50: '#fffaeb',
        100: '#fff0c6',
        200: '#ffe088',
        300: '#ffc94d',
        400: '#ffb320',
        500: '#f99106',
        600: '#dd6c02',
        700: '#b74d06',
        800: '#943b0c',
        900: '#7a310e',
        950: '#461802',
      },
      info: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#b9e6fe',
        300: '#7cd4fd',
        400: '#36bffa',
        500: '#0ca5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
      },
      success: {
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
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          'color': theme('colors.secondary.800'),
          'a': {
            'color': theme('colors.primary.600'),
            '&:hover': {
              color: theme('colors.primary.700'),
            },
          },
          'h1': {
            color: theme('colors.secondary.900'),
            fontWeight: '800',
          },
          'h2': {
            color: theme('colors.secondary.800'),
            fontWeight: '700',
          },
          'h3': {
            color: theme('colors.secondary.800'),
            fontWeight: '600',
          },
          'h4': {
            color: theme('colors.secondary.700'),
            fontWeight: '600',
          },
          'h5': {
            color: theme('colors.secondary.700'),
            fontWeight: '500',
          },
          'h6': {
            color: theme('colors.secondary.700'),
            fontWeight: '500',
          },
          'strong': {
            color: theme('colors.secondary.900'),
          },
          'code': {
            color: theme('colors.secondary.900'),
            backgroundColor: theme('colors.secondary.100'),
            paddingLeft: '4px',
            paddingRight: '4px',
            paddingTop: '2px',
            paddingBottom: '2px',
            borderRadius: '0.25rem',
          },
          'code::before': {
            content: 'none',
          },
          'code::after': {
            content: 'none',
          },
          'blockquote': {
            color: theme('colors.secondary.700'),
            borderLeftColor: theme('colors.secondary.300'),
          },
        },
      },
      dark: {
        css: {
          color: theme('colors.secondary.200'),
          a: {
            'color': theme('colors.primary.400'),
            '&:hover': {
              color: theme('colors.primary.300'),
            },
          },
          h1: {
            color: theme('colors.secondary.100'),
          },
          h2: {
            color: theme('colors.secondary.100'),
          },
          h3: {
            color: theme('colors.secondary.200'),
          },
          h4: {
            color: theme('colors.secondary.200'),
          },
          h5: {
            color: theme('colors.secondary.300'),
          },
          h6: {
            color: theme('colors.secondary.300'),
          },
          strong: {
            color: theme('colors.secondary.100'),
          },
          code: {
            color: theme('colors.secondary.100'),
            backgroundColor: theme('colors.secondary.800'),
          },
          blockquote: {
            color: theme('colors.secondary.300'),
            borderLeftColor: theme('colors.secondary.700'),
          },
        },
      },
    }),
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio'),
];
