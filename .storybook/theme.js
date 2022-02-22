import { create } from '@storybook/theming'

import packageJSON from '../package.json'

export default create({
  base: 'light',
  brandTitle: 'Компоненты Lego',
  brandUrl: packageJSON.homepage,
  brandImage: '/logo.svg',
})
