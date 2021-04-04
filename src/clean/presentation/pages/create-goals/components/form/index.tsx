import {
  useStyleConfig,
  Button,
  Flex,
  Input,
  Textarea,
  Box,
} from '@chakra-ui/react'
import {
  FieldValues, useForm,
} from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormControl from '@/clean/presentation/components/form-control'
import CurrencyInput from '@/clean/presentation/components/currency-input'
import { goalsValidation } from '@/clean/presentation/validations/goals'

const Form = () => {
  const styles = useStyleConfig('GradientButton')

  const {
    name, amount, createdAt, finishAt, description,
  } = goalsValidation
  const {
    control, handleSubmit, errors,
  } = useForm({ resolver: yupResolver(
    yup.object().shape({
      name, amount, createdAt, finishAt, description,
    }, ['createdAt', 'finishAt']),
  ) })

  const onSubmit = (values: FieldValues) => {
    console.log(values)
  }

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >

        <FormControl
          name="name"
          control={control}
          label="Sua meta deve ter um nome, que seja simples e claro"
          labelProps={{ textAlign: 'center' }}
          controlProps={{ isInvalid: errors?.name }}
          errorMessage={errors?.name?.message}
        >
          <Input
            type="text"
          />
        </FormControl>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <Box
            flex={1}
            mr="1.5"
          >
            <FormControl
              name="createdAt"
              control={control}
              label="Toda meta tem um ínicio"
              labelProps={{ textAlign: 'center' }}
              controlProps={{
                mt: '8', isInvalid: errors?.createdAt,
              }}
              helpText="Data de Início"
              errorMessage={errors?.createdAt?.message}
            >
              <Input
                type="date"
                data-testid="createdAt"
              />
            </FormControl>
          </Box>
          <Box
            flex={1}
            ml="1.5"
          >
            <FormControl
              name="finishAt"
              control={control}
              label="...e também um fim"
              labelProps={{ textAlign: 'center' }}
              controlProps={{
                mt: '8', isInvalid: errors?.finishAt,
              }}
              helpText="Data de Fim"
              errorMessage={errors?.finishAt?.message}
            >
              <Input
                type="date"
                data-testid="finishAt"
              />
            </FormControl>
          </Box>
        </Flex>

        <FormControl
          name="description"
          control={control}
          label="É legal colocar uma descrição para sua meta, principalmente se for algo motivador"
          labelProps={{ textAlign: 'center' }}
          controlProps={{
            mt: '8', isInvalid: !!errors.description,
          }}
          errorMessage={errors?.description?.message}
        >
          <Textarea
            rows={5}
          />
        </FormControl>

        <FormControl
          name="amount"
          control={control}
          label="Se sua meta for financeira, coloque aqui o valor dela"
          labelProps={{ textAlign: 'center' }}
          controlProps={{
            mt: '8', isInvalid: errors?.amount,
          }}
          defaultValue={0}
          errorMessage={errors?.amount?.message}
        >
          <CurrencyInput
            data-testid="amount"
          />
        </FormControl>

        <Button
          data-testid="submit"
          type="submit"
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
