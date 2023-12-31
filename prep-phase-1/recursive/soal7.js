/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    let res = "";
    let tempStr = equation.toString();
    let tempNum = tempStr[0] * Math.pow(10, tempStr.length - 1);

    if (tempStr.length == 2 && tempStr[1] == 0) return `${tempNum}`;
    if (tempStr[0] == 0)
        return parseNumber(tempStr.slice(1));
    if (equation / 10 < 1) {
        return `${equation}`;
    } else {
        res += `${tempNum}+`;
        return res + parseNumber(tempStr.slice(1));
    }
}

console.log(parseNumber(3333)); // 3000+300+30+3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
console.log(parseNumber(5065)); // 5000+60+5
