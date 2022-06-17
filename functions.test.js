const functions = require('./functions')

funtions = require('./functions')

test("return Two test", () => {
    expect(functions.returnTwo()).toEqual(2)
})

test("Greetings function test", () => {
    expect(functions.greeting("Kegan")).toBe("Hello Kegan.")
})

test ("Add test", () => {
    expect(functions.add(1,2)).toBe(3)
})