import { ReactNode } from 'react'
import {
  FormLabel,
  FormControl as FormControlComponent,
  FormErrorMessage,
  FormControlProps,
  FormLabelProps,
} from '@chakra-ui/form-control'

type Label = FormLabelProps
type Control = FormControlProps

interface Props {
  children: ReactNode;
  label: string;
  name: string;
  labelProps?: Partial<Label>;
  controlProps?: Partial<Control>;
}

const FormControl = ({ children, label, name, labelProps, controlProps }:Props) => (
  <FormControlComponent
    id={`id-${name}`}
    {...controlProps}
  >
    <FormLabel
      htmlFor={`id-${name}`}
      {...labelProps}
    >
      {label}
    </FormLabel>
    {children}
    <FormErrorMessage>
      Campo obrigatório
    </FormErrorMessage>
  </FormControlComponent>
)

export default FormControl
