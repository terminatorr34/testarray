const result = document.querySelector('.result')
console.log(result)
document.querySelector('.result').innerHTML = '<h2> новый заголовок для теста git</h2>'


let table = document.getElementById('table')
let maincolumn = document.querySelectorAll('.maincolumn')
let allRows = document.getElementsByTagName('tr')
console.log(table)
rawsQty = Object.entries(allRows) // это массив из количества строк в которых содержатся ячейки

for (let i = 0; i < maincolumn.length; i++) {
    maincolumn[i].addEventListener('click', function () {
        console.log('работает')

        const res = rawsQty.map((raws, index) => {
            indexArrayColumn.forEach(element => {
                console.log(table.rows[index].cells[i].innerHTML)
            })
        })
    })

}

const indexArrayColumn = Object.keys(maincolumn)
console.log(indexArrayColumn)
console.log(rawsQty)

    // const res = rawsQty.map((raws, index) => {
    //     indexArrayColumn.forEach(element => {
    //         console.log(table.rows[index].cells[element].innerHTML)
    //     })
    // })

    // console.log(maincolumn[element].innerHTML)
    ;
// console.log(typeof(table.rows))
// console.log (table.rows[0].cells[0])



// console.log(Object.entries(allRows))

