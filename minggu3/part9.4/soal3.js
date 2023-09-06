//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    let tempStr = "";

    for (let i = 0, lower = kalimat.toLowerCase(); i < kalimat.length; i++) {
        if (kalimat[i] == lower[i]) {
            tempStr += kalimat[i].toUpperCase();
        } else {
            tempStr += kalimat[i].toLowerCase();
        }
    }

    return tempStr;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"