/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. 
Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

// pake angka gabisa langsung di balik jir
function balikAngka(angka) {
    let a = `${angka}`;
    let result = "";
    for (let i = a.length - 1; i >= 0; i--) {
        result += a[i];
    }
    return result;
}
 
function angkaPalindrome(num) {
    num++;
    if (num == balikAngka(num)) {
        return num;
    } else {
        return angkaPalindrome(num++); // bruh
    }
}

// console.log(balikAngka(1000));

// TEST CASES

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001