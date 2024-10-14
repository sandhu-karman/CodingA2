import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('renders Card component', () => {
  render(<Card title="Test Card" content="This is a test card" />);
  const titleElement = screen.getByText(/Test Card/i);
  const contentElement = screen.getByText(/This is a test card/i);
  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});

test('renders with custom background color', () => {
  render(<Card title="Colored Card" content="Custom background" backgroundColor="#f0f0f0" />);
  const cardElement = screen.getByText(/Colored Card/i).parentElement;
  expect(cardElement).toHaveStyle('background-color: #f0f0f0');
});

test('renders with custom width', () => {
  render(<Card title="Wide Card" content="Custom width" width="500px" />);
  const cardElement = screen.getByText(/Wide Card/i).parentElement;
  expect(cardElement).toHaveStyle('width: 500px');
});
