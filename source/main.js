
// let a ='Иван';
// let b = 37;
// let z7 = 'Овен';
// let f = 'Ivanov'

// let c = [a,b,z7,f];
// console.log(c);

// // поменять местами первый элемент с последним
// let temp = c[0];

// c[0] = c[c.length-1];
// c[c.length - 1]= temp;
// console.log(c);

// выводим на страницу массив
// for (let i=0; i<=c.length-1; i++){
//     document.querySelector('.out-1').innerHTML+=c[i] + ' ';
// }
// предущий способ вывод дает нагрузку на проыессор, пожтому лучше записать вывод в переменную и выводить ее один раз, вместо гото чтобы каждый раз обращаться к document
// let a1 = '';
// for (let i=0; i<=c.length-1; i++){
//     a1+=c[i]+ ' '}
//     document.querySelector('.out-1').innerHTML=a1;

// console.log(a1)
//    const getMaxElement = () =>{ 
//     const b = [1, 34 , 4234, 23];
// console.log(b)
// let max = b[0];
// b.forEach(element => { if(element > max){
//     max = element
// }

// }); console.log(max);
//    }
//    getMaxElement();
// const getMaxElement = () => {
//     const b = [1, 0, 4234, 23];
//     // console.log(b)
//     // let max = b[0];

//     // for (let i = 0; i<=b.length - 1; i++) {
//     // if (b[i] > max) {max = b[i]}
//     //    }
//     // console.log(max)
//     let sd = Math.max.apply(null, b);
//     // let sd = getMaxOfArray[b];
//     // console.log(Math.max.apply(null,b))
// }
// getMaxElement();

// выводим в консоль коллекцию тегов и при помощи for in и for of 

//    let arr = document.getElementsByTagName('p');
// // console.log(arr)

// for (key in arr){
//     // console.log(key)
// }

//    let arr1 = document.getElementsByTagName('p');
// console.log(arr)

// for (value of arr){
//     console.log(value)
// }

// let b1 = document.getElementsByClassName('b1');

// задача - переьрать массив и вывести все элементы под дивом по нажатию кнопки с классом b1
// let getMassivElements =() => {

// let b1 = document.querySelector('.b1');
// let arr = [23 , 45,3,3,12];
// let getArray = () => {
//     let t = '';
//     let result = document.querySelector('.result');
// for (value of arr){
//     t= value + ' ';
//     result.after(t);
//     // console.log(t); 
// }
// }
// b1.addEventListener('click', getArray)
// }
// getMassivElements();

// задача Напишите функцию, которая заполняет новый массив предоставленным значением.Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']

// const fill = (arraySize, value) => {
// let array =[];
// for (let i = 0; i<arraySize; i++){
//     array[i]=value;
// }
// console.log(array);
// return array;
// }

// fill(3, 'a')

//Напишите функцию, которая разворачивает массив в обратном порядке.  * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]

// const reverse = (array) =>{
//     let arr = [];
//     for (let i = 0; i<array.length; i++){
// arr[i]=array[array.length-1-i];
//     }
//     console.log(arr);
//     return arr;
// }
// reverse([2,4,322,34,'dlskfj','00wdlk']);

//Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// const compact = (array) => {
//     let arr = [];
//     let newArray;

//     for (let i = 0; i < array.length; i++) {


//         if (array[i] !== 'false' && array[i] !== 'undefined' && array[i] !== 'null' && array[i] !== 0)
//             arr[i] = array[i]
//     }
//     console.log(arr)
//     console.log(arr.length)
// }
// compact([1, 0, 'false', 45, 'undefined', 'null', 324, 3, 0])


// const compact =(array) =>{
//     let arr = [];
//     for(let i=0; i<=array.length; i++){
// if (array[i] !== 'false' && array[i] !== 'undefined' && array[i] !== 'null' && array[i] !== 0)
// // console.log(i)

// arr[i]=array.splice(i, 1)

// }
// console.log(arr);

// }
// compact([1, 0, 'false', 45, 'undefined', 'null', 324, 3, 0])


// const compact = (array) =>{

//        const newArray = array.filter(function(f){
//             return f!==0&& f!=='null'&&f!=='undefined'&&f!=='null'&&f!=='false'})
//             console.log(newArray)
//    const fieldResult = document.querySelector('h1')
//    fieldResult.insertAdjacentText("afterbegin", newArray)

// }

// compact([1, 0, 'false', 45, 'undefined', 'null', 324, 3, 0])


// Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
// Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

// const fromPairs = (array) => {
//     let result = {}
//     array.forEach(element => {
//         result[element[0]]= element[1]  // для каждого ключа элемента массива в массиве мы запиысваем значение, ключ это первый элемент в массиве - element[0] а значение - это второй элемент массива element [1] , квадратные скобки используем потому что для доступа к ключу объекта надо использовать квадратные скобки , если это значение вычислемое или это значение состоит из некольких слов 
//         console.log(result)
//     });
// }

//   fromPairs([['a',1],['b',2],['c',3]]);

//     const fromPairs = (array) => array.reduce(function (total, currentvalue){
//     if (Array.isArray(currentvalue)) {
//       total[currentvalue[0]] = currentvalue[1];
//     }
//     console.log(total)
//     return total;
//   }, {});

// Объекты. Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// // delete user.name;
// console.log(user)

// const user1 = {}
// console.log(user1)
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// const isEmptyObject = (obj) =>{
// for (let key in obj){
// console.log('false')
// return false}

// console.log ('true')
// return true
// }

// isEmptyObject(user1)


// const sortAray = (array, a, b) => {
//     let res = []
//     let res1 = []
//     array.forEach(element => {
//         if (element !== a && element !== b) {
//             res += element;

//             // console.log(res)
//         }
//         else false
//     })
//     res1 = (Array.from(res))
//     console.log(res1)
// }
// sortAray([1, 2, 3, 2, 1], 1, 2)

//Напишите функцию, которая убирает повторяющиеся значения.* Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

// const repeatElements = (a) => {
//     const new2 = new Set(a) 
//     console.log(Array.from(new2))    
// }

// repeatElements([1, 2, 3, 1, 2])

// Изменение всех элементов
// let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']

// const modifiedWords = words.filter( (word, index, arr) => {
//   arr[index+1] +=' extra'

// //   console.log ( word.length < 6)
//   return word.length < 6
// })


// Напишите функцию, которая убирает повторяющиеся значения.* Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]


// const repeatElements = (array) => {
// const newArray = array.filter((element, id) => array.indexOf(element) === id);
// console.log(newArray)
// }
// // console.log(repeatElements)
// repeatElements([1, 2, 3, 1, 2])

// Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.  * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
// const isEqual = (firstArray, secondArray) => {

//     if (firstArray.length === secondArray.length) {
//         const newArray = firstArray.concat(secondArray)

//         let newArraylength = newArray.length
//         let res = 1
//         for (let i = 0; i < newArray.length * 0.5; i++) {
//             if (newArray[i] === newArray[i + newArraylength * 0.5]) {
//                 res1 = 1;
//                 res = res * res1;
//                 // return true
//             }
//             else {
//                 res1 = 0;
//                 res = res * res1;
//                 // return false}
//             }

//             // console.log(newArray.length)

//         }
//         if (res === 0) {
//             console.log('false')
//             return false
//         }
//         else  console.log('true'); return true 
//     }

//     else console.log('false');
//     return false;

// }

// isEqual([1, 2, 3, 6], [1, 2, 3])

// Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.  * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
// const isEqual = (firstArray, secondArray) => {
// if(firstArray.length === secondArray.length) {

// const reducer1 = firstArray.map((Element,index)=>{
// return Element===secondArray[index]
//     }) 
//     let res = !reducer1.includes(false)
//     console.log(res)
//     return reducer1
// }
// else {console.log(false);return false}
// }
// isEqual([1, 2, 3], [1,2,3])

// Напишите функцию, которая преобразует глубокий массив в одномерный. Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

// const singleArray = (a) =>{
// let arr = a.join(' ')
// const arr1 = Array.from(arr)
// console.log(arr1);
// const arr2 = arr1.filter(function(element,index){return element !==' '&& element!==','}
// )
// const res = arr2.map((element,index)=>{return element*1})
// console.log(res)
// return res
// }

// singleArray([1,2,[3,4,[5]]])

// Напишите функцию, которая преобразует глубокий массив в одномерный. Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

const flatten = (array) => {
  const resr = array.reduce((acc, val) => acc.concat
    (Array.isArray(val) ? flatten(val) : val)

    , []);
  console.log(resr)
  return resr
}

flatten([1, 2, [3, 4, [5]]])


// коммит тест


// skjdfsdkfjsdkfjsd;klgit fjsd

// rew = 'rfdfksdklfjdfjk'
// function str1(string1) {
//    res =  string1.split('')
//    var coma = ' 12'
// console.log(res)

//    return res
// }

// str1(rew);
// пример показывает работы замыкания внутренняя функция ссылается на count, который находится во внешней функции, при запуске каждый раз внутрення функция ищет count и находит ее в глобальном лексическом окружении созданном  от предыдущего вызова функции, поэтому счетчик каждый раз выводит новое значение count
// function makeCounter() {
//     let count = 0;
//     return function() {
//         // console.log (count++)
//       return count++;
//     };
//     console.log (count)
//   }

//   let counter1 = makeCounter();
//   let counter2 = makeCounter();
//   alert( counter1() ); // 1
//   alert( counter1() ); // 1

//alert( counter2() ); // 0 (независимо)

// Нужно получить объект с ключами user, внутри user будет вложенный объект c склчами name и secondname 
// https://youtu.be/8Xuftz2IiAI?t=4370 

// const inData = 'user.name.firstname=Bob&user.name.secondname=Smith&user.favouritecolor=light%20Blue&experiments.theme=dark';
// function objectify(str) {
//   let res = {}
//   str = str.split('&')  // ['user.name.firstname=Bob', 'user.name.secondname=Smith', 'user.favouritecolor=light%20Blue', 'experiments.theme=dark']
//   str = str.map(l => l.split('.'))  // 0: ['user', 'name', 'firstname=Bob']  1:['user', 'name', 'secondname=Smith']
//   for (let i = 0; i < str.length; i++) {
//     let cur = res // создаем временную переменную cur, которая смотрит на результирующий res
//     for (let key = 0; key < str[i].length; key++) {
//       let name = str[i][key]
//       // console.log(name)
//       if (key == str[i].length - 1) {
//         name = name.split('=')
//         cur[name[0]] = decodeURIComponent(name[1])
//         break
//       } 

//       if (cur[name]) {
//         cur = cur[name]
//       } else {
//         cur[name] = {}
//         cur = cur[name]
//       }
//     }
//   }
// return res
//   // console.log(str)
// }
// const objected = objectify(inData)
// console.log(objected)
// objectify(inData)

// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.  * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false

// function isObjectArray (obj) {
//   if (typeof(obj)==='object' && obj!==null ) {
//   return !Array.isArray(obj)
// }
// else return 'примитив или ноль'
// }
// const ft = isObjectArray({fr:12, k:23})
// console.log (ft);


// Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.* Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

// returnInnerArray =(obj) => {
//   let res =[]
// for (const key in obj) {  
// res.push([key,obj[key]])
//   }
//   return res
// }
// const res1 = returnInnerArray({ a: 1, b: 2 })
// console.log(res1)


// returnInnerArray =(obj) => {

//   return Object.entries(obj)

// }
// const res1 = returnInnerArray({ a: 1, b: 2 })
// console.log(res1)

returnInnerArray = (obj) => {

  red = Object.keys(obj).map((Element) => {
    return [Element, obj[Element]]

  })
return red
}
const res1 = returnInnerArray({ a: 1, b: 2 })
console.log(res1)

