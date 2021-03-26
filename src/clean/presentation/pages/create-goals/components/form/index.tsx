import {
  useStyleConfig,
  Button,
  Flex,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  FormHelperText,
  Box,
} from '@chakra-ui/react'
import FormControl from '@/clean/presentation/components/form-control'
import { FormatCurrency } from '@/clean/presentation/utils/currency'

const Form = () => {
  const styles = useStyleConfig('GradientButton')

  const InputNumber = () => {
    const value = 1050.9
    const format = (val:number) => FormatCurrency.setValue(val).getBRL().build()
    const parse = (val: string) => val
    return (
      <NumberInput
        onChange={(valueString) => parse(valueString)}
        value={format(value)}
        max={50}
      >
        <NumberInputField />
      </NumberInput>
    )
  }

  return (
    <form
      data-testeid="form"
      action=""
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >

        <FormControl
          name="name"
          label="Sua meta deve ter um nome, que seja simples e claro"
          labelProps={{ textAlign: 'center' }}
          controlProps={{ isRequired: true }}
        >
          <Input
            type="text"
            isInvalid
          />
        </FormControl>

        <FormControl
          name="finishAt"
          label="Toda meta tem um ínicio e fim, defina seus prazos"
          labelProps={{ textAlign: 'center' }}
          controlProps={{ mt: '8', isRequired: true }}
        >
          <Flex
            flexDirection="column"
          >
            <Box>
              <Input
                type="date"
              />
              <FormHelperText>Data de Início</FormHelperText>
            </Box>
            <Box
              mt="1rem"
            >
              <Input
                type="date"
              />
              <FormHelperText>Data de Fim</FormHelperText>
            </Box>
          </Flex>
        </FormControl>

        <FormControl
          name="description"
          label="É legal colocar uma descrição para sua meta, principalmente se for algo motivador"
          labelProps={{ textAlign: 'center' }}
          controlProps={{ mt: '8' }}
        >
          <Textarea
            rows={5}
          />
        </FormControl>

        <FormControl
          name="description"
          label="Se sua meta for financeira, coloque aqui o valor dela"
          labelProps={{ textAlign: 'center' }}
          controlProps={{ mt: '8' }}
        >
          <InputNumber />
        </FormControl>

        <Button
          title="Próximo campo"
          mt="20"
          sx={styles}
        >
          Criar meta
        </Button>
      </Flex>
    </form>
  )
}

export default Form
