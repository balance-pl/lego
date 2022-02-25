import React, { useState } from 'react'
import { ComponentStory } from '@storybook/react'
import Tabs from './index'

export const tabs = (args: any) => <Tabs {...args} />

tabs.argTypes = {
  className: {
    control: 'text',
    description: 'Кастомный CSS-класс',
  },
  name: {
    control: 'text',
    description: 'Название группы радиобаттонов',
    isRequired: true,
    defaultValue: 'test',
  },
  value: {
    control: 'text',
    description: 'Значение',
    defaultValue: 'test',
  },
  onChange: { action: 'changed' },
}

tabs.parameters = {
  name: 'test',
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true, exclude: /^on*/ },
}

export const Disabled: ComponentStory<typeof Tabs> = () => {
  const [currentOption, setCurrentOption] = useState(2)
  const handleChange = (e: any) => {
    console.log({ e })
    setCurrentOption(e?.target?.value)
  }
  return (
    <Tabs
      disabled={true}
      options={[
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
      ]}
      value={currentOption}
      onChange={handleChange}
    />
  )
}

export const Checked: ComponentStory<typeof Tabs> = () => (
  <Tabs checked={true} name="checked">
    radio button checked
  </Tabs>
)

export const Default: ComponentStory<typeof Tabs> = () => {
  const [currentOption, setCurrentOption] = useState(0)
  const handleChange = (id: number | string | null) => {
    console.log(id)
    const currentId: number = typeof id === 'string' ? +id : 0
    setCurrentOption(currentId)
  }
  return (
    <Tabs
      options={[
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
      ]}
      value={currentOption}
      onChange={handleChange}
    />
  )
}
