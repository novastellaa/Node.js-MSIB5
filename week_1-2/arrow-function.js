const sayHello = (name) => {
    const say = (`hello ${name}`)
    console.log(say)
}
sayHello('nopa');

// arrow function tanpa blok
const sayGoodbye = (name) => console.log(`goodbye ${name}`);
sayGoodbye('nopa');

//arrow function return value biasa
const sum = (first, second) => {
    return first + second
}
console.log(sum(10, 10));

//arrow function return tanpa blok
const summ = (first, second) => first + second;
console.log(summ(10, 10));

//