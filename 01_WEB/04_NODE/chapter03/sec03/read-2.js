fs = require("fs");
const path = require("path");

const targetPath = path.join(__dirname, "example.txt");

const data = fs.readFileSync(targetPath, "utf-8");
console.log(data);
