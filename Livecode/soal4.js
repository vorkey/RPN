/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text){
    let res = 0;
    let tempObj = {};
    let tempArr = text.split('');
    for (let i = 0; i < tempArr.length; i++) {
        let count = 0;
        tempArr.forEach(e => {
            if (tempArr[i].toLowerCase() == e.toLowerCase()) {
                count += 1;
                tempObj[`${e.toLowerCase()}`] = count;
            }
        });
    }
    // console.log(tempObj);
    for (const e in tempObj) {
        if (tempObj[`${e}`] > 1) {
            res += 1;
        }
    }
    return res;
}

console.log(duplicateCount("")) //0
console.log(duplicateCount("abcde")) //0
console.log(duplicateCount("aabbcde")) //2
console.log(duplicateCount("aabBcde")) //2
console.log(duplicateCount("Indivisibility")) //1
console.log(duplicateCount("Indivisibilities")) //2
console.log(duplicateCount("abcabcdABcefGhg")) //4
