import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
import Filter from './Filter';

test('renders Show All button', () => {
  render(<Filter />);
  const linkElement = screen.getByText(/Show All/i);
  expect(linkElement).toBeInTheDocument();
});

test('should click on all button', () => {
  render(<Filter />);

  const all = screen.getByTestId(`show-all`);

});
