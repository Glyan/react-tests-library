import { render, screen} from '@testing-library/react';
import Header from '../Header';

test ('renders header with given title prop', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
})

//This one fails because there are two headers with the role heading
/* 
test ('renders header with heading role', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
})
*/

test ('renders header with given title prop and heading role', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading", { name : "My Header"});
    expect(headingElement).toBeInTheDocument();
})

test ('renders header with given title prop - findByText', async () => {
    render(<Header title="My Header"/>);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
})

test ('renders header with given title prop - queryByText', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
})

test ('renders two headers with role heading', async () => {
    render(<Header title="My Header"/>);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
})
