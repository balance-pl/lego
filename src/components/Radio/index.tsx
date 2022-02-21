import React, { ChangeEvent } from 'react'

import cn from 'classnames'
import PropTypes, { InferProps } from 'prop-types'

// Context
import { useTheme } from 'context/theme'

function Radio(props: radioProps) {
  const {
    children,
    className: cls,
    checked,
    disabled,
    name,
    value,
    ...otherProps
  } = props

  const theme = useTheme()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!disabled) {
      const { onChange } = otherProps
      if (typeof onChange === 'function') {
        onChange(e)
      }
    }
  }

  const className = cn(theme.Radio, cls)

  const labelClassName = cn(
    theme.Radio__Label,
    theme[`Radio__Label${checked ? '_checked' : ''}`],
    theme[`Radio__Label${disabled ? '_disabled' : ''}`]
  )

  return (
    <label className={labelClassName}>
      <input
        {...otherProps}
        checked={checked}
        className={className}
        disabled={disabled}
        name={name}
        type="radio"
        value={value}
        onChange={handleChange}
      />
      {children}
    </label>
  )
}

Radio.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
}
Radio.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  value: '',
  onChange: () => {},
}

export type radioProps = InferProps<typeof Radio.propTypes> &
  JSX.IntrinsicElements['input'] & {
    [key: string]: any
  }

export default Radio
