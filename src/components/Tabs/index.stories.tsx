import React, { useState } from 'react'
import { ComponentStory } from '@storybook/react'
import Tabs from './index'
import { APPEARANCE } from './constants'

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

export const Default: ComponentStory<typeof Tabs> = () => {
  const [currentOption, setCurrentOption] = useState<string | number>(2)
  const handleChange = (id: string | number | null) => {
    const currentId = id ?? 0
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

export const Secondary: ComponentStory<typeof Tabs> = () => {
  const [currentOption, setCurrentOption] = useState<string | number>(2)
  const handleChange = (id: string | number | null) => {
    const currentId = id ?? 0
    setCurrentOption(currentId)
  }
  return (
    <Tabs
      appearance={APPEARANCE.SECONDARY}
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

export const SecondaryDisabled: ComponentStory<typeof Tabs> = () => {
  const [currentOption, setCurrentOption] = useState<string | number>(2)
  const [disabled] = useState(true)
  const handleChange = (id: string | number | null) => {
    if (disabled) {
      return
    }
    const currentId = id ?? 0
    setCurrentOption(currentId)
  }
  return (
    <Tabs
      appearance={APPEARANCE.SECONDARY}
      disabled={disabled}
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
