import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar component', () => {
  it('should render properly with default props', () => {
    const { getByAltText } = render(<Avatar alt="John Doe" src="avatar.jpg" />);
    expect(screen.getByAltText('JD')).toBeInTheDocument();
  });

  it('should render with the correct alt and src props', () => {
    const { getByAltText } = render(<Avatar alt="Jane Doe" src="avatar.jpg" />);
    expect(screen.getByAltText('JD')).toBeInTheDocument();
    expect(screen.getByAltText('Jane Doe')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.getByAltText('John Doe')).not.toBeInTheDocument();

    const { getByRole } = render(<Avatar alt="John Smith" src="avatar.jpg" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'avatar.jpg');
  });

  it('should render with the correct size prop', () => {
    let getByTestId;
    getByTestId = render(<Avatar alt="John Doe" src="avatar.jpg" size="sm" />);
    expect(screen.getByTestId('avatar')).toHaveStyle('width: 40px; height: 40px;');

    getByTestId = render(<Avatar alt="John Doe" src="avatar.jpg" size="md" />);
    expect(screen.getByTestId('avatar')).toHaveStyle('width: 80px; height: 80px;');
  });

  it('should match snapshot', () => {
    const { container } = render(<Avatar alt="John Doe" src="avatar.jpg" />);
    expect(container).toMatchSnapshot();
  });
});