// // global scope 
// let i = 20;

// for (let i = 0; i <= 10; i++) {
//     // local scope
//     console.log(`local ${i}`)
// };
// console.log(`global ${i}`);

var n = 20;

for (var n = 0; n <= 5; n++) {
    console.log(`local ${n}`)
};
console.log(`global ${n}`);