var fs = require('fs');
var args = process.argv[2];
var filePath = "./tmp/test_async.txt";

fs.readFile(args, function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
  fs.writeFile(filePath, data.toString(), function (err) {
    if (err) {
      throw err;
    }
    console.log("Successfully wrote to", filePath);
  });
});