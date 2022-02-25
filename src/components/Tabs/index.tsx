import React, { MouseEventHandler, useLayoutEffect, useState } from 'react'

import cn from 'classnames'
import PropTypes, { InferProps } from 'prop-types'

// Constants
import { APPEARANCE, SIZE } from './constants'

// Context
import { useTheme } from 'context/theme'

function Tabs(props: tabsProps) {
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
    theme[`${disabled ? 'Tabs_disabled' : ''}`],
    theme[`Tabs_size_${size}`],
    cls
  )

  useLayoutEffect(() => {
    if (options && options?.length !== 0 && !currentOption) {
      const startCurrent = options[0]?.id || null
      if (startCurrent) {
        setCurrentOption(startCurrent)
      }
    }
  }, [currentOption, options])

  const handleChange = (
    id: string | number | null,
    event: MouseEventHandler<HTMLButtonElement>
  ): void => {
    if (disabled) {
      return
    }
    console.log({ id }, { event })
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
          const { id = '', name = '' } = elem
          const isActive = id === value
          return (
            <button
              className={cn(
                theme.Tab,
                theme[`${isActive ? 'Tab_active' : ''}`]
              )}
              id={id?.toString()}
              key={id}
              role="tab"
              tabIndex={index}
              onClick={(event: MouseEventHandler<HTMLButtonElement>): void => {
                handleChange(id, event)
              }}
            >
              {name}
            </button>
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

export type tabsProps = InferProps<typeof Tabs.propTypes> &
  JSX.IntrinsicElements['input'] & {
    [key: string]: any
  }

export default Tabs
