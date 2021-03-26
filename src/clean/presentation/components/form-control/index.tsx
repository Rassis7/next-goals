import { ReactNode } from 'react'
import {
  FormLabel,
  FormControl as FormControlComponent,
  FormErrorMessage,
  FormControlProps,
  FormLabelProps,
  FormHelperText,
} from '@chakra-ui/form-control'

type Label = FormLabelProps
type Control = FormControlProps

interface Props {
  children: ReactNode;
  label: string;
  name: string;
  helpText?:string;
  labelProps?: Partial<Label>;
  controlProps?: Partial<Control>;
}

const FormControl = ({ children, label, name, helpText, labelProps, controlProps }:Props) => (
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
    {helpText && <FormHelperText>{helpText}</FormHelperText>}
    <FormErrorMessage>
      Campo obrigatório
    </FormErrorMessage>
  </FormControlComponent>
)

export default FormControl
