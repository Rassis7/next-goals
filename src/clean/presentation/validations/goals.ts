import * as yup from 'yup'

export const GoalsValidation = ({
  name: yup.string().required('O nome é obrigatório'),
  status: yup.mixed()
    .oneOf(['OPENED', 'CLOSED'], 'O status deve ser Aberto ou Fechado')
    .required('O status é obrigatório'),
  createdAt: yup.date().required('A data de início deve ser informada.'),
  finishAt: yup.date().required('A data de fim deve ser informada.'),
  description: yup.string(),
  image: yup.string().url(),
  amount: yup.number().min(0, 'O valor não pode ser negativo'),
})
