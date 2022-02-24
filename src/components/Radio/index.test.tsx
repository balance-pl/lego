import React from 'react'

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// HoC
import { render } from 'hoc/with-theme'

import Radio from './index'
import { Disabled } from './index.stories'

describe('Radio', () => {
  it('Should render Radio', () => {
    render(<Radio name="text" />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByLabelText('')).toBeInTheDocument()
    expect(screen.getByRole('radio')).not.toBeChecked()
  })
  it('Должен отобразиться Radio с классом "radio__style"', () => {
    render(<Radio name="text" className="radio__style" />)
    const label = screen.getByLabelText('')
    expect(label).toBeInTheDocument()
    expect(label?.classList?.contains('radio__style')).toBeTruthy()
  })
  it('Должен отобразиться Radio с методом onChange', async () => {
    const onChange = jest.fn()
    render(<Radio name="text" value="isData" onChange={onChange} />)
    const input = screen.getByRole('radio')
    expect(input).toBeInTheDocument()
    await userEvent.click(input)
    expect(onChange).toBeCalledTimes(1)
    expect(onChange).toBeCalledWith(expect.any(Object))
  })

  it('Должен отобразиться Radio в состоянии disabled', () => {
    render(<Disabled name="locked" />)
    const input = screen.getByRole('radio')
    expect(input).toBeInTheDocument()
    expect(input.hasAttribute('disabled')).toBeTruthy()
  })

  it('Должен отобразиться Radio в состоянии focus', async () => {
    render(<Radio name="size" />)
    const input = screen.getByRole('radio')
    await input.focus()
    expect(input).toHaveFocus()
  })
})
