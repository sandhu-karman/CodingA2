import { render, screen } from '@testing-library/react';
import Button from './Button';


test('renders button component', () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
});

test('disables button when disabled prop is true', () => {
    render(<Button label="Cannot Click" disabled />);
    const buttonElement = screen.getByText(/Cannot Click/i);
    expect(buttonElement).toBeDisabled();
});
