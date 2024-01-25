import { useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components'

type Props = {
  control: any
  name: string
} & Omit<CheckboxProps, 'checked' | 'onValueChange'>
export const ControlledCheckbox = ({ control, name, ...rest }: Props) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <Checkbox {...rest} checked={value} label={'remember me'} onValueChange={onChange} />
}
