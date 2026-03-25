const fs = require("fs");
const path = require("path");

const targetPath = path.join(__dirname, "readMe.txt");
const writePath = path.join(__dirname, "writeMe.txt");

const rs = fs.createReadStream(targetPath, "utf-8");
const ws = fs.createWriteStream(writePath);

rs.pipe(ws);
