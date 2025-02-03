import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';

test('renders movie list', async () => {
    render(<MovieList />);
    const headingElement = await screen.findByText(/Marvel Movie Data Explorer/i);
    expect(headingElement).toBeInTheDocument();
});
