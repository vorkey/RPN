// Regular Expressions

/*
Karakter - karakter RegEx di JS:
- . // - Mencocokan karakter apapun, kecuali line breaks(jeda baris/enter).
- * // - Mencocokan 0 atau lebih dari karakter terdahulu.
- + // - Mencocokan 1 atau lebih dari karakter terdahulu.
- ? // - Karakter terdahulu menjadi opsional. Mencocokan 0 atau 1.
- =\d // - Mencocokan digit apapun
- \w // - Mencocokan karakter pada sebuah kata (alphanumeric dan underscore/garis bawah).
- $ // - Mencocokan ujung dari sebuah string.
- ^ // - Mencocokan awal dari sebuah string.
- [^a-z] // - Ketika didalam sebuah class karakter, tanda ^ artinya NOT; 
- \s - satu spasi
dalam kasus ini, regex akan mencocokan apapun yang bukan karakter lowercase.
*/

// Menulis Regex dalam javascript bisa dalam 2 bentuk, yaitu antara dengan membuat Regex object dengan menggunakan new RegExp(), 
// atau menggunakan nilai literal yang diapit oleh karakter flash (/).

let regexContohSatu = new RegExp("abc");
let regexContohDua = /abc/;

// Method .test() akan mengembalikan nilai true atau false, sesuai dengan pattern regex yang dibuat.

let message1 = 'Regex itu Mudah!';
console.log(/[A-Z]/.test(message1)); //True

let messageAllLowerCase1 = 'regex itu susah?';
console.log(/[A-Z]/.test(messageAllLowerCase1)); //False

let regexPattern = new RegExp('[A-Z]');
let message2 = 'Regex itu Mudah!';
console.log(regexPattern.test(message)); //True

let messageAllLowerCase = 'regex itu susah?';
console.log(regexPattern.test(messageAllLowerCase)); //False

// Method .split()

let str = 'belajar regex itu menyenangkan';
console.log(str.split(/\s/)); // [ 'belajar', 'regex', 'itu', 'menyenangkan' ]

// Method .replace()

let stringAwal = 'Regex itu sangat susah!';
stringHasil = stringAwal.replace(/susah/, 'mudah');
console.log(stringHasil); // mengembalikan nilai "Regex itu sangat mudah!"

// Method .match()
let message = 'Regex seru DEH!';
console.log(message.match(/e/));
// menampilkan "e", namun hanya sekali

console.log(message.match(/e/g));
// menampilkan "e" untuk setiap "e" yang terdapat di dalam teks. `g` menandakan pencarian secara global, tidak hanya satu kali

console.log(message.match(/e/gi));
// menampilkan "e" untuk setiap "e" yang terdapat di dalam teks. 
// `i` menandakan pencarian karakter dengan ignore case, atau mengabaikan besar kecilnya karakter, sehingga "E" pun akan dicocokkan.
// mending kalian coba sendiri deh liat outputnya wkwk

// Contoh 2 Penggunaan Match - Mencocokan Karakter dan Mengecualikan Punctuation atau Simbol

let string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
console.log(string.match(/[a-z]+/gi));
//menampilkan ["Walaupun", "regex", "banyak", "mengandung", "simbol", "tapi", "tidak", "serumit", "seperti", "dan"]
/*
Simbol-simbol diatas, sering disebut sebagai Punctuation. Seringkali dalam beberapa kasus, kita mau menghapus semua simbol-simbol diatas.
Jika kamu teliti, kamu pasti menemukan simbol + dibelakang [a-z]. Simbol + disini berarti match akan menyatukan seluruh karakter yang cocok dengan pattern a-z hingga menemukan pattern lain diluar pattern tersebut. Dalam kasus contoh di atas, setiap kali menemukan spasi, contohya pada Walaupun regex match akan memisahkan Walaupun dan regex karena ditemukannya spasi tersebut. Apabila kamu penasaran, cobalah hapus simbol + dari code diatas, dan jalankanlah kembali. Hasilnya akan berbeda!

Bagaimana jika pattern regex tidak ditemukan ?
Jika pattern regex tidak dapat ditemukan dalam string, maka fungsi match( ) akan return bukan array kosong, tapi null. Bedanya array kosong dan null: array kosong memiliki length = 0, null tidak memiliki length
Sebagai analogi: array kosong adalah gelas yang tidak terisi air dan null adalah tidak ada gelas sama sekali!
Karena itu, kita perlu berhati-hati saat menggunakan properti length dari hasil fungsi match( ) karena null tidak memiliki length! Null.length akan menyebabkan error. Untuk mengecek apabila suatu fungsi match membalikkan array atau null, kita bisa menggunakan kode if(newArray) , seperti berikut:
*/

if (newArray) {
    console.log('newArray bukan null!');
} else {
    console.log('Tidak ada newArray, ini null!');
}
