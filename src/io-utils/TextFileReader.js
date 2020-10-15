import fs from "fs";

export class TextFileReader {
  constructor(textPath) {
    this.textPath = textPath;
  }

  read() {
    const text = fs.readFileSync(this.textPath, "utf-8");
    return text;
  }
}
