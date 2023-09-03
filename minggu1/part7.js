// Function

// function name(parameter,...) {}

let a = "slipknot";

function reverseWord(w) {
    j = ""
    for (let i = w.length - 1; i >= 0; i--) {
        j += w[i];
    }   
    console.log(j);
}

reverseWord(a);