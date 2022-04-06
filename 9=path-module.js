const path = require('path');

console.log(path.sep)

const filePath = path.join('/content','//subfolder','test.txt')

//the // gets removed bc that is not  apart of the separtor

console.log(filePath)

const base = path.basename(filePath) //to just get the test.txt, from the base
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute)