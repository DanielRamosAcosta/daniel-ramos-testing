export class Censorer {
  constructor(textFileReader, bannedWordsListFileReader, censoredTextWriter) {
    this.textFileReader = textFileReader;
    this.bannedWordsListFileReader = bannedWordsListFileReader;
    this.censoredTextWriter = censoredTextWriter;
  }

  censor() {
    const text = this.textFileReader.read();
    const bannedWords = this.bannedWordsListFileReader.read();

    let censoredText = text;

    for (const bannedWord of bannedWords) {
      censoredText = censoredText.replace(bannedWord, "XXXX");
    }

    this.censoredTextWriter.write(censoredText);
  }
}
