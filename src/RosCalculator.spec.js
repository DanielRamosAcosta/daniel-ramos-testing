const { RosCalculator } = require("./RosCalculator");
const { RosReaderFake } = require("./RosReaderFake");
const { TotalAmountLoggerFake } = require("./TotalAmountLoggerFake");

describe("RosCalculator", () => {
  let rosReaderFake;
  let totalAmountLoggerFake;
  let rosCalculator;

  beforeEach(() => {
    rosReaderFake = new RosReaderFake();
    totalAmountLoggerFake = new TotalAmountLoggerFake();
    rosCalculator = new RosCalculator(rosReaderFake, totalAmountLoggerFake);
  });
  it("works with a single row", () => {
    rosReaderFake.setRosFile("bread, 1, 2");

    rosCalculator.calculate();

    expect(totalAmountLoggerFake.totalAmount).toEqual(2);
  });

  it("works with two rows", () => {
    rosReaderFake.setRosFile(`bread, 1, 2
                              tomatoes, 2, 2`);

    rosCalculator.calculate();

    expect(totalAmountLoggerFake.totalAmount).toEqual(6);
  });

  it("works with decimals", () => {
    rosReaderFake.setRosFile(`bread, 2, 2.5`);

    rosCalculator.calculate();

    expect(totalAmountLoggerFake.totalAmount).toEqual(5);
  });
});
