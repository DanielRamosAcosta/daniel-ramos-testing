import fs from "fs";
import { TotalAmountLogger } from "./TotalAmountLogger";

export class TotalAmountLoggerFile extends TotalAmountLogger {
  write(totalAmount) {
    fs.writeFileSync("output.txt", totalAmount.toString());
  }
}
