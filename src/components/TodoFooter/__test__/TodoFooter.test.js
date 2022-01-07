import { render, screen} from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}

describe ("TodoFooter", () => {
    test ('should render the correct amount of incomplete tasks', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    })
    
    test ('should render "task" when the number of imcomplete tasks is 1', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    })
    
    test ('should be visible', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeVisible();
    })
})
