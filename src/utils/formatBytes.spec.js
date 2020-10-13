import formatBytes from "./formatBytes";

describe("formatBytes", () => {
  it.skip("formats in MBs", () => {
    const result1 = formatBytes(0);
    expect(result1).toEqual("0MB");
  });

  it("formats in MBs", () => {
    const result1 = formatBytes(900);
    expect(result1).toEqual("900MB");
  });

  it("formats in GBs", () => {
    const result2 = formatBytes(2000);
    expect(result2).toEqual("2GB");
  });

  it("formats in TBs", () => {
    const result2 = formatBytes(1000000);
    expect(result2).toEqual("1TB");
  });

  it("formats in all of the previous", () => {
    const result2 = formatBytes(1234567);
    expect(result2).toEqual("1TB 234GB 567MB");
  });

  it.todo("formats in all of the previous");
});
