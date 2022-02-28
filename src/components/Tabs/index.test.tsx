import React from 'react'

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// HoC
import { render } from 'hoc/with-theme'

import Tabs from './index'
import { APPEARANCE } from './constants'

describe('Tabs', () => {
  describe('Ничего не передали', () => {
    it('-> должен отобразиться Tabs', () => {
      render(<Tabs />)
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })
    it('-> есть класс Tabs_appearance_primary', () => {
      render(<Tabs />)
      const tabs = screen.getByRole('tablist')
      expect(tabs).toHaveClass('Tabs_appearance_primary')
    })
    it('-> есть класс Tabs_size_m', () => {
      render(<Tabs />)
      const tabs = screen.getByRole('tablist')
      expect(tabs).toHaveClass('Tabs_size_m')
    })
  })
  it('передали disabled -> есть класс disabled', () => {
    const OPTIONS_TEXT = 'Options 1'
    render(<Tabs disabled options={[{ id: 1, name: OPTIONS_TEXT }]} />)
    const tabs = screen.getByRole('tablist')
    expect(tabs).toHaveClass('Tabs_disabled')
  })
  it('передали options -> отобразиться переданный Tab', () => {
    const OPTIONS_TEXT = 'Options 1'
    render(<Tabs options={[{ id: 1, name: OPTIONS_TEXT }]} />)
    const option = screen.getByRole('tab')
    expect(option).toBeInTheDocument()
    expect(option).toHaveTextContent(OPTIONS_TEXT)
  })
  it('передали appearance -> отобразиться переданный Tab', () => {
    render(<Tabs appearance={APPEARANCE.SECONDARY} />)
    const tabs = screen.getByRole('tablist')
    expect(tabs).toHaveClass('Tabs_appearance_secondary')
  })
  it('передали options, value -> есть класс Tab_active у выбранного элемента', () => {
    const OPTIONS_TEXT = 'Options 1'
    render(<Tabs options={[{ id: 1, name: OPTIONS_TEXT }]} value={1} />)
    const option = screen.getByRole('tab')
    expect(option).toHaveClass('Tab_active')
  })
  it('передали options, onChange, клик по элементу -> вызыван onChange с параметрами', () => {
    const OPTIONS_TEXT = 'Options 1'
    const OPTION_ID = 1
    const handleChange = jest.fn()
    render(
      <Tabs
        options={[{ id: OPTION_ID, name: OPTIONS_TEXT }]}
        onChange={handleChange}
      />
    )
    const option = screen.getByRole('tab')
    userEvent.click(option)
    expect(handleChange).toBeCalledWith(OPTION_ID, expect.any(Object))
    expect(handleChange).toBeCalledTimes(1)
  })
})
