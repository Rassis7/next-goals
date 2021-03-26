import {
  useStyleConfig,
  Button,
  Flex,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react'
import { default as FormControlComponent } from '@/clean/presentation/components/form'

const Form = () => {
  const styles = useStyleConfig('GradientButton')
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

        <FormControlComponent
          name="name"
          label="Sua meta deve ter um nome, que seja simples e claro"
          labelProps={{ textAlign: 'center' }}
        >
          <Input
            type="text"
            isInvalid
          />
        </FormControlComponent>

        <FormControlComponent
          name="finishAt"
          label="Toda meta tem um ínicio e fim, defina seus prazos"
          labelProps={{ textAlign: 'center' }}
          controlProps={{ mt: '8' }}
        >
          <Flex>
            <Input
              type="date"
            />
            <Input
              type="date"
            />
          </Flex>
        </FormControlComponent>

        <FormControlComponent
          name="description"
          label="É legal colocar uma descrição para sua meta, principalmente se for algo motivador"
          labelProps={{ textAlign: 'center' }}
          controlProps={{ mt: '8' }}
        >
          <Textarea
            rows={5}
          />
        </FormControlComponent>

        <FormControlComponent
          name="description"
          label="Se sua meta for financeira, coloque aqui o valor dela"
          labelProps={{ textAlign: 'center' }}
          controlProps={{ mt: '8' }}
        >
          <NumberInput
        // onChange={(valueString) => setValue(parse(valueString))}
        // value={format(value)}
            max={50}
          >
            <NumberInputField />
          </NumberInput>
        </FormControlComponent>

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
