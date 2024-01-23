import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('pedidos online', () => {
  render(<App />)
  const linkElement = screen.getByText(/Peça já/i)
  expect(linkElement).toBeInTheDocument()
})
