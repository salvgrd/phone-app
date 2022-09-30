import { afterEach, describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  afterEach(cleanup);

  it('Should render', () => {
    render(<Header location="/" count={0} />);
  });

  it('Should display app name', () => {
    render(<Header location="/" count={0} />);

    screen.getByText('Phone App!');
  });

  it('Should display product count', () => {
    render(<Header location="/" count={0} />);

    screen.getByText('Product count: 0');
  });

  it('Should display Home location', () => {
    render(<Header location="/" count={0} />);

    screen.getByText('Home');
  });
});
