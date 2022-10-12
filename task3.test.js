const Calculator = require("./task3");

describe("Calculator", () => {
  const cal = new Calculator(4, 2);
  test("number1 + number2 to equal 6", () => {
    expect(cal.add()).toBe(6);
  });

  test("number1 - number2 to equal 2", () => {
    expect(cal.subtract()).toBe(2);
  });

  test(" number1 * number2 equal 8", () => {
    expect(cal.multiply()).toBe(8);
  });

  test(" number1 / number2 equal 2", () => {
    expect(cal.divide()).toBe(2);
  });
});
