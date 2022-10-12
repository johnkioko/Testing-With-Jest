const reverseString = require("./task2");

test("hello should return elloh", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
