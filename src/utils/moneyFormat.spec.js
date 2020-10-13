import moneyFormat from "./moneyFormat";

// const firstResult = moneyFormat(99.99);
// assertEquals(firstResult, "$99.99");

// const secondResult = moneyFormat(250);
// assertEquals(secondResult, "$250.00");

// const thirdResult = moneyFormat(9500.95);
// assertEquals(thirdResult, "$9,500.95");

describe("moneyFormat", () => {
  it("works with two decimals", () => {
    const result = moneyFormat(99.99);
    expect(result).toEqual("$99.99");
  });
});
