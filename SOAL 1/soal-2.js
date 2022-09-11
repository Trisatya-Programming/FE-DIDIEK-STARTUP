// SOAL TEST 1
// Nomor 2
// Pengurutan Input Array Kecil ke Besar dan Besar ke Kecil

// Membuat konstanta prompt untuk input data
const prompt = require("prompt-sync")({sigint: true});

// Membuat variabel 
var done = false; //Variabel done berisikan boolean bernilai false
var inputArray = []; //Variabel array
var size = 5; //Jumlah ukuran maksimal array

// Fungsi bubbleSort untuk mengurutkan dari kecil ke besar
function bubbleSort(array) {
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

console.log("===========================");
console.log("SOAL NOMOR 2");
console.log("===========================");

// Membuat perulangan untuk input data array
for(var i=0; i<size; i++) {
	inputArray[i] = prompt('Masukkan Angka Ke-' + (i+1) + " = ");
  console.log(inputArray);
}

console.log("===========================");
console.log("\n");
console.log("===========================");
console.log("Hasil Pengurutan Angka");
console.log("===========================");
console.log("Kecil Ke Besar");
console.log("==============");
// Pemanggilan Fungsi bubbleSort
bubbleSort(inputArray);
console.log(inputArray);
console.log("===========================");
console.log("Besar Ke Kecil");
console.log("==============");

// Fungsi isSorted untuk membantu proses pengurutan dari besar ke kecil
function isSorted(inputArray){
	for (x=0;x<inputArray.length-1;x++){ 
    if (inputArray[x+1] > inputArray[x]){ 
      return false;
    } 	
	}
	return true;
}

// Membuat perulangan dengan melakukan pemanggilan fungsi isSorted
while (!isSorted(inputArray)){
	for (x=0;x<inputArray.length-1;x++){ 
    if (inputArray[x+1] > inputArray[x]){
		  rx=inputArray[x];
		  inputArray[x]=inputArray[x+1];
		  inputArray[x+1]=rx;	
	  }	
	}
}

// Mencetak hasil perulangan pemanggilan fungsi isSorted
console.log(inputArray);
console.log("===========================");