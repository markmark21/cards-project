import { useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components'

type Props = {
  control: any
  name: string
} & CheckboxProps
export const ControlledCheckbox = ({ control, name, ...rest }: Props) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <Checkbox checked={value} label={name} onValueChange={onChange} {...rest} />
}
