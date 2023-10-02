function piramid2(num) {
    let tempStr = "";
    let resStr = "";
    for (let i = num; i > 1; i--) {
        for (let j = 0; j < i; j++) {
            tempStr += `${i}`;
        }
        resStr += tempStr + "\n";
        tempStr = "";
    }
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j < i + 1; j++) {
            tempStr += `${i}`;
        }
        resStr += tempStr + "\n";
        tempStr = "";
    }
    return resStr;
}

console.log(piramid2(5));

/*
55555
4444
333
22
1
22
333
4444
55555
*/