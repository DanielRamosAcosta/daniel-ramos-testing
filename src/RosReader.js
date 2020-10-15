import fs from "fs";

export class RosReader {
  read() {
    const rosFile = fs.readFileSync("./examples/today.ros", "utf-8");
    return rosFile;
  }
}
