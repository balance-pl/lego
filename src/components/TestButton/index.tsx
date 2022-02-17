import PropTypes, { InferProps } from 'prop-types'
import cn from 'classnames'

// Constants
import { APPEARANCE } from './constants'

// Context
import { useTheme } from 'context/theme'

function TestButton(props: Props) {
  const theme = useTheme()

  const { appearance, children, className: cls, ...otherProps } = props

  const className = cn(
    theme.TestButton,
    theme[`TestButton_appearance_${appearance}`],
    cls
  )

  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  )
}

TestButton.propTypes = {
  appearance: PropTypes.oneOf(Object.values(APPEARANCE)),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  className: PropTypes.string,
}
TestButton.defaultProps = {
  appearance: APPEARANCE.PRIMARY,
}

export type Props = InferProps<typeof TestButton.propTypes> &
  JSX.IntrinsicElements['button'] & {
    [key: string]: any
  }

export default TestButton
