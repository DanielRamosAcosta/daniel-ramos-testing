import { Censorer } from "./Censorer";
import { TextFileReaderFake } from "./io-utils/TextFileReaderFake";
import { CensoredTextWriterFake } from "./io-utils/CensoredTextWriterFake";
import { BannedWordsListFileReaderFake } from "./io-utils/BannedWordsListFileReaderFake";

describe("Censorer", () => {
  let censoredTextWriter;
  let textFileReader;
  let bannedWordsListFileReader;
  let censorer;

  beforeEach(() => {
    textFileReader = new TextFileReaderFake("");
    bannedWordsListFileReader = new BannedWordsListFileReaderFake("");
    censoredTextWriter = new CensoredTextWriterFake();
    censorer = new Censorer(
      textFileReader,
      bannedWordsListFileReader,
      censoredTextWriter,
    );
  });

  it("censors single words", () => {
    const originalText = "You're a nice person and very good";
    const bannedWords = ["nice"];
    textFileReader.setText(originalText);
    bannedWordsListFileReader.setWords(bannedWords);

    censorer.censor();

    expect(censoredTextWriter.censoredText).toEqual(
      "You're a XXXX person and very good",
    );
  });

  it("censors two words", () => {
    const originalText = "You're a nice person and very good";
    const bannedWords = ["nice", "good"];
    textFileReader.setText(originalText);
    bannedWordsListFileReader.setWords(bannedWords);

    censorer.censor();

    expect(censoredTextWriter.censoredText).toEqual(
      "You're a XXXX person and very XXXX",
    );
  });
});
