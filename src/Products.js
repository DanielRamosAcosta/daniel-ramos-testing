export class Products {
  constructor(products) {
    this.products = products;
  }

  getTotalPrice() {
    return this.products
      .map((product) => product.getFinalPrice())
      .reduce((total, current) => total + current, 0);
  }
}
