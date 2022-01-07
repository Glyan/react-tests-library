import { render, screen} from '@testing-library/react';
import Header from '../Header';

test ('renders header with given title prop', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
})


