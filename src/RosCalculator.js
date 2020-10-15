import { Product } from "./Product";
import { Products } from "./Products";

export class RosCalculator {
  constructor(rosReader, totalAmountLogger) {
    this.rosReader = rosReader;
    this.totalAmountLogger = totalAmountLogger;
  }

  calculate() {
    const rosFile = this.rosReader.read();

    const products = this.parse(rosFile);

    const total = products.getTotalPrice();

    this.totalAmountLogger.write(total);
  }

  /**
   *
   * @returns {Products}
   */
  parse(rosFile) {
    const products = rosFile
      .split("\n")
      .map((column) => column.split(","))
      .map((column) => [column[0], Number(column[1]), Number(column[2])])
      .map(([name, amount, price]) => new Product(name, amount, price));
    return new Products(products);
  }
}
