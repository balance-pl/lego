import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import cn from 'classnames'
import PropTypes, { InferProps } from 'prop-types'

// Components
import { Tab } from './Tab'

// Constants
import { APPEARANCE, SIZE } from './constants'

// Context
import { useTheme } from 'context/theme'

function Tabs(props: Props) {
  const {
    appearance,
    className: cls,
    disabled,
    name,
    size,
    options = [],
    value,
    onChange,
    ...otherProps
  } = props

  console.log('render Tabs', value, { options })

  const [currentOption, setCurrentOption] = useState(value)
  const theme = useTheme()

  const className = cn(
    theme.Tabs,
    theme[`Tabs_appearance_${appearance}`],
    { [theme.Tabs_disabled]: disabled },
    theme[`Tabs_size_${size}`],
    cls
  )

  useEffect(() => {
    if (options && options?.length !== 0 && !currentOption) {
      const startCurrent = options[0]?.id || null
      if (startCurrent) {
        setCurrentOption(startCurrent)
      }
    }
  }, [currentOption, options])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (disabled) {
      return
    }
    if (typeof onChange === 'function') {
      onChange(event.target?.value, event)
    }
  }

  return (
    <div {...otherProps} role="tablist" className={className}>
      {options.length !== 0 &&
        options.map((option: Option) => {
          const { id, name: optionName } = option
          const isActive = id === value
          return (
            <Tab
              appearance={appearance}
              checked={isActive}
              disabled={disabled ?? false}
              key={id}
              name={name}
              value={id}
              onChange={handleChange}
            >
              {optionName}
            </Tab>
          )
        })}
    </div>
  )
}

Tabs.propTypes = {
  appearance: PropTypes.oneOf(Object.values(APPEARANCE)),
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.node,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
}

Tabs.defaultProps = {
  appearance: APPEARANCE.PRIMARY,
  disabled: false,
  size: SIZE.M,
  options: [],
  value: null,
  onChange: () => {},
}

type Option = {
  id: string
  name: string
}

export type Props = InferProps<typeof Tabs.propTypes> & {
  options?: Option[]
  onChange?: (id: string | number | null, event: FormEvent) => void
} & {
  [key: string]: any
}

export default Tabs
