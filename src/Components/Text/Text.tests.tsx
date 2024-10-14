import { render, screen } from '@testing-library/react';
import { Text } from './Text';

test('renders text component', () => {
  render(<Text content="This is some text" />);
  const textElement = screen.getByText(/This is some text/i);
  expect(textElement).toBeInTheDocument();
});
