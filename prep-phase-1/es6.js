// Let & Const
let var1 = 0;
const var2 = 9;

// Arrow Functions, curly brackets and return keyword can be omitted

function multiply(x, y) {
    return x * y;
}
function squared(x) {
    return x * x;
}

const arrowMultiply = (x, y) => x * y;
const arrowSquared = (x) => { return x * x};

// Spread Operator, expand iterables to more elements
const month1 = ["January", "February", "March", "April"];
const month2 = ["May", "June", "July", "August"];
const month3 = ["September", "October", "November", "Desember"];

const year = [...month1, ...month2, ...month3];

let numbers = [123, 412, 531, 1241];
console.log(Math.max(...numbers));

//