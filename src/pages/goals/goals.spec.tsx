import {
  render,
} from '@testing-library/react'
import Goals from './goals';

describe('Goals', () => {
  it('should render AdminLayout', () => {
    const sut = render(<Goals />)
    // expect(sut.getByTestId('admin-layout')).toBeTruthy()
  });
});
