import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { fireEvent, render } from '@testing-library/react'
import { default as GoalsComponent } from '.';
import { Goals as GoalsModel } from '@/clean/domain/models';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({ __esModule: true, useRouter: jest.fn() }))

const makeSut = () => {
  const sut = render(
    <ChakraProvider>
      <GoalsComponent />
    </ChakraProvider>,
  )
  return { sut }
}

describe('Goals', () => {
  it('Should returns default screen if props is empty', async () => {
    const { sut } = makeSut()
    expect(sut.getByTestId('default-screen').hasChildNodes()).toBeTruthy()
  });

  it('Should go to CreateGoals page', async () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementationOnce(() => ({
      push,
    }))
    const { sut } = makeSut()
    const button = sut.getByTestId('go-to-create-goals')
    fireEvent.click(button);
    expect(push).toHaveBeenCalledWith('/goals/create')
  });
});
