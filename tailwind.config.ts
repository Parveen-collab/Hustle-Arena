import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#0066ff',
        'neon-green': '#00ff88',
        'jet-black': '#0a0e27',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(50px, 50px) scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 102, 255, 0.3), 0 0 40px rgba(0, 255, 136, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 102, 255, 0.6), 0 0 80px rgba(0, 255, 136, 0.4)',
          },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
        float: 'float 6s ease-in-out infinite',
        'slide-right': 'slideInRight 0.8s ease-out',
        'slide-left': 'slideInLeft 0.8s ease-out',
        glow: 'glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
