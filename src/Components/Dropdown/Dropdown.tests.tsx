import { fireEvent, render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

test('renders Dropdown component', () => {
  render(
    <Dropdown
      label="Test Dropdown"
      options={['Option 1', 'Option 2', 'Option 3']}
      onSelect={() => {}}
    />
  );
  const labelElement = screen.getByText(/Test Dropdown/i);
  expect(labelElement).toBeInTheDocument();
});

test('calls onSelect when option is selected', () => {
  const handleSelect = jest.fn();
  render(
    <Dropdown
      label="Test Dropdown"
      options={['Option 1', 'Option 2', 'Option 3']}
      onSelect={handleSelect}
    />
  );
  const selectElement = screen.getByRole('combobox');
  fireEvent.change(selectElement, { target: { value: 'Option 2' } });
  expect(handleSelect).toHaveBeenCalledWith('Option 2');
});

test('renders options correctly', () => {
  render(
    <Dropdown
      label="Test Dropdown"
      options={['Option 1', 'Option 2', 'Option 3']}
      onSelect={() => {}}
    />
  );
  const optionElements = screen.getAllByRole('option');
  expect(optionElements).toHaveLength(3);
  expect(optionElements[0]).toHaveTextContent('Option 1');
  expect(optionElements[1]).toHaveTextContent('Option 2');
  expect(optionElements[2]).toHaveTextContent('Option 3');
});
