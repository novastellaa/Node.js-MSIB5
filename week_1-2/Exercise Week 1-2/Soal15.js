function cekBilangan(bilangan) {
    if (bilangan % 2 !== 0) {
        return ('bilangan ganjil')
    } else {
        return ('bilangan genap')
    }
}

const bilangan = 13;
const cek = cekBilangan(bilangan);
console.log(cek);