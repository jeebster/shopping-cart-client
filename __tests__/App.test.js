import React from 'react'
import { render } from '@testing-library/react'
import App from '../src/App'

test('renders App component', () => {
  const app = render(<App />)
  expect(app).toMatchSnapshot()
});
