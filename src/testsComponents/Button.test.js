//render -> allows u to check if certain components rendered correctly
//fireEvent -> checks to see if event after button click is actually happening

import { render, fireEvent } from '@testing-library/react'
import Button from '../components/Button'

//check if button has been correctly rendered
//Use TITLE inside button to grab it
//Method to query certain elements that exist in component by 
//certain properties
it('checkButtonRender', () => {
    const { queryByTitle } = render(<Button />)
    const btn = queryByTitle("dummyButton")

    //check to see if button was rendered
    expect(btn).toBeTruthy()
})

//test to see what happens after button Clicked
//DESCRIBE - describes what event is happening
describe("clickButton", () => {
    it("onClick", () => {
        const { queryByTitle } = render(<Button />)
        const btn = queryByTitle("dummyButton")

        //put what u expect before the button what clicked
        //innerHTML prop to get the text in the button
        expect(btn.innerHTML).toBe("Press Here")

        //fireEvent.event_u_are_watching_for
        fireEvent.click(btn)

        //what u expect after button is clicked
        expect(btn.innerHTML).toBe("You Clicked")
    })
})