import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          lighter: 'hsl(var(--foreground-lighter))',
          light: 'hsl(var(--foreground-light))',
          dark: 'hsl(var(--foreground-dark))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          accent: 'hsl(var(--secondary-accent))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        danger: {
          DEFAULT: 'hsl(var(--danger))',
          foreground: 'hsl(var(--danger-foreground))',
        },
        warn: {
          DEFAULT: 'hsl(var(--warn))',
          foreground: 'hsl(var(--warn-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          'foreground-dark': 'hsl(var(--muted-foreground-dark))',
          foreground: 'hsl(var(--muted-foreground))',
          'foreground-light': 'hsl(var(--muted-foreground-light))',
          'foreground-lighter': 'hsl(var(--muted-foreground-lighter))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          'foreground-dark': 'hsl(var(--accent-foreground-dark))',
          foreground: 'hsl(var(--accent-foreground))',
          'foreground-light': 'hsl(var(--accent-foreground-light))',
          'foreground-lighter': 'hsl(var(--accent-foreground-lighter))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          'foreground-dark': 'hsl(var(--card-foreground-dark))',
          foreground: 'hsl(var(--card-foreground))',
          'foreground-light': 'hsl(var(--card-foreground-light))',
          'foreground-lighter': 'hsl(var(--card-foreground-lighter))',
        },
        nord: {
          red: 'hsl(var(--nord-red))',
          orange: 'hsl(var(--nord-orange))',
          yellow: 'hsl(var(--nord-yellow))',
          green: 'hsl(var(--nord-green))',
          'blue-green': 'hsl(var(--nord-blue-green))',
          'light-blue': 'hsl(var(--nord-light-blue))',
          blue: 'hsl(var(--nord-blue))',
          'dark-blue': 'hsl(var(--nord-dark-blue))',
          purple: 'hsl(var(--nord-purple))',
        },
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
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 2s infinite ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
