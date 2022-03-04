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
      render(<Tabs name="tabs" />)
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })
    it('-> есть класс Tabs_appearance_primary', () => {
      render(<Tabs name="tabs" />)
      const tabs = screen.getByRole('tablist')
      expect(tabs).toHaveClass('Tabs_appearance_primary')
    })
    it('-> есть класс Tabs_size_m', () => {
      render(<Tabs name="tabs" />)
      const tabs = screen.getByRole('tablist')
      expect(tabs).toHaveClass('Tabs_size_m')
    })
  })
  it('передали disabled -> есть класс disabled', () => {
    const OPTIONS_TEXT = 'Options 1'
    render(
      <Tabs disabled name="tabs" options={[{ id: '1', name: OPTIONS_TEXT }]} />
    )
    const tabs = screen.getByRole('tablist')
    expect(tabs).toHaveClass('Tabs_disabled')
  })
  it('передали options -> отобразиться переданный Tab', () => {
    const OPTIONS_TEXT = 'Options 1'
    render(<Tabs name="tabs" options={[{ id: '1', name: OPTIONS_TEXT }]} />)
    const option = screen.getByRole('tab')
    expect(option).toBeInTheDocument()
    expect(option).toHaveTextContent(OPTIONS_TEXT)
  })
  it('передали appearance -> отобразиться переданный Tab', () => {
    render(<Tabs appearance={APPEARANCE.SECONDARY} name="tabs" />)
    const tabs = screen.getByRole('tablist')
    expect(tabs).toHaveClass('Tabs_appearance_secondary')
  })
  it('передали options, value -> есть класс Tab_checked у выбранного элемента', () => {
    const OPTIONS_TEXT = 'Options 1'
    render(
      <Tabs
        name="tabs"
        options={[{ id: '1', name: OPTIONS_TEXT }]}
        value={'1'}
      />
    )
    const option = screen.getByRole('tab')
    expect(option).toHaveClass('Tab_checked')
  })
  it('передали options, onChange, клик по элементу -> вызыван onChange с параметрами', () => {
    const OPTIONS_TEXT = 'Options 1'
    const OPTION_ID = '1'
    const handleChange = jest.fn()
    render(
      <Tabs
        name="tabs-test"
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
