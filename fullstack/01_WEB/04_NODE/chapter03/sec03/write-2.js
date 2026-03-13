fs = require("fs");
const path = require("path");

const writeFilePath = path.join(__dirname, "text-1.txt");
const targetPath = path.join(__dirname, "example.txt");

const data = fs.readFileSync(targetPath, "utf-8");

if (fs.existsSync("text-1.txt")) {
  console.log("file already exist");
} else {
  fs.writeFileSync(writeFilePath, data);
}
