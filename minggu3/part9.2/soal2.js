//cari faktor persekutuan terbesar

function fpb(angka1, angka2) {
    let counter, j, fpb;
    angka1 > angka2 ? (counter = angka1, j = angka2) : (counter = angka2, j = angka1);

    for (let i = 0; i < counter && i <= j; i++) {
        if (angka1 % i == 0 && angka2 % i == 0) {
            fpb = i;
        }
    }

    return fpb;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1