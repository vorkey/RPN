/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

// Pengennya gini tapi TypeError mulu
/*
function palindrome(kata) {
    console.log(typeof kata)
    if (typeof kata == "string") {
        if (kata.reverse() == kata) {
            return true;
        } else {
            return false;
        }    
    }
}
*/

function palindrome(kata) {
    let reversedString = "";
    for (let i = kata.length - 1; i >= 0; i--) {
        reversedString += kata[i];   
    }
    if (reversedString == kata) {
        return true;
    } else {
        return false;
    }
}

  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false