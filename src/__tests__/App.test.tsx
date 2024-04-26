import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../App';

describe('Renders main page correctly', () => {
  test('Should render the page correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText("Hey, it's working")).toBeInTheDocument();
  });
});
