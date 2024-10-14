import { fireEvent, render, screen } from '@testing-library/react';
import { RadioButton } from './Radio Button';

test('renders RadioButton component', () => {
  const handleChange = jest.fn();
  render(<RadioButton label="Test Option" name="test" value="option" onChange={handleChange} />);
  
  const radio = screen.getByLabelText(/Test Option/i);
  expect(radio).toBeInTheDocument();
  
  fireEvent.click(radio);
  expect(handleChange).toHaveBeenCalled();
});
