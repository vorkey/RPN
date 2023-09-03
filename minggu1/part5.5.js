//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
// Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
// untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
// tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

console.log("Soal 1:");

let Word = 'JavaScript';
let Second = 'is';
let Third = 'awesome';
let Fourth = 'and';
let Fifth = 'I';
let Sixth = 'love';
let Seventh = 'it!';

//code here
Word += " " + Second + " " + Third + " " + Fourth + " " + Fifth + " " + Sixth + " " + Seventh;
// ---------------------------------------
console.log(Word);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//  Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
// tersebut!

console.log("\nSoal 2:");

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];
let secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
let thirdWord = word[15] + word[16];
let fourthWord = word[18] + word[19];
let fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);


// ---------------------------------------
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

console.log("\nSoal 3:");

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let secondWord2 = word3.substring(4, 14);
let thirdWord2 = word3.substring(15, 17);
let fourthWord2 = word3.substring(18, 20);
let fifthWord2 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);

// ---------------------------------------
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

console.log("\nSoal 4:");

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let secondWord3 = word4.substring(4, 14);
let thirdWord3 = word4.substring(15, 17);
let fourthWord3 = word4.substring(18, 20);
let fifthWord3 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = secondWord3.length;
let thirdWordLength = thirdWord3.length;
let fourthWordLength = fourthWord3.length;
let fifthWordLength = fifthWord3.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);

// ---------------------------------------
console.log('Second Word: ' + secondWord2 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord2 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord2 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord2 + ', with length: ' + fifthWordLength);
// ---------------------------------------