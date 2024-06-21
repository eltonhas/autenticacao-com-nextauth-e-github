import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      colors: {
        'text-light': '#F6F6F6',
        'text-dark': '#1E1E1E',
        'text-medium': '#5A5A5A',
        'icons-color': '#8B5CF6',
        'line-color': '#BFBFBF',
        'page-background': '#F6F6F6',
        'button-background': '#1E1E1E',
      },
    },
  },
  plugins: [],
}
export default config
