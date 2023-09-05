// Object

let o = {
    n : "yay",
    a : 12,
    ar : [12, 43, 56],
    o : {
        a : 'peace'
    }
};

console.log(o.o, o.n, o.ar[1], o.o.a);

o.n = "peace";
o.x = "yay";
o['a'] = 17;

for (const i in o) {
    console.log(`${i} ${o[i]}`);
}

delete o.o;

console.log(o);
console.log(o.b);
