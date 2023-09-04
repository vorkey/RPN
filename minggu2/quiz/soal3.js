/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    let fLetters = [];
    let resultArray = [];

    for (let i = 0; i < animals.length; i++) {
        if (fLetters.indexOf(animals[i][0]) == -1) {
            fLetters.push(animals[i][0]);
        }
    }
    for (let i = 0; i < fLetters.length; i++) {
        resultArray.push([]);
    }
    for (let i = 0; i < animals.length; i++) {
        let j = fLetters.indexOf(animals[i][0]);
        resultArray[j].push(animals[i]);
    }

    // console.log(fLetters);
    return resultArray.sort();
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]