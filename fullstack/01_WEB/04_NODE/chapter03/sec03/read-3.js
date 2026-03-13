fs = require("fs");
const path = require("path");

const targetPath = path.join(__dirname, "example.txt");

fs.readFile(targetPath, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
