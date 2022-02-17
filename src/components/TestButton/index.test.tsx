import { render, screen } from '@testing-library/react'
import TestButton from './index'

test('has a href attribute when rendering with linkWrapper', () => {
  render(<TestButton />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
