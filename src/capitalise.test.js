import capitalise from "./capitalise"

test("hello should become Hello", () => {
    expect(capitalise("hello")).toBe("Hello")
})

test("HELLO should become Hello", () => {
    expect(capitalise("HELLO")).toBe("Hello")
})
