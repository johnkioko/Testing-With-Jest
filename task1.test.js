const stringLength = require("./task1");

test("counts the characters of a string", () => {
  expect(stringLength("string")).toBe(6);
});

test("check string length to be >= 1", () => {
  expect(stringLength("string")).toBeGreaterThanOrEqual(1);
});

test("check string length to be <= 10", () => {
  expect(stringLength("string")).toBeLessThanOrEqual(10);
});
