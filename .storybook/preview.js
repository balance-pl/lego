import { useEffect } from 'react'

// Addons
import { withConsole } from '@storybook/addon-console'
;('@storybook/addon-console')

// Constants
import { DESCRIPTION, THEME, THEME_NAME } from './constant'

// Theme
import { ThemeProvider } from '../src/context/theme'

export const globalTypes = {
  theme: {
    name: 'Тема',
    description: DESCRIPTION,
    defaultValue: THEME_NAME.DEFAULT,
    toolbar: {
      icon: 'mirror',
      items: Object.values(THEME_NAME),
      showName: true,
    },
  },
}

const withThemeProvider = (Story, context) => {
  const theme = THEME[context.globals.theme]
  useEffect(() => {
    const headerTheme = window.parent.document.querySelector(
      `button[title="${DESCRIPTION}"]`
    )
    if (headerTheme) {
      headerTheme.childNodes[1].textContent = context.globals.theme
    }
  }, [context.globals.theme])
  return (
    <ThemeProvider value={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}

const withConsoleDecorator = (Story, context) => withConsole()(Story)(context)

export const decorators = [withThemeProvider, withConsoleDecorator]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
