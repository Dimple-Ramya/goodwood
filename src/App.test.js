import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/Store';

const renderWithProviders = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <Provider store={Store}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </Provider>
  );
};

test('renders home link', () => {
  renderWithProviders(<App />);
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});

test('navigates to About page', () => {
  renderWithProviders(<App />);
  const aboutPageHeading = screen.getByText(/About/i);
  expect(aboutPageHeading).toBeInTheDocument();
});

// test('navigates to Product page', () => {
//   renderWithProviders(<App />);
//   const productPageHeading = screen.getByText(/Products/i);
//   expect(productPageHeading).toBeInTheDocument();
// });

test('renders all navigation links', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Product/i)).toBeInTheDocument();
});

test('navigation links work correctly', () => {
  renderWithProviders(<App />);

  const homeLink = screen.getByText(/Home/i);
  fireEvent.click(homeLink);
  expect(window.location.pathname).toBe('/');

  const aboutLink = screen.getByText(/About/i);
  fireEvent.click(aboutLink);
  expect(window.location.pathname).toBe('/about');

  const productLink = screen.getByText(/Product/i);
  fireEvent.click(productLink);
  expect(window.location.pathname).toBe('/product');
});
