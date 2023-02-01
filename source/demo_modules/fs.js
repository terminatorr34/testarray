const fs = require('fs');

const path = require('path') // чтобы работать с путями подключаем path
// создаем новую папку в директории с основным файлом

// fs.mkdir(path.join(__dirname, 'test'), (err) =>{
//     if(err) {throw err} else{
//         console.log('папка существует')
//     }
// })

fs.writeFile(path.join(__dirname, 'text.txt'), 'создан новый файл', (err) => {
    if(err) {throw err} else {
        console.log('файл создан')
    }
})
fs.appendFile(path.join(__dirname, 'text.txt'), '\nсоздан новый файл повторно', (err) => {
    if(err) {throw err} else {
        console.log('файл создан')
    }
})
fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8', (err,content) => {
    if(err) {throw err} else {
        console.log(content)
    }
})