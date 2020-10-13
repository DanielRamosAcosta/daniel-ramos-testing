const formatBytes = require("./formatBytes");

assertEquals(formatBytes(0), "");
assertEquals(formatBytes(900), "900MB");
assertEquals(formatBytes(1900), "1GB 900MB");
// assertEquals(formatBytes(1000), "1GB");
assertEquals(formatBytes(2900), "2GB 900MB");
assertEquals(formatBytes(568200), "568GB 200MB");
assertEquals(formatBytes(1234567), "1TB 234GB 567MB");

function assertEquals(result, expectedResult) {
  if (result !== expectedResult) {
    throw new Error(
      `This test is failing: Expected "${expectedResult}", got "${result}"`,
    );
  }
}

console.log("All OK");
