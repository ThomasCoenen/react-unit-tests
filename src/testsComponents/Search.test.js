//render -> allows u to check if certain components rendered correctly
//fireEvent -> checks to see if event after button click is actually happening
import { render, fireEvent } from '@testing-library/react'
import Search from '../components/Search'

//test if seach comp rendered
it('searchRenderCheck', () => {
    const { queryByTitle } = render(<Search />)
    const input = queryByTitle("dummySearch")

    //check to see if button was rendered
    expect(input).toBeTruthy()
})

//test to see if you are correctly writing stuff in the input
describe("changeInput", () => {
    it("onChange", () => {
        const { queryByTitle } = render(<Search />)
        const input = queryByTitle("dummySearch")

        //fireEvent.event_u_are_watching_for. change u want to make is the
        //target and value from it is what u type
        fireEvent.change(input, { target: { value: "testValue" } })

        //what u expect after u type into input
        expect(input.value).toBe("testValue")
    })
})