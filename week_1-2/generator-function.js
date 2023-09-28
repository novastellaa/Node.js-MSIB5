function* create() {
    yield 'nova'
    yield 'stella'
};

const nama = create();
for (const name of nama) {
    console.log(name)
};

// lazy
function* buatGanjil(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(`yield ${i}`); //sifatnya laxy
            yield i;
        }
    }
}


// eager
function buatGanjilArray(n) {
    const result = []
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(`yield ${i}`); //sifatnya laxy
            result.push(i);
        }
    }
    return result;
}

const numbers = buatGanjil(10)
    // for (const angka of numbers) {
    //     console.log(angka)
    // };
console.log(numbers.next().value);
console.log(numbers.next().value); // function milik generator yang memanggil 1 kali(satu satu)