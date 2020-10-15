import { RosCalculator } from "./RosCalculator";
import { TotalAmountLoggerFile } from "./TotalAmountLoggerFile";
import { TotalAmountLogger } from "./TotalAmountLogger";
import { RosReader } from "./RosReader";

const rosCalculator = new RosCalculator(
  new RosReader(),
  new TotalAmountLogger(),
);

rosCalculator.calculate();
