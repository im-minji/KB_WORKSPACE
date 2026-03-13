fs = require("fs");
const path = require("path");

const writeFilePath = path.join(__dirname, "text-1.txt");
const targetPath = path.join(__dirname, "example.txt");

fs.readFile(targetPath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  fs.writeFile(writeFilePath, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("text-1.txt is saved!");
  });
});
