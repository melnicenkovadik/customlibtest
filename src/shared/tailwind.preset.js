/*
  This file is shared globally among all consumers.
  Please include only universally used classes and modifications here.
  For modifications specific to Storybook, please use the tailwind.config.js file located in the root directory.
*/
export default {
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'unicorn-gradient':
          'linear-gradient(90deg, #b732f5 0%, #ff85e3 50%, #65edff 100%)',
        'gd-light-xs':
          'linear-gradient(131deg, rgba(var(--ui-accent-500), 0.06) 1.52%, rgba(var(--ui-accent-500), 0.02) 176.7%)',
        'gd-dark-xs':
          'linear-gradient(131deg, rgba(var(--ui-accent-500), 0.08) 1.52%, rgba(var(--ui-accent-500), 0.06) 27.91%, rgba(var(--ui-accent-500), 0.01) 176.7%)',
        'banner-stroke':
          'linear-gradient(2deg, rgba(var(--ui-accent-500), 0.04) 2.09%, rgba(var(--ui-accent-500), 0.28) 138.39%)',
        'hover-stroke':
          'linear-gradient(9deg, rgba(var(--ui-accent-500), 0.20) 39.49%, rgb(var(--ui-accent-500)) 126.35%)',
      },
      colors: {
        'ui-accent': {
          400: 'rgb(var(--ui-accent-400))',
          500: 'rgb(var(--ui-accent-500))',
          600: 'rgb(var(--ui-accent-600))',
          '500-50': 'rgba(var(--ui-accent-500), 0.5)',
          '500-40': 'rgba(var(--ui-accent-500), 0.4)',
          '500-20': 'rgba(var(--ui-accent-500), 0.2)',
        },
        neutral: {
          10: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#6B6B6D',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          1000: '#0A0A0A',
        },
        brand: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
        },
        blue: {
          50: '#E5F4FF',
          100: '#C4DDF2',
          200: '#A6C4E8',
          300: '#8DAFE2',
          400: '#6F96CE',
          500: '#4F82DB',
          600: '#2F62C6',
          700: '#1C49AF',
          800: '#1E3268',
          900: '#13234C',
          950: '#081530',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },
        warning: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
          950: '#422006',
        },
        purple: {
          50: '#F9EBFF',
          100: '#F1D6FD',
          200: '#E2ADFB',
          300: '#D484F9',
          400: '#C55BF7',
          500: '#B732F5',
          600: '#9228C4',
          700: '#6E1E93',
          800: '#491462',
          900: '#250A31',
          950: '#1A0423',
        },
        pink: {
          500: '#FF44D4',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'theme-primary': {
          DEFAULT: 'var(--theme-primary)',
          text: 'var(--theme-primary-text)',
          hover: 'var(--theme-primary-hover)',
          active: 'var(--theme-primary-active)',
          focus: 'var(--theme-primary-focus)',
          'outline-hover': 'var(--theme-primary-outline-hover)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          text: 'var(--primary-text)',
          hover: 'var(--primary-hover)',
          active: 'var(--primary-active)',
          focus: 'var(--primary-focus)',
          badge: 'var(--primary-badge)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          text: 'var(--secondary-text)',
          hover: 'var(--secondary-hover)',
          focus: 'var(--secondary-focus)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          text: 'var(--destructive-text)',
          hover: 'var(--destructive-hover)',
          active: 'var(--destructive-active)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          text: 'var(--muted-text)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          text: 'var(--accent-text)',
          active: 'var(--accent-active)',
        },
        border: {
          DEFAULT: 'var(--border)',
          'border-hover': 'var(--border-hover)',
        },
        input: 'var(--input)',
        ring: 'var(--ring)',
        ghost: 'var(--ghost)',
        invert: 'var(--invert)',
        'dialog-overlay': 'rgba(23, 23, 23, 0.50)',
        'card-secondary-text': 'var(--card-secondary-text)',
        'card-opacity-background': 'var(--card-opacity-background)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
      fontSize: {
        '2xs': '0.7rem',
        '3xs': '0.625rem',
        '4xs': '0.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
