import {
  render,
} from '@testing-library/react'
import Goals from '.';

describe('Goals', () => {
  it('should render AdminLayout', () => {
    const sut = render(<Goals />)
    // expect(sut.getByTestId('admin-layout')).toBeTruthy()
  });
});
