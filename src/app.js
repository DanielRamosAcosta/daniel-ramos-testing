import { Censorer } from "./Censorer";
import { BannedWordsListFileReader } from "./io-utils/BannedWordsListFileReader";
import { CensoredTextWriter } from "./io-utils/CensoredTextWriter";
import { TextFileReader } from "./io-utils/TextFileReader";

const bannedWordsPath = process.argv[3];
const textPath = process.argv[5];
const outputPath = process.argv[7];

const textFileReader = new TextFileReader(textPath);
const bannedWordsListFileReader = new BannedWordsListFileReader(
  bannedWordsPath,
);
const censoredTextWriter = new CensoredTextWriter(outputPath);

const censorer = new Censorer(
  textFileReader,
  bannedWordsListFileReader,
  censoredTextWriter,
);

censorer.censor();
