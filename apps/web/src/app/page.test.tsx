import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /AI Research Assistant/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders the research interface', () => {
    render(<Home />);

    const textarea = screen.getByPlaceholderText(
      /What would you like to research/i
    );
    const button = screen.getByRole('button', { name: /Start Research/i });

    expect(textarea).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders feature cards', () => {
    render(<Home />);

    expect(screen.getByText('Multi-Source Search')).toBeInTheDocument();
    expect(screen.getByText('AI Synthesis')).toBeInTheDocument();
    expect(screen.getByText('Mobile Ready')).toBeInTheDocument();
  });
});
