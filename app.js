//npm -- version
//node package manager

//local dependancy -- add dependancy only for this particular project
//npm i <packageName>

//global dependancy -- use it in any project
//npm install -g <packageName> (mac)

const _ = require('lodash');

const items = [1, [2,[3,[4]]]]
const newItems  = _.flattenDeep(items)
console.log(newItems)