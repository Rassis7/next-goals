import MaskedInput from 'react-text-mask'
import { Input, InputProps } from '@chakra-ui/input';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { forwardRef } from '@chakra-ui/system';

const defaultMaskOptions = {
  prefix: '',
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

const CurrencyInput = (props: InputProps, ref:any) => {
  const currencyMask = createNumberMask(defaultMaskOptions)
  return (
    <Input
      ref={ref}
      as={MaskedInput}
      mask={currencyMask}
      {...props}
    />
  )
}

export default forwardRef(CurrencyInput)
