function rekursif(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * rekursif(n - 1);
    }
}
console.info(rekursif(7)); // pemanggilan secara instant

// manual cara
// const n = 7;
// const hasil = rekursif(n);
// console.log(hasil);