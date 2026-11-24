/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1630',
          800: '#101F3F',
          700: '#162A52',
        },
        institucional: '#153E75',
        tecnologico: '#2563EB',
        cian: '#22D3EE',
        niebla: '#F1F5F9',
        pizarra: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        suave: '0 12px 40px -18px rgba(11, 22, 48, 0.28)',
        tarjeta: '0 8px 30px -12px rgba(11, 22, 48, 0.18)',
      },
      backgroundImage: {
        'degradado-azul': 'linear-gradient(135deg, #0B1630 0%, #153E75 100%)',
      },
      keyframes: {
        'flotar-suave': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'aparecer': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'flotar-suave': 'flotar-suave 6s ease-in-out infinite',
        'aparecer': 'aparecer 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
