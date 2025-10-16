import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

// Mock the Inter font
vi.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'mock-inter-font',
    style: { fontFamily: 'mock-inter' },
  }),
}));

describe('Root Layout', () => {
  it('renders children correctly', () => {
    const TestChild = () => <div data-testid="test-child">Test Child</div>;

    render(
      <RootLayout>
        <TestChild />
      </RootLayout>
    );

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
