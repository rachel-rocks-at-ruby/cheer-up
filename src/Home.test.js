import { render, screen } from '@testing-library/react';
import Animal from './Animal';
import Home from './Home';
import Other from './Other';
import { BrowserRouter as Router } from "react-router-dom";

test('renders app heading', () => {
  render(<Router><Home /></Router>);
  expect(screen.getByRole('heading')).toHaveTextContent('The Cheer Up App')
});
