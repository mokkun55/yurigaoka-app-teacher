import { Select } from '@mantine/core'

type Props = {
  label: string
  value: string
  onChange: (_value: string) => void
  placeholder?: string
  data: string[]
  width?: string
}

export const BaseSelect = ({ label, value, onChange, placeholder, data, width, ...props }: Props) => {
  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
      style={{ width }}
      value={value}
      onChange={(newValue) => onChange(newValue ?? '')}
      {...props}
    />
  )
}
