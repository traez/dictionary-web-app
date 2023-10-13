import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        autourOne: ['Autour One'],
        trebuchetMs: ['Trebuchet MS'],
        monospace: ['monospace'],
      },
      colors: {
        custom: '#dee759',
        darkpurple: 'hsl(254, 82%, 60%)',
        darkblue: 'hsl(212, 100%, 48%)',
      },
    },
    screens: {
      'sm': '500px',
      'md': '600px',
      'lg': '700px',
      'xl': '800px',
      '2xl': '1000px',
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
