const moneyFormat = require("./moneyFormat");

const firstResult = moneyFormat(99.99);
assertEquals(firstResult, "$99.99");

const secondResult = moneyFormat(250);
assertEquals(secondResult, "$250.00");

const thirdResult = moneyFormat(9500.95);
assertEquals(thirdResult, "$9,500.95");

console.log("All OK");

function assertEquals(result, expectedResult) {
  if (result !== expectedResult) {
    throw new Error(
      `This test is failing: Expected "${expectedResult}", got "${result}"`,
    );
  }
}
