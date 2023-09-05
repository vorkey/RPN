/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. 
Function akan me-return modus dari array atau deret angka tersebut. 
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. 
Jika modus tidak ditemukan, function akan me-return -1. 
Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). 
Dan apabila didalam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/

function cariModus(arr) {
  arr.sort((a, b) => a - b);

  // modusArray[key, jumlah modus, jumlah elemen]; mau pake object tapi skill issue gwnya wkwkw, dahlah pake ini aja
  let modusArray = [0, 0, 0];

  for (let i = 0, j = 0; i < arr.length; i++) {
    if ((arr[i - 1] || 0) == arr[i]) {
      j++;
      if (j > modusArray[1]) {
        modusArray[0] = arr[i];
        modusArray[1] = j + 1;
      }
    } else {
      modusArray[2]++;
    }
  }

  // return modusArray;
  if (modusArray[2] == 1 || modusArray[1] == 0) {
    return -1;
  } else {
    return modusArray[0];
  }
  
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

// dahlah gak bisa bisa njir

// function cariModus(arr) {
//   let objModus = {};
//   let modus = 0;

//   for (let i = 0; i < arr.length; i++) {
//     j = arr[i];
//     if (objModus[`${j}`] == undefined) {
//       objModus[`${j}`] = 1;
//     } else {
//       objModus[`${j}`]++;
//     }
//   }

//   for (const key in objModus) {
//     // console.log(key);
//     console.log(`${modus} ${key}`)
//     if (objModus[`${key}`] > objModus[`${modus}`]) {
//       modus = key;
//     }
//   }

//   console.log('');
//   return modus;
// }
