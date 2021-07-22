//to run test files:
//npm test

import { formatCity, multiply, makeLowerCase } from '../Helpers/HelperFunctions';

//test tests out if functions are working
test("multiply", () => {
    //run functionalities of the test here
    expect(multiply(2, 10)).toBe(20)
    expect(multiply(-2, 5)).toBe(-10)
})

test("makeLowerCase", () => {
    expect(makeLowerCase("THOMas")).toBe("thomas")
    expect(makeLowerCase("dBnSD")).toBe("dbnsd")
})