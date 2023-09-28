// anym function di variable
let say = function(name) {
    console.log(`selamat pagi ${name}`)
};

say('nova');

function getName(callback) {
    callback('ijat')
};

getName(function(name) {
    console.log(`hallo ${name}`)
});