const result = document.querySelector('.result')
console.log(result)
document.querySelector('.result').innerHTML = '<h2> новый заголовок для теста git</h2>'


let table = document.getElementById('table')
let mainraw = document.querySelectorAll('.maincolumn')
let allRows = document.getElementsByTagName('tr')
console.log(table)

rawsQty = Object.entries(allRows) // это массив из количества строк в которых содержатся ячейки
console.log(rawsQty) // массив из массивов (пара ключ - tr)
// console.log (Array.isArray(rawsQty))
// var newAr = rawsQty.flat(depth)
// 
const showDigits = function () {
     
    for (let i = 0; i < mainraw.length; i++) {
let checking = false;
        const res = mainraw[i].addEventListener('click', function () {
            if (checking==false) {
            console.log('работает')
            let b = []
            for (let j=0; j<rawsQty.length; j++) {
                let c = Number(table.rows[j].cells[i].innerHTML)
                b.push(c)
                // console.log(b[j])
                b.sort((a, b) => b - a)
                // console.log(b)
                //     table.rows[index].cells[i].innerHTML = ''
                // table.rows[j].cells[i].innerHTML = c-1         
            }        
            console.log(b)
            for (let k=0; k < rawsQty.length; k++) {
                table.rows[k].cells[i].innerHTML = b[k]
            }
        checking = true
        }
        else {
            console.log('работает')
            let b = []
            for (let j=0; j<rawsQty.length; j++) {
                let c = Number(table.rows[j].cells[i].innerHTML)
                b.push(c)
                // console.log(b[j])
                b.sort((a, b) => a - b)
                // console.log(b)
                //     table.rows[index].cells[i].innerHTML = ''
                // table.rows[j].cells[i].innerHTML = c-1         
            }        
            console.log(b)
            for (let k=0; k < rawsQty.length; k++) {
                table.rows[k].cells[i].innerHTML = b[k]
            }
        checking = false

        }
        })    
 }   }

showDigits()
// }
// const showDigits = function () {
    
//     for (let i = 0; i < mainraw.length; i++) {
//         const res = mainraw[i].addEventListener('click', function () {

//             console.log('работает')
//             let b = []
//             for (let j=0; j<rawsQty.length; j++) {
//                 let c = Number(table.rows[j].cells[i].innerHTML)
//                 b.push(c)
//                 console.log(b[j])
//                 b.sort((a, b) => b - a)
//                 console.log(b)
//                 //     table.rows[index].cells[i].innerHTML = ''
//                 table.rows[j].cells[i].innerHTML = c-1         
//             }        
//             return
//         })
        
//     }
// }
// showDigits()
// const der = showDigits()
// console.log(der)

    