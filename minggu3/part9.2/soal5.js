//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya

function ubahHuruf(kata) {
  let letters = "abcdefghijklmnopqrstuvwxyza";
  let result = "";

  for (let i = 0; i < kata.length; i++) {
    result += letters[letters.indexOf(kata[i]) + 1];
  }
  
  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zaza')); // abab
