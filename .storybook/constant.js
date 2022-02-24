import themeAlfa from '../src/themes/alfa/theme.module.scss'
import theme from '../src/themes/default/theme.module.scss'

export const THEME_NAME = {
  ALFA: 'Альфа',
  DEFAULT: 'По-умолчанию',
}

export const THEME = {
  [THEME_NAME.ALFA]: themeAlfa,
  [THEME_NAME.DEFAULT]: theme,
}

export const DESCRIPTION = 'Выбор темы для компонент'
