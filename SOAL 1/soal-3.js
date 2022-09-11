// SOAL TEST 1
// Nomor 3
// Input Data String Terbalik (True/False)

// Membuat konstanta prompt untuk input data
const prompt = require("prompt-sync")({sigint: true});
function StringTerbalik(str) {
 
    // Melakukan pengecekan input
    if(!str || str.length < 2 ||
            typeof str!== 'string') {
        console.log("Tidak sesuai!")
        // Jika diinput bukan string bernilai False
        return false;
    }
     
    // Membuat konstanta array
    const revArray = [];
    const length = str.length - 1;
     
    // Melakukan perulangan dari akhir huruf string
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
     
    // Melakukan penggabungan elemen array
    console.log(revArray.join(''));
    // Jika terbalik bernilai True
    return true;
}
 
console.log("===========================");
console.log("SOAL NOMOR 3");
console.log("===========================");
nama = (prompt("Masukkan Nama = "));
console.log("===========================");
console.log("String Terbalik");
console.log("===============");
StringTerbalik(nama);
console.log("===============");