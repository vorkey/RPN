// Let & Const (es6)
let var1 = 0;
const var2 = 9;

// Arrow Functions, curly brackets and return keyword can be omitted (es6)
function multiply(x, y) {
    return x * y;
}
function squared(x) {
    return x * x;
}

const arrowMultiply = (x, y) => x * y;
const arrowSquared = (x) => { return x * x};

// Spread Operator, expand iterables to more elements (es6)
const month1 = ["January", "February", "March", "April"];
const month2 = ["May", "June", "July", "August"];
const month3 = ["September", "October", "November", "Desember"];

const year = [...month1, ...month2, ...month3];

let numbers = [123, 412, 531, 1241];
// console.log(Math.max(...numbers));

// Array Filter, Mencari nilai dalam array dan mengembalikan dalam bentuk array
let arr = [1,4,14,12,5,15,513,67];
let arrFiltered = arr.filter((x) => {return x % 2 == 0});
// console.log(arrFiltered);

// Array Find, Mencari satu nilai dalam array, return nilai
let arrFind = arr.find((x) => x > 5);
// console.log(arrFind);

// Array Map, loop array seperti foreach lalu mengembalikan array
let multipliedArray = arr.map(e => e * 2);
// console.log(multipliedArray);

// Object Literal untuk membuat object
let Things = {
    name : "",
    size : "",
    count : 10,
    price : 5000,
    totalPrice : function() {
        return this.count * this.price;
    }
}
// console.log(Things.totalPrice());

// Function Constructor untuk membuat object
function Things2(name, size, count, price) {
    this.name = name;
    this.size = size;
    this.count = count;
    this.price = price;

    this.totalPrice = () => this.count * this.price;
}
let pen = new Things2("pen", "11", 9, 1500);
// console.log(` All ${pen.count} of my ${pen.name} is worth ${pen.totalPrice()}`);

// Object.create() untuk membuat object, lebih efektif dalam penggunaan memori dibanding cara sebelumnya, muungkin
const totalPrice = {
    totalPrice : function() {return this.count * this.price}
}
function Things3(name, size, count, price) {
    let obj = Object.create(totalPrice);
    obj.name = name;
    obj.size = size;
    obj.count = count;
    obj.price = price;

    return obj;
}
let book = new Things3("book", "11", 12, 3000);
// console.log(` All ${book.count} of my ${book.name} is worth ${book.totalPrice()}`);

// Object Prototype dalam Constructor Function, mungkin lebih baik
function Things4(name, size, count, price) {
    this.name = name;
    this.size = size;
    this.count = count;
    this.price = price;
}

Things4.prototype.totalPrice = function() {return this.price * this.count};

let Bag = new Things4("bag", "45", 1, 75000);
// console.log(`My ${Bag.name} is worth ${Bag.totalPrice()}`);

// Class, bukan object, lebih simple untuk menambah method dan membuat object
class Things5 {
    constructor(name, size, count, price) {
        this.name = name;
        this.size = size;
        this.count = count;
        this.price = price;
        this.totalPrice = count * price;
    }

    ChangeName (name) {
        this.name = name;
    }
}
let Sling = new Things5("Sling", "1", 12, 100);
// console.log(Sling.name);
Sling.ChangeName("Shoot");
// console.log(Sling.name);
