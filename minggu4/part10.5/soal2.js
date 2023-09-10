/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti 
akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    let tempArr = str.split('');
    let vLetters = {a:'b', i:'j', u:'v', e:'f', o:'p'};
    
    for (let i = 0, upper = str.toUpperCase(); i < tempArr.length; i++) {
        if (vLetters[tempArr[i].toLowerCase()] && tempArr[i] == upper[i]) {
            tempArr[i] = vLetters[tempArr[i].toLowerCase()].toUpperCase();
        } else if (vLetters[tempArr[i]]) {
            tempArr[i] = vLetters[tempArr[i]];
        }
    }
    return tempArr.join('');
}

function reverseWord (str) {
    return str.split('').reverse().join('');
}

function setLowerUpperCase (str) {
    let tempStr = "";

    for (let i = 0, lower = str.toLowerCase(); i < str.length; i++) {
        if (str[i] == lower[i]) {
            tempStr += str[i].toUpperCase();
        } else {
            tempStr += str[i].toLowerCase();
        }
    }

    return tempStr;
}

function removeSpaces (str) {
    let tempArr = str.split('');

    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] == ' ') {
            tempArr[i] = '';
        }
    }

    return tempArr.join('');
}

function passwordGenerator (name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }

    let res = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    return res;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'