// const { default: chalk } = require("chalk")

const chalk1 = require ('chalk') // подключаем пакет chalk
console.log(chalk1.green('привет зеленый'))
console.log ('hello node')


const text1 = require('./data.js') // импотрируем переменную которую мы экспортировали из файла data.js

console.log(chalk1.blue(text1))