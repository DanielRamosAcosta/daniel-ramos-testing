import fs from "fs";

export class CensoredTextWriter {
  constructor(outputPath) {
    this.outputPath = outputPath;
  }

  write(censoredText) {
    fs.writeFileSync(this.outputPath, censoredText);
  }
}
