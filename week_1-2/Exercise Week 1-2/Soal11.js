const d = new Date();
const tahunSekarang = d.getFullYear();
const tahunlahir = 2007;
const umur = tahunSekarang - tahunlahir;
if (umur >= 17) {
    console.log('anda sudah dewasa')
} else {
    console.log('anda belum dewasa')
}