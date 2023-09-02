// Conditional Statement, Logical Operator

// nilai maks 100, jika >= 90 = A, >= 80 = B, >= 60 = C, else = D

let nilai = 72;

if (nilai > 100 || nilai < 0) {
    console.log("eeh?");
} else if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai == 69) {
    console.log("nice");
} else if (nilai >= 60) {
    console.log("C");
} else {
    console.log("D");
}

// Soal 1

// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
// ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// tips belajar penggunaan `` (backtick) pada javascript agar
// mudah dalam memasukan variabel ke dalam string
// tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
// 1. buat variabel nama dan peran
// 2. cek jika nama kosong maka tampilkan pesan "Nama wajib diisi", code selesai
// 3. jika ada nama dan peran tidak ada maka tampilkan "Pilih Peranmu untuk memulai game", code selesai
// 4. jika ada nama dan peran = Ksatria maka tampilkan `halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`, code selesai
// 5. jika ada nama dan peran = Tabib maka tampilkan `halo Tabib ${nama} , kamu akan membantu temanmu yang terluka!`, code selesai
// 6. jika ada nama dan peran = Penyhir maka tampilkan `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`, code selesai 
// 7. jika ada nama dan peran tidak sesuai dengan pilihan diatas maka tampilkan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
// 8. code selesai
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

//code disini gunakan console.log untuk outputnya
let nama = "yay", peran = "Penyihir";

if (nama == "") {
    console.log("Nama wajib diisi");
} else {
    if (peran == "") {
        console.log("Pilih Peranmu untuk memulai game");
    } else if (peran == "Ksatria") {
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    } else if (peran == "Tabib"){
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka!`);
    } else if (peran == "Penyihir") {
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}


// Soal 2

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
// Gunakan switch case untuk kasus ini!

// Contoh:
// let hari = 21; let bulan = 1; let tahun = 1945;
// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 27; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2006; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch (bulan) {
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break;
    default:
        break;
}

console.log(`${tanggal} ${bulan} ${tahun}`);