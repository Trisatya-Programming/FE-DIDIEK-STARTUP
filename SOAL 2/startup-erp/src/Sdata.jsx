import web from "../src/images/s1.jpg";
import app from "../src/images/app.jpeg";
import software from "../src/images/software.jpeg";

const Sdata = [
  {
    imgsrc: web,
    title: "Basic",
    description: "Mencatat Barang Masuk, Mencatat Barang Keluar, Mencatat Hasil Keuntungan.",
    harga: "Rp1.500.000",
  },
  {
    imgsrc: app,
    title: "Business",
    description: "Mencatat Barang Masuk dan Keluar, Mencatat Keuntungan, Dapat menganalisa hasil penjualan dengan CHART, Support 7x24 Jam.",   
    harga: "Rp2.500.000", 
  },
  {
    imgsrc: software,
    title: "Enterpreneur",
    description: "Mencatat Barang Masuk dan Keluar, Mencatat Keuntungan, Dapat menganalisa hasil penjualan dengan CHART, Support 7x24 Jam, Export Data ke Excel, AI Prediksi Penghasilan.",
    harga: "Rp3.500.000",    
  },
];

export default Sdata;
