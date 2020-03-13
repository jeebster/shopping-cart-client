import React from 'react'
import { render } from '@testing-library/react'
import ShoppingCart from '../../src/components/ShoppingCart'

// TODO: Fix tests by mocking React.Context, add component functionality tests
test('renders ShoppingCart component', () => {
  const app = render(<ShoppingCart />)
  expect(app).toMatchSnapshot()
});
