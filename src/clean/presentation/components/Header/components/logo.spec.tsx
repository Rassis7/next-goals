import { render } from '@testing-library/react';
import Logo from './logo';

const makeSut = () => {
  const sut = render(<Logo />)
  return { sut }
}

describe('Header/Logo', () => {
  it('Should render image in load', () => {
    const { sut } = makeSut()
    // imagem carrega de forma assíncrona
    expect(sut.getByTestId('image')).toBeTruthy()
  });

  it('Should render text in load', () => {
    const { sut } = makeSut()
    // Como a imagem é async, tudo no dom será
    expect(sut.getByTestId('logo-title')).toBeTruthy()
    expect((sut.getByTestId('logo-title')).textContent).toBe('Next Goals')
  });
});
