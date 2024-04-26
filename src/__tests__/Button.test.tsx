import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Button from '../components/Button';

const buttonTestID = 'button-test';

describe('Renders button component correctly', () => {
  test('Should render component correctly', () => {
    const { getByTestId } = render(<Button>Default</Button>);
    expect(getByTestId(buttonTestID)).toBeInTheDocument();
  });

  test('Should render children correctly', () => {
    const { getByTestId } = render(<Button>Default</Button>);
    expect(getByTestId(buttonTestID)).toHaveTextContent('Default');
  });

  test('Should click correctly', () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(<Button onClick={handleClick}>Default</Button>);
    fireEvent.click(getByTestId(buttonTestID));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Should have a default style correctly', () => {
    const { getByTestId } = render(<Button className="bg-blue">Default</Button>);
    expect(getByTestId(buttonTestID)).toHaveClass('bg-blue');
  });

  test('hidde button component correctly', () => {
    const { getByTestId } = render(<Button className="hidden">Default</Button>);
    expect(getByTestId(buttonTestID)).not.toBeVisible();
  });
});
