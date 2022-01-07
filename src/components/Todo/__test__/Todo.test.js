import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name : /Add/i })
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: {value: task} })
        fireEvent.click(buttonElement);
    });
        
}

describe ("Todo", () => {
    test ('should render tasks passed in todo list', async () => {
        render(<MockTodo />)
        addTask(["Go grocery shopping"])

        const divElement = screen.getByText(/Go grocery shopping/i)
        expect(divElement).toBeInTheDocument();

    })

    test ('should render 3 tasks in todo list', async () => {
        render(<MockTodo />)
        addTask(["Go grocery shopping", "Pet my cat", "Wash my hands"])

        const divElement = screen.getAllByTestId("task-container")
        expect(divElement.length).toBe(3);

    })

    test ('task should not have completed class when initially rendered', async () => {
        render(<MockTodo />)
        addTask(["Go grocery shopping"])

        const divElement = screen.getByText(/Go grocery shopping/i)
        expect(divElement).not.toHaveClass("todo-item-active")
    })

    test ('task should have completed class when clicked', async () => {
        render(<MockTodo />)
        addTask(["Go grocery shopping"])

        const divElement = screen.getByText(/Go grocery shopping/i)
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active")
    })
})