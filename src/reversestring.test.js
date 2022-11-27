import { reverseString } from "./reversestring"

test("reverse string", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh")
})

test("reverse string regardles of capitals", () => {
    expect(reverseString("helLo woRld")).toBe("dlRow oLleh")
})

test("throw error if null", () => {
    expect(reverseString("")).toBe(Error)
})

test("throw error if undefined", () => {
    expect(reverseString(undefined)).toBe(Error)
})
