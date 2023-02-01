const path = require('path');

console.log ('Название файла: ', path.basename(__filename))
console.log ('путь к папке: ', path.dirname(__filename))
console.log ('расширение файла: ', path.extname(__filename))
console.log ('Parse: ', path.parse(__filename)) // возвращает обэект в котором в полях указаны свойства 
console.log (path.join(__dirname, 'server', 'furj.html'))  // формирует путь - даже если онеще не существует