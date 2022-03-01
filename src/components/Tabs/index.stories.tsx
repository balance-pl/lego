import React, { useState } from 'react'
import { ComponentStory } from '@storybook/react'
import Tabs, { Props } from './index'
import { APPEARANCE } from './constants'

export const tabs = (args: Props) => {
  return <Tabs {...args} />
}

tabs.argTypes = {
  className: {
    control: 'text',
    description: 'Кастомный CSS-класс',
  },
  value: {
    control: { type: 'text' },
    description: 'Значение',
    type: {
      summary: 'null',
      defaultValue: 'null',
    },
  },
  options: {
    control: 'object',
    description: 'список опций (табов)',
    table: {
      type: {
        summary: '[{id: string | number, name: string}]',
      },
    },
  },
}

tabs.parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true, exclude: /^onChange*/ },
}

tabs.value = {
  options: [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ],
}

export const Disabled: ComponentStory<typeof Tabs> = () => {
  const [currentOption, setCurrentOption] = useState(2)
  const handleChange = (e: any) => {
    setCurrentOption(e?.target?.value)
  }
  return (
    <>
      Primary:
      <Tabs
        appearance={APPEARANCE.PRIMARY}
        disabled={true}
        options={[
          { id: 1, name: 'Option 1' },
          { id: 2, name: 'Option 2' },
          { id: 3, name: 'Option 3' },
        ]}
        value={currentOption}
        onChange={handleChange}
      />
      <br />
      Secondary:
      <Tabs
        appearance={APPEARANCE.SECONDARY}
        disabled={true}
        options={[
          { id: 1, name: 'Option 1' },
          { id: 2, name: 'Option 2' },
          { id: 3, name: 'Option 3' },
        ]}
        value={currentOption}
        onChange={handleChange}
      />
    </>
  )
}
