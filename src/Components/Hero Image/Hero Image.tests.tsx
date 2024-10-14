import { render, screen } from '@testing-library/react';
import { HeroImage } from './Hero Image';

test('renders HeroImage component', () => {
  render(<HeroImage src="https://via.placeholder.com/800x400" alt="Test Image" />);
  const imgElement = screen.getByAltText(/Test Image/i);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/800x400');
});
