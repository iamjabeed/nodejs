// console.log("Hello NodeJS");

//* Global object
// console.log(global);

// global.setTimeout(()=>{
//     console.log("Hello NodeJS");
// },1000);

// console.log(__dirname)
// console.log(__filename)

//* Module
// const names = require("./app");
// console.log(names.sum(2,3));

// const {names, ages, sum} = require("./app");

// console.log(names , ages, sum(68, 1));
// console.log(names + "\n" + ages + "\n" + sum(68, 1));

// const os = require("os");
// console.log(os.platform());
// console.log(os.homedir());

//* File system
const fs = require("fs");
// console.log(fs);
//* Reading File

//? It is asynchronous process

// fs.readFile("./file/data.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   //? Data will provide buffer (Binary data)
//   console.log(data.toString());
// });

//* Writing File

// fs.writeFile(
//   "./file/data2.txt",
//   "This data is wriiten by using fs.writeFile",
//   () => {
//     console.log("file written");
//   }
// );

//* Directory
// if (!fs.existsSync("./assest")) {
//   fs.mkdir("./assest", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assest", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// console.log(__dirname+"./assest");

//* Streams
// const fs = require('fs');

// Create a Readable stream from the source file
const readableStream = fs.createReadStream('source.txt');

// Create a Writable stream to the destination file
const writableStream = fs.createWriteStream('destination.txt');

// Pipe the data from the Readable stream to the Writable stream
readableStream.pipe(writableStream);
