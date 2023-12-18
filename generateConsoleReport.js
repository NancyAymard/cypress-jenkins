const testsJson = require("./reports/my_report.json");
const fs = require("fs");
module.exports = testsJson;

let totalTests = 0,
  passedTests = 0,
  failedTests = 0,
  skippedTests = 0;

let data = "";

console.log("JSON report post-processing");

testsJson.results[0].suites.forEach((suite, id) => {
  console.log(`SUITE ${id + 1} - ${suite.title}`);
  data += `SUITE ${id + 1} - ${suite.title} \n`;

  suite.tests.forEach((test, idTest) => {
    console.log(`TEST ${idTest + 1} - ${test.title} - ${test.state}`);
    data += `TEST ${idTest + 1} - ${test.title} - ${test.state} \n`;

    switch (test.state) {
      case "passed":
        passedTests++;
        break;
      case "failed":
        failedTests++;
        break;
      case "pending":
        skippedTests++;
        break;
    }
  });
});

totalTests = passedTests + failedTests + skippedTests;
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed Tests: ${passedTests}`);
console.log(`Failed Tests: ${failedTests}`);
console.log(`Skipped Tests: ${skippedTests}`);

data += `Total Tests: ${totalTests} \n`;
data += `Passed Tests: ${passedTests} \n`;
data += `Failed Tests: ${failedTests} \n`;
data += `Skipped Tests: ${skippedTests} \n`;

fs.writeFileSync("reports/test_summary.txt", data);
