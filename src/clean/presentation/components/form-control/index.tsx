import { cloneElement } from 'react'
import {
  FormLabel,
  FormControl as FormControlComponent,
  FormErrorMessage,
  FormControlProps,
  FormLabelProps,
  FormHelperText,
} from '@chakra-ui/form-control'
import {
  Control as ControlForm, useController,
} from 'react-hook-form'

type Label = FormLabelProps
type Control = FormControlProps

interface Props {
  children: JSX.Element;
  label?: string;
  name: string;
  helpText?:string;
  labelProps?: Partial<Label>;
  controlProps?: Partial<Control>;
  control?: ControlForm<Record<string, any>>;
  defaultValue?:any
  errorMessage?: string
}

const FormControl = (
  {
    children, label, name, helpText, labelProps, control, controlProps, defaultValue = '', errorMessage,
  }: Props,
) => {
  const { field: {
    ref,
    ...inputProps
  } } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue,
  });

  const newElement = cloneElement(children, {
    ...children.props,
    ref,
    ...inputProps,
  })
  return (
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
      {newElement}
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
      {errorMessage && (
      <FormErrorMessage
        data-testid={`error-${name}`}
      >
        {errorMessage}
      </FormErrorMessage>
      )}
    </FormControlComponent>
  )
}

export default FormControl
