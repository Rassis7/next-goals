import {
  cleanup,
  fireEvent, render, RenderResult, waitFor,
} from '@testing-library/react';
import Form from '.';
import faker from 'faker'
import { FormatDate } from '@/clean/presentation/utils/format-date'

const makeSut = () => {
  const sut = render(<Form />)
  return { sut }
}

const testErrorWrapMessage = (sut: RenderResult, name:string, errorMessage: string) => {
  const error = sut.getByTestId(name)
  expect(error.textContent).toBe(errorMessage)
}

const setFieldValue = (sut: RenderResult, name: string, value: string) => {
  const field = sut.getByTestId(name)
  fireEvent.change(field, { target: { value } })
}

const handleSubmitForm = async (sut: RenderResult) => {
  const form = sut.getByTestId('form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

const getStringDate = (date?: Date) => FormatDate.set(date).getENFormat('string').build() as string

describe('CreateGoals/Form', () => {
  afterEach(cleanup)

  it('should render form successfully', () => {
    const { sut } = makeSut()
    expect(sut.getByTestId('form')).toBeTruthy()
  });

  it('Should show error if required fields is empty on submit', async () => {
    const { sut } = makeSut()
    await handleSubmitForm(sut)
    testErrorWrapMessage(sut, 'error-name', 'O nome é obrigatório')
    testErrorWrapMessage(sut, 'error-createdAt', 'A data de início deve ser informada.')
    testErrorWrapMessage(sut, 'error-finishAt', 'A data de fim deve ser informada.')
  })

  it('Should show error if max date if less than min date', async () => {
    const { sut } = makeSut()
    const future = getStringDate(faker.date.future())
    setFieldValue(sut, 'createdAt', future)
    const past = getStringDate(faker.date.past())
    setFieldValue(sut, 'finishAt', past)
    await handleSubmitForm(sut)
    testErrorWrapMessage(sut, 'error-createdAt', 'A data inicial não pode ser maior que a final')
    testErrorWrapMessage(sut, 'error-finishAt', 'A data final não pode ser menor que a inicial')
  })
});
