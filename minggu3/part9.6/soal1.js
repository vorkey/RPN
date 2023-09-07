
function changeMe(arr) {

  if (arr.length == 0) {
    console.log('""');
  }

  let resObject = {
    firstName : "",
    lastName : "",
    gender : "",
    age : ""
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      resObject.firstName = arr[i][0];
      resObject.lastName = arr[i][1];
      resObject.gender = arr[i][2];

      if (arr[i][3]) {
        resObject.age = 2023 - arr[i][3];
      } else {
        resObject.age = "Invalid Birth Year";
      }
    }
    console.log(`${resObject.firstName} ${resObject.lastName}:`);
    console.log(resObject);
  }

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""