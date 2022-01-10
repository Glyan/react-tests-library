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

    beforeEach (() => {
        console.log("Running before each test!")
    })

    beforeAll (() => {
        console.log("Running once before all tests!")
    })

    afterEach (() => {
        console.log("Running after each test!")
    })

    afterAll (() => {
        console.log("Running once after all tests!")
    })

    test ('should render followers items', async () => {
        render(<MockFollowersList />)
        const followerDivElement = await screen.findByTestId("follower-item-0")
        expect(followerDivElement).toBeInTheDocument();

    })

    /*test ('should render multiple followers item', async () => {
        render(<MockFollowersList />)
        const followerDivElement = await screen.findAllByTestId(/follower-item/i)
        expect(followerDivElement.length).toBe(5);

    })*/

})