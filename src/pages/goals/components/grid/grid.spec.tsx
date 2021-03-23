import { render } from '@testing-library/react';
import Grid from '.';
import * as hooks from '@/clean/presentation/hooks/implementations/window-size'
import { CssSize } from '@/clean/presentation/hooks/types';
import { Goals } from '@/clean/domain/models';

// a outra forma de fazer
// jest.mock('../../../clean/presentation/hooks/window-size', () => ({
//   useWindowSize: () => ({ width: 800, height: 600, cssSize: 'SM' }),
// }));

const makeSut = (cssSize: CssSize = 'SM', goals: Goals[] = []) => {
  jest.spyOn(hooks, 'useWindowSize')
    .mockImplementation(() => ({ width: 800, height: 600, cssSize }));
  const sut = render(
    <Grid
      goals={goals}
    />,
  );
  return { sut }
}

describe('Goals/Components/Grid', () => {
  it('Should returns default screen if props is empty', () => {
    const { sut } = makeSut()
    expect(sut.getByTestId('default-screen')).toBeTruthy()
  });
});

// Cada card tem 17rem: 1rem<->15rem<->1rem
// Should returns 3 cards if screen size if it 800x600
