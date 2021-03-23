import { render } from '@testing-library/react';
import Logo from './logo';

const makeSut = () => {
  const sut = render(<Logo />)
  return { sut }
}

describe('Header/Logo', () => {
  it('Should render image in load', async () => {
    const { sut } = makeSut()
    // imagem carrega de forma assíncrona
    expect(await sut.findByTestId('image')).toBeTruthy()
  });

  it('Should render text in load', async () => {
    const { sut } = makeSut()
    // Como a imagem é async, tudo no dom será
    expect(await sut.findByTestId('logo-title')).toBeTruthy()
    expect((await sut.findByTestId('logo-title')).textContent).toBe('Next Goals')
  });
});
