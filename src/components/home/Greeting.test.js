import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('Renders the image', () => {
    render(<Greeting />);
    const texto = screen.getByText('Welcome to BardBox', { exact: false });
    expect(texto).toBeInTheDocument;
});