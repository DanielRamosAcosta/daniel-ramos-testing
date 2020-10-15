import { RosReader } from "./RosReader";

export class RosReaderFake extends RosReader {
  setRosFile(rosFile) {
    this.rosFile = rosFile;
  }

  read() {
    return this.rosFile;
  }
}
