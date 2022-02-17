import { ThemeProvider } from '../src/context/theme'

import theme from '../src/themes/default/theme.module.scss'

export const decorators = [
  (Story) => (
    <ThemeProvider value={theme}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
