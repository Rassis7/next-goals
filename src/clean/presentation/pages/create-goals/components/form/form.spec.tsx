import {
  cleanup,
  fireEvent, render, waitFor,
} from '@testing-library/react';
import Form from '.';
import faker from 'faker'

const makeSut = () => {
  const sut = render(<Form />)
  return { sut }
}

describe('CreateGoals/Form', () => {
  afterEach(cleanup)

  it('should render form successfully', () => {
    const { sut } = makeSut()
    expect(sut.getByTestId('form')).toBeTruthy()
  });

  it('Should show error if required fields is empty on submit', async () => {
    const { sut } = makeSut()
    const form = sut.getByTestId('form')
    fireEvent.submit(form)
    await waitFor(() => form)
    const name = sut.getByTestId('error-name')
    expect(name.textContent).toBe('O nome é obrigatório')
    const createdAt = sut.getByTestId('error-createdAt')
    expect(createdAt.textContent).toBe('A data de início deve ser informada.')
    const finishAt = sut.getByTestId('error-finishAt')
    expect(finishAt.textContent).toBe('A data de fim deve ser informada.')
  })

  it('Should show error if max date if less than min date', async () => {
    const { sut } = makeSut()
    const createdAt = sut.getByTestId('createdAt')
    const createdAtFaker = '2021-01-10'
    fireEvent.change(createdAt, { target: { value: createdAtFaker } })
    const finishAt = sut.getByTestId('finishAt')
    const finishAtFaker = '2021-01-01'
    fireEvent.change(finishAt, { target: { value: finishAtFaker } })
    const form = sut.getByTestId('form')
    fireEvent.submit(form)
    await waitFor(() => form)
    expect(sut.getByTestId('error-createdAt').textContent)
      .toBe('A data inicial não pode ser maior que a final')
  })
});
