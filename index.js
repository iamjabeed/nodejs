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

const {names, ages, sum} = require("./app");

// console.log(names , ages, sum(68, 1));
console.log(names + "\n" + ages + "\n" + sum(68, 1));



