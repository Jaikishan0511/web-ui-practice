const fs = require("fs");

const myFile = "jaiadf.txt";

//check if file exists
if (fs.existsSync(myFile)) {
  console.log("Found file");
}

//check if file has permissions to read
fs.access(myFile, fs.constants.R_OK, err => {
  if (err) {
    console.log("fie doesn't exist");
  } else {
    console.log("can read file");
  }
});

//if permission is there console log the content on terminal
fs.readFile(myFile, "utf8", function(err, myFile) {
  if (err) return console.error(err);

  // No error occurred, content is a string
  console.log(myFile);
});
