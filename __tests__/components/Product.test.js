import React from 'react'
import { render } from '@testing-library/react'
import Product from '../../src/components/Productuct'

// TODO: Fix tests by mocking React.Context, add component functionality tests
test('renders Product component', () => {
  const app = render(<Product />)
  expect(app).toMatchSnapshot()
});
