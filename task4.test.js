const capitalize = require("./task4");

test("check if capital", () => {
    expect(capitalize("string")).toBe("String");
})