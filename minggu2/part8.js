// Array, Array Methods, 

let daysInWeek = ["Monday", "Thursday", "Friday", "Saturday"];

console.log(daysInWeek.length);

// Menambah di akhir array

daysInWeek.push("Sunday");
console.log(daysInWeek);

// Menghapus dari akhir array
daysInWeek.pop();
console.log(daysInWeek);

// Menambah di awal array
daysInWeek.unshift("Sunday");
console.log(daysInWeek);

// Menghapus dari awal array
daysInWeek.shift();
console.log(daysInWeek);

// Splice
// Mengubah isi array pada index tertentu
// array.splice(index awal, berapa yang ingin dihapus, "item1", "item2", ...);

// Mengisi ditengah array, menyelesaikan array
daysInWeek.splice(1, 0, "Tuesday", "Wednesday");
daysInWeek.push("Sunday");
console.log(daysInWeek);

// Menghapus item yang ditambahkan, mengembalikan array ke awal
daysInWeek.splice(1, 2);
daysInWeek.pop();
console.log(daysInWeek);

// Membuat array baru dari array yang sudah ada
// array.slice(index awal, -1 dari index akhir);
fourthToSixthDaysInWeek = daysInWeek.slice(1);
console.log(fourthToSixthDaysInWeek);
