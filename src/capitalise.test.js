import capitalise from "./capitalise"

test("hello should become Hello", () => {
    expect(capitalise("hello")).toBe("Hello")
})

test("HELLO should become Hello", () => {
    expect(capitalise("HELLO")).toBe("Hello")
})

test("hello world should become Hello world", () => {
    expect(capitalise("hello world")).toBe("Hello world")
})

test("null should return error", () => {
    expect(capitalise("")).toBe(Error)
    expect(capitalise()).toBe(Error)
})
test("null should return error", () => {
    expect(capitalise(undefined)).toBe(Error)
})
