
function pasanganTerbesar(num) {
    let angka = `${num}`;
    let max = 0;
    let arrayAngka = [];
    for (let i = 0; i < angka.length - 1; i++) {
        arrayAngka.push(angka.slice(i, i+2));
    }

    // console.log(arrayAngka);
    
    for (let i = 0; i < arrayAngka.length; i++) {
        if (max > arrayAngka[i]) {
            continue
        } else {
            max = arrayAngka[i];
        }
    }
    return max;
}
  
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99