function sayHello(name) {
    console.log(`hallo ${name}`)
};

sayHello('nopa');

const say = sayHello; //kita bisa merubah fungction menjadi variable

say('stella');

function getName(callback) {
    callback('ijat') //sayHello ('ijat')
};

getName(sayHello);