import React from 'react'
import { render } from '@testing-library/react'
import ProductsList from '../../src/components/ProductsList'

// TODO: Fix tests by mocking React.Context, add component functionality tests
test('renders ProductsList component', () => {
  const app = render(<ProductsList />)
  expect(app).toMatchSnapshot()
});
