import fs from "fs";

export class BannedWordsListFileReader {
  constructor(bannedWordsPath) {
    this.bannedWordsPath = bannedWordsPath;
  }

  read() {
    const bannedWordsFile = fs.readFileSync(this.bannedWordsPath, "utf-8");
    const bannedWords = bannedWordsFile.trim().split("\n");
    return bannedWords;
  }
}
