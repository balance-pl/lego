import React from 'react'
import { ComponentStory } from '@storybook/react'
import Radio from './index'

export const basic = (args: any) => {
  const { children } = args
  return (
    <Radio {...args} name={'name'}>
      {children || 'Children for Radio'}
    </Radio>
  )
}

basic.argTypes = {
  checked: {
    control: 'boolean',
    description: '"checked" состояние',
    defaultValue: false,
  },
  children: {
    control: { type: 'text' },
    description: 'Содержимое radio (текст)',
  },
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

basic.parameters = {
  name: 'test',
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true, exclude: /^on*/ },
}

export const Disabled: ComponentStory<typeof Radio> = () => (
  <Radio disabled name="locked">
    radio button locked
  </Radio>
)

export const Checked: ComponentStory<typeof Radio> = () => (
  <Radio checked={true} name="checked">
    radio button checked
  </Radio>
)

export const Default: ComponentStory<typeof Radio> = () => (
  <Radio name="default">radio default</Radio>
)
