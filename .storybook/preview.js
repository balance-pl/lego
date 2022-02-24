import { ThemeProvider } from '../src/context/theme'

import themeAlfa from '../src/themes/alfa/theme.module.scss'

import theme from '../src/themes/default/theme.module.scss'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      items: ['alfa', 'default'],
      showName: true,
    },
  },
}

const getTheme = (themeName) => {
  switch (themeName) {
    case 'alfa': {
      return themeAlfa
    }
    default:
      return theme
  }
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme)
  return (
    <ThemeProvider value={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
