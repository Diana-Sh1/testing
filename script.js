//Задачки

//1. Найти самый длинный префикс
function longestPrefix(arr) {
    arr.sort()
    let lastChild = arr[arr.length -1]
    for (let i = 0; i < arr[0].length; i++) {
        if (arr[0][i] !== lastChild) {
            return arr[0].slice(0,i)
        }
    }
    return arr[0]
}
const arr = ['abc123', 'abcd123', 'abcde123', 'abcdefg123']
console.log(longestPrefix(arr));

////////////метод работы с массивом every()/some(). Можно использовать несколько проверок
const array = [4,5,6,7,8]
let b = array.every(item => {
    if (item > 3) return true;
})
console.log(b);// true
// ВСЕ ли совершеннолетние люди в списке. Если есть хоть 1 несовершеннолетний, то вернется false
const c = [
    {name: 'John', age: 13},
    {name: 'Ann', age: 22},
    {name: 'Ien', age: 10},
]
let d = c.every(item => {
    if (item.age >= 18) return true;
})
    console.log(d);// false


///////////Метод работы с массивом reduce().
//Найти максимальное значение в массиве.
    let e = array.reduce((accum,item)=> {
    if (item > accum) {
        accum = item}
    return accum;
})
    console.log(e);
//Найти и получить только все id из строк массива
let arrayString = [
    {"id": 55, "city": "Moscow"},
    {"id": 45, "city": "Abr"},
    {"id": 34, "city": "Oka"},
]
let g = arrayString.reduce((accum, item) => {
    accum.push(item.id);
    return accum
},[]);
console.log(g);

//entries()
let arr1 = ['a', 'b', 'c'];
// let eArr = arr1.entries();
console.log(Object.entries(arr1))





