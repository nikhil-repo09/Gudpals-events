import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nature: {
          forest: '#2E7D32',
          olive: '#6B8E23',
          mustard: '#E6B325',
          orange: '#F28C28',
          cream: '#FFF8E7',
          darkText: '#2B2B2B',
          darkBg: '#12180F',
          darkCard: '#1A2316',
          darkBorder: 'rgba(107, 142, 35, 0.25)',
        },
        brand: {
          50: '#f2f8f3',
          100: '#e1f0e4',
          200: '#c3e1c8',
          300: '#97ca9f',
          400: '#64ac70',
          500: '#438f4f',
          600: '#2E7D32', // Forest Green
          700: '#246528',
          800: '#1f5123',
          900: '#1a431e',
          purple: '#2E7D32',
          pink: '#F28C28',
          dark: '#12180F',
          card: '#1A2316',
          border: 'rgba(107, 142, 35, 0.25)'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(46, 125, 50, 0.4)',
        'glow-orange': '0 0 25px -5px rgba(242, 140, 40, 0.4)',
        'glow-purple-sm': '0 0 15px -3px rgba(46, 125, 50, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'earth': '0 10px 30px -5px rgba(46, 125, 50, 0.15)',
      },
      backgroundImage: {
        'gradient-forest': 'linear-gradient(135deg, #2E7D32 0%, #6B8E23 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #E6B325 0%, #F28C28 100%)',
        'gradient-earth': 'linear-gradient(135deg, #2E7D32 0%, #E6B325 50%, #F28C28 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
};
export default config;



