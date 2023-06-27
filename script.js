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

//метод работы с массивом every().
const array = [4,5,6,7,8]
let b = array.every(item => {
    if (item > 3) return true;
})
console.log(b);



