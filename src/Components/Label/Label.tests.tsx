import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test('renders label component', () => {
  render(<Label text="Test Label" />);
  const labelElement = screen.getByText(/Test Label/i);
  expect(labelElement).toBeInTheDocument();
});

test('renders with custom size', () => {
  render(<Label text="Large Label" size="large" />);
  const labelElement = screen.getByText(/Large Label/i);
  expect(labelElement).toHaveStyle('font-size: 24px');
});

test('renders with custom color', () => {
  render(<Label text="Colored Label" color="#ff6347" />);
  const labelElement = screen.getByText(/Colored Label/i);
  expect(labelElement).toHaveStyle('color: #ff6347');
});
