// Fungsi untuk menjalankan operasi matematika
function hitung(angka1, angka2, operasi) {
    return operasi(angka1, angka2);
}

// Fungsi penjumlahan
function penjumlahan(angka1, angka2) {
    return angka1 + angka2;
}

// Fungsi pengurangan
function pengurangan(angka1, angka2) {
    return angka1 - angka2;
}

// Contoh penggunaan
const hasilPenjumlahan = hitung(5, 3, penjumlahan);
const hasilPengurangan = hitung(10, 2, pengurangan);

console.log("Hasil Penjumlahan: " + hasilPenjumlahan);
console.log("Hasil Pengurangan: " + hasilPengurangan);