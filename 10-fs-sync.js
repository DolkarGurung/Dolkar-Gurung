const {readFileSync,writeFileSync} = require('fs');

//provide the path to specific file first param
//second param our is by default 
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

writeFileSync('./content/result-sync.txt','Here is the result : ${first},{second}',
{flag:'a'})

//flag a helps to rewrite the second argument 