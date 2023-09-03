/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

function dataHandling(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log("Nomor ID: " + element[0]);
        console.log("Nama Lengkap: " + element[1]);
        console.log("TTL: " + element[2] + " " + element[3]);
        console.log("Hobi: " + element[4]);
        console.log("");
    }
}

dataHandling(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */

let input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr) {
    let tempArr = arr;
    tempArr[1] += "Elsharawy";
    tempArr[2] = `Provinsi ${tempArr[2]}`;
    // tempArr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    tempArr.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(tempArr);

    console.log("Mei"); // ?? 

    let tempArr2 = input2[3].split("/");
    let i = tempArr2.pop();
    tempArr2.unshift(i);
    console.log(tempArr2);

    console.log(arr[3].split("/").join("-"));

    console.log(arr[1].slice(0,15));
}

dataHandling2(input2);
