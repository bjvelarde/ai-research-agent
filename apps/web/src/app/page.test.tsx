import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', {
      name: /🧠 AI Research Agent/i,
    })
    
    expect(heading).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Home />)
    
    const description = screen.getByText(/Your intelligent research assistant/i)
    
    expect(description).toBeInTheDocument()
  })

  it('renders the welcome message', () => {
    render(<Home />)
    
    const welcomeMessage = screen.getByText(/Welcome! The research interface will be built here/i)
    
    expect(welcomeMessage).toBeInTheDocument()
  })
})