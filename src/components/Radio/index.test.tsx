import Radio from './index'

// import { screen } from '@testing-library/react'

// HoC
import { render } from 'hoc/with-theme'
import React from 'react'

describe('Radio', () => {
  it('Рендер Radio', () => {
    render(<Radio />)
  })
})
