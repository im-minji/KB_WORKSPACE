const fs = require("fs");

let files = fs.readdirSync("./");
console.log(files);

fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(files);
});
