const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

const colors = require('@primer/primitives/dist/js/colors').default
const typography = require('@primer/primitives/dist/js/typography').default

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          ...colors.dark.scale,
          typography: colors.dark.fg.default
        },
        light: {
          ...colors.light.scale,
          typography: colors.light.fg.default
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.light.typography'),
            a: {
              color: theme('colors.light.gray.4'),
              border: '0',
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: theme('colors.current'),
              transition: 'all .2s ease-in-out',
              '&:hover': {
                color: theme('colors.light.black'),
              },
              code: { color: theme('colors.light.blue.4') }
            },
            'h2,h3,h4': {
              color: theme('colors.light.black'),
              'scroll-margin-top': spacing[32]
            },
            thead: {
              borderBottomColor: theme('colors.light.gray.2')
            },
            code: { color: theme('colors.light.pink.5') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.dark.typography'),
            a: {
              color: theme('colors.dark.gray.4'),
              border: '0',
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: theme('colors.current'),
              transition: 'all .2s ease-in-out',
              '&:hover': {
                color: theme('colors.dark.white'),
              },
              code: { color: theme('colors.dark.blue.4') }
            },
            blockquote: {
              borderLeftColor: theme('colors.dark.gray.7'),
              color: theme('colors.dark.gray.3')
            },
            'h2,h3,h4': {
              color: theme('colors.dark.white'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.dark.gray.7') },
            ol: {
              li: {
                '&:before': { color: theme('colors.dark.gray.5') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.dark.gray.5') }
              }
            },
            strong: { color: theme('colors.dark.gray.1') },
            thead: {
              th: {
                color: theme('colors.gray.100')
              },
              borderBottomColor: theme('colors.dark.gray.6')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.dark.gray.7')
              }
            }
          }
        }
      })
    },
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
