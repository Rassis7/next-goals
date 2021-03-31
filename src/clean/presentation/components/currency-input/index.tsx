import MaskedInput from 'react-text-mask'
import { Input, InputProps } from '@chakra-ui/input';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: 'R$',
  suffix: '',
  includeThousandsSeparator: false,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false,
}

const CurrencyInput = (props: InputProps) => {
  const currencyMask = createNumberMask(defaultMaskOptions)
  return (
    <Input
      as={MaskedInput}
      mask={currencyMask}
      {...props}
    />
  )
}

export default CurrencyInput
