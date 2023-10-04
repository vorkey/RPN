/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/
function processTravel(plan) {
    let currentWord = "";
    let resArr = [];
    for (const e of plan + "-") {
        if (e != "-") {
            currentWord += e;
        } else {
            resArr.push(currentWord);
            currentWord = "";
        }
    }
    return resArr;
}

function abs(num) {
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
}

function travelingIndonesia(arr, emoney) {
    let resObj = [];
    let travelScheme = {
        destination: { Yogyakarta: 0, Semarang: 1, Surabaya: 2, Denpasar: 3 },
        transportPrice: {
            Pesawat: 275000,
            Kereta: 250000,
            Bis: 225000,
        },
        paymentDiscount: {
            OVO: 15,
            Dana: 10,
            Gopay: 5,
            Cash: 0,
        },
    };

    arr.forEach((e) => {
        let tempArr = processTravel(e);
        let total =
            abs( travelScheme["destination"][tempArr[1]] - travelScheme["destination"][tempArr[2]] ) *
            ( travelScheme["transportPrice"][tempArr[3]] - 
            ( travelScheme["paymentDiscount"][emoney] * travelScheme["transportPrice"][tempArr[3]]) / 100);

        resObj.push({
            name: tempArr[0],
            departureCity: tempArr[1],
            destinationCity: tempArr[2],
            transport: tempArr[3],
            totalCost: total,
        });
    });
    // wlee
    return resObj.sort((a, b) => b.totalCost - a.totalCost);
}

console.log(
    travelingIndonesia(
        [
            "Danang-Yogyakarta-Semarang-Bis",
            "Alif-Denpasar-Surabaya-Kereta",
            "Bahari-Semarang-Denpasar-Pesawat",
        ],
        "OVO"
    )
);
/*
[
    {
        name: "Bahari",
        departureCity: "Semarang",
        destinationCity: "Denpasar",
        transport: "Pesawat",
        totalCost: 467500,
    },
    {
        name: "Alif",
        departureCity: "Denpasar",
        destinationCity: "Surabaya",
        transport: "Kereta",
        totalCost: 212500,
    },
    {
        name: "Danang",
        departureCity: "Yogyakarta",
        destinationCity: "Semarang",
        transport: "Bis",
        totalCost: 191250,
    },
];
*/
console.log(
    "=================================================================================================="
);
console.log(
    travelingIndonesia(
        [
            "Shafur-Surabaya-Yogyakarta-Kereta",
            "Taufik-Semarang-Surabaya-Pesawat",
            "Alex-Yogyakarta-Semarang-Kereta",
        ],
        "Dana"
    )
);
/*
[
    {
        name: "Shafur",
        departureCity: "Surabaya",
        destinationCity: "Yogyakarta",
        transport: "Kereta",
        totalCost: 450000,
    },
    {
        name: "Taufik",
        departureCity: "Semarang",
        destinationCity: "Surabaya",
        transport: "Pesawat",
        totalCost: 247500,
    },
    {
        name: "Alex",
        departureCity: "Yogyakarta",
        destinationCity: "Semarang",
        transport: "Kereta",
        totalCost: 225000,
    },
];
*/
console.log(
    "=================================================================================================="
);
console.log(
    travelingIndonesia(
        ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
        "Gopay"
    )
);
/*
[
    {
        name: "Katy",
        departureCity: "Surabaya",
        destinationCity: "Denpasar",
        transport: "Pesawat",
        totalCost: 261250,
    },
    {
        name: "Andika",
        departureCity: "Denpasar",
        destinationCity: "Surabaya",
        transport: "Bis",
        totalCost: 213750,
    },
];
*/
console.log(
    "=================================================================================================="
);
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
/*
[
    {
        name: "Putra",
        departureCity: "Denpasar",
        destinationCity: "Yogyakarta",
        transport: "Pesawat",
        totalCost: 825000,
    },
];
*/
console.log(travelingIndonesia([], "Cash")); // [];
