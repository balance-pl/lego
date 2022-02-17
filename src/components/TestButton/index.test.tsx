import { screen } from '@testing-library/react'

// HoC
import { render } from '../../hoc/with-theme'

import TestButton from './index'

test('has a href attribute when rendering with linkWrapper', () => {
  render(<TestButton />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
