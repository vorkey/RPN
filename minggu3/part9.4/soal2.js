//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting

function urutkanAbjad(str) {
    let tempArr = str.split('');
    let length = tempArr.length;

    let i = 1;
    while (i < length) {
        let current = tempArr[i];
        let j = i - 1;
        while (j >= 0 && tempArr[j] > current) {
            tempArr[j + 1] = tempArr[j];
            j--;
        }
        tempArr[j+1] = current;
        i++;
    }
    return tempArr.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'