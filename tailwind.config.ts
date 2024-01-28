import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: '#5AD769',
          main: '#324BC3',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#0C0F19',
        },
        background: {
          primary: '#0C0F19',
        },
        primary: '#FDB833',
        primaryFocus: '#FDC43F',
        secondary: '#fd7014',
        tertiary: '#F4D41C',
        grey: '#f2f4f6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
export default config;
