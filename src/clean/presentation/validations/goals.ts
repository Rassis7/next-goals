import * as yup from 'yup'
import { transform } from './helpers/date'

export const goalsValidation = {
  name: yup.string().required('O nome é obrigatório'),
  status: yup.mixed()
    .oneOf(['OPENED', 'CLOSED'], 'O status deve ser Aberto ou Fechado')
    .required('O status é obrigatório'),
  createdAt: yup
    .date()
    .transform(function (value, originalValue: string) {
      if (this.isType(value)) return value;
      return transform(originalValue)
    })
    .required('A data de início deve ser informada.')
    .default(undefined)
    .when(
      'finishAt',
      (finishAt: Date, schema: any) => (
        finishAt
        && schema.max(new Date(finishAt), 'A data inicial não pode ser maior que a final')),
    ),
  finishAt: yup
    .date()
    .transform(function (value, originalValue: string) {
      if (this.isType(value)) return value;
      return transform(originalValue)
    })
    .required('A data de fim deve ser informada.')
    .default(undefined)
    .when(
      'createdAt',
      (createdAt: Date, schema: any) => (
        createdAt
         && schema.min(new Date(createdAt), 'A data final não pode ser menor que a inicial')
      ),
    ),
  description: yup.string(),
  image: yup.string().url(),
  amount: yup
    .number()
    .typeError('Esse campo só aceita números')
    .nullable()
    .default(0),
}
