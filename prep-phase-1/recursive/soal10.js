/*
===================================
Recursive Mastery : Number Iterator
===================================
[INSTRUCTION]
Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
Buatlah dengan metode rekursif iterasi angka tersebut dari 0.
[EXAMPLE]
input: 5
output: 012345
input: 7
output: 01234567
[CONSTRAINTS]
Wajib menggunakan metode rekursif
Dilarang menggunakan sintaks for / while dan regex
*/
function numberIterator(num) {
    let resStr = ``;
    
    if (num == 0) {
        return `0` + resStr;
    } else {
        resStr += num;
    }
    return numberIterator(num - 1) + resStr;
}
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'