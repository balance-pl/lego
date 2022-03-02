import React from 'react'

import cn from 'classnames'
import PropTypes, { InferProps } from 'prop-types'

// Constants
import { APPEARANCE, SIZE } from './constants'

// Context
import { useTheme } from 'context/theme'

export function Tab(props: Props) {
  const theme = useTheme()

  const {
    appearance,
    checked,
    children,
    disabled,
    name,
    size,
    value,
    ...otherProps
  } = props

  return (
    <label
      className={cn(
        theme.Tab,
        {
          [theme.Tab_checked]: checked,
          [theme.Tab_disabled]: disabled,
        },
        theme[`Tab_appearance_${appearance}`],
        theme[`Tab_size_${size}`]
      )}
      role="tab"
    >
      <input
        {...otherProps}
        checked={checked}
        name={name}
        value={value}
        type="radio"
      />
      {children}
    </label>
  )
}

Tab.propTypes = {
  appearance: PropTypes.oneOf(Object.values(APPEARANCE)),
  checked: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)),
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Tab.defaultProps = {
  appearance: APPEARANCE.PRIMARY,
  checked: false,
  children: null,
  disabled: false,
  size: SIZE.M,
  options: [],
  onChange: () => {},
}

export type Props = InferProps<typeof Tab.propTypes> &
  JSX.IntrinsicElements['input'] & {
    [key: string]: any
  }

export default Tab
