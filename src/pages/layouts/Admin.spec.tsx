import { render } from '@testing-library/react';
import AdminLayout from './Admin'

const makeSut = () => {
  const sut = render(<AdminLayout><><div /></></AdminLayout>)
  return { sut }
}

describe('AdminLayout', () => {
  it('Should render Header component', () => {
    const { sut } = makeSut()
    expect(sut.getByTestId('header')).toBeTruthy()
  });
  it('Should render Footer component', () => {
    const { sut } = makeSut()
    expect(sut.getByTestId('footer')).toBeTruthy()
  });
});
