import { render, screen, fire, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe ("FollowersList", () => {
    test ('should render followers items', async () => {
        render(<MockFollowersList />)
        const followerDivElement = await screen.findByTestId("follower-item-0")
        expect(followerDivElement).toBeInTheDocument();

    })

    test ('should render multiple followers item', async () => {
        render(<MockFollowersList />)
        const followerDivElement = await screen.findAllByTestId(/follower-item/i)
        expect(followerDivElement.length).toBe(5);

    })

})