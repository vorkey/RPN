/**
    Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
    Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
    Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
    Contoh, 'katak' dibalik tetaplah 'katak'.

    RULES:
    - wlee
    - Wajib menggunakan metode rekursif
    - Dilarang menambahkan parameter baru
    - Dilarang membuat variable di luar function palindromeRecursive
    - Dilarang mengubah tipe data parameter
*/

function palindromeRecursive(sentence) {
    let firstChar = sentence[0];
    let lastChar = sentence[sentence.length - 1];

    if (firstChar != lastChar) return false;
    if (sentence.length == 1 || (sentence[0] == sentence[1] && sentence.length == 2)) {
        return true;
    }
    return palindromeRecursive(sentence.slice(1,sentence.length - 1));
}

// TEST CASES
console.log(palindromeRecursive('katak')); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false