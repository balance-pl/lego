import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

import cn from 'classnames'
import PropTypes, { InferProps } from 'prop-types'

// Constants
import { APPEARANCE, SIZE } from './constants'

// Context
import { useTheme } from 'context/theme'

function Tabs(props: Props) {
  const {
    appearance,
    className: cls,
    disabled,
    size,
    options,
    value,
    onChange,
  } = props

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

  const handleChange = (
    id: string | number | null,
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    if (disabled) {
      return
    }
    if (typeof onChange === 'function') {
      onChange(id, event)
    }
  }

  return (
    <div role="tablist" className={className}>
      {options?.length !== 0 &&
        options?.map((elem, index) => {
          if (!elem) {
            return null
          }
          console.log({ elem })
          const { id = '', name = '' } = elem
          const isActive = id?.toString() === value?.toString()
          return (
            <label
              className={cn(theme.Tab, {
                [theme.Tab_active]: isActive,
              })}
              key={id}
              role="tab"
            >
              <input
                className={theme.Tab__radio}
                type="radio"
                id={id?.toString()}
                role="tab"
                tabIndex={index}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                  handleChange(id, event)
                }}
              />
              {name}
            </label>
          )
        })}
    </div>
  )
}

Tabs.propTypes = {
  appearance: PropTypes.oneOf(Object.values(APPEARANCE)),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZE)),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.node,
    })
  ),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
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

export type Props = InferProps<typeof Tabs.propTypes> & {
  onChange?: (
    id: string | number | null,
    event: MouseEvent<HTMLInputElement>
  ) => void
} & {
  [key: string]: any
}

export default Tabs
