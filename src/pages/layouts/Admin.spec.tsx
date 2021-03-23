import {
  render,
} from '@testing-library/react';
import AdminLayout from './Admin'

const makeSut = () => {
  const sut = render(
    <AdminLayout>
      <div
        data-testid="admin-children"
      >
        <p>testing</p>
      </div>
    </AdminLayout>,
  )
  return {
    sut,
  }
}

describe('AdminLayout', () => {
  it('Should render Header component', () => {
    const {
      sut,
    } = makeSut()
    expect(sut.getByTestId('header')).toBeTruthy()
  });

  it('Should render Footer component', () => {
    const {
      sut,
    } = makeSut()
    expect(sut.getByTestId('footer')).toBeTruthy()
  });

  it('Should render children component', () => {
    const {
      sut,
    } = makeSut()
    expect(sut.getByTestId('admin-children').childElementCount).toEqual(1)
  });
});
