const nilai = 30; // global scope

function aritmatika(nilai) {
    const hasil = nilai * 2 // hasil adalah lokal scope
    return hasil;
}

const hasil = aritmatika(nilai);
console.log(hasil);

// contoh nested function scope
function first() {
    let nama = 'nopa'

    function second() {
        console.log(nama);
    }
    second();
    console.log(second); // eroor
};