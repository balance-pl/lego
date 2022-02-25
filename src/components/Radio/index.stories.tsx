import React, { ChangeEvent, useState } from 'react'
import Radio from './index'

const BANKS = {
  AB: 'Абсолют Банк',
  ALFA: 'Альфа-Банк',
}

export const basic = (args: any) => {
  return <Radio {...args}>{BANKS.ALFA}</Radio>
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
  },
  value: {
    control: 'text',
    description: 'Значение',
    defaultValue: '',
  },
  onChange: { action: 'changed' },
}

basic.parameters = {
  controls: { expanded: true, exclude: /^on*/ },
}

basic.title = 'components/Radio'

export const Default = () => {
  const [currentValue, setCurrentValue] = useState(BANKS.ALFA)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e?.target?.value)
  }

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <Radio
          name="banks"
          checked={currentValue === BANKS.ALFA}
          value={BANKS.ALFA}
          onChange={handleChange}
        >
          {BANKS.ALFA}
        </Radio>
      </div>
      <Radio
        name="banks"
        checked={currentValue === BANKS.AB}
        value={BANKS.AB}
        onChange={handleChange}
      >
        {BANKS.AB}
      </Radio>
    </>
  )
}

export const Disabled = () => {
  const [currentValue, setCurrentValue] = useState(BANKS.ALFA)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e?.target?.value)
  }

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <Radio
          name="banks"
          checked={currentValue === BANKS.ALFA}
          disabled={true}
          value={BANKS.ALFA}
          onChange={handleChange}
        >
          {BANKS.ALFA}
        </Radio>
      </div>
      <Radio
        name="banks"
        checked={currentValue === BANKS.AB}
        disabled={true}
        value={BANKS.AB}
        onChange={handleChange}
      >
        {BANKS.AB}
      </Radio>
    </>
  )
}
