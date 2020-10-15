export class Product {
  constructor(name, amount, price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  getFinalPrice() {
    return this.amount * this.price;
  }
}
