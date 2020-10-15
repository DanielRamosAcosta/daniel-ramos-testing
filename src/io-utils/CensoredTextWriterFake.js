import { CensoredTextWriter } from "./CensoredTextWriter";

export class CensoredTextWriterFake extends CensoredTextWriter {
  write(censoredText) {
    this.censoredText = censoredText;
  }
}
