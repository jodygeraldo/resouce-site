/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: {
          1: 'var(--slate1)',
          2: 'var(--slate2)',
          3: 'var(--slate3)',
          4: 'var(--slate4)',
          5: 'var(--slate5)',
          6: 'var(--slate6)',
          7: 'var(--slate7)',
          8: 'var(--slate8)',
          9: 'var(--slate9)',
          10: 'var(--slate10)',
          11: 'var(--slate11)',
          12: 'var(--slate12)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
