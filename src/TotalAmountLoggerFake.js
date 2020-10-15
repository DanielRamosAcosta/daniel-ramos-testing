import { TotalAmountLogger } from "./TotalAmountLogger";

export class TotalAmountLoggerFake extends TotalAmountLogger {
  write(totalAmount) {
    this.totalAmount = totalAmount;
  }
}
