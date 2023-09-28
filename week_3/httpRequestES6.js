const { get } = require('https'); //langsung buat methode nya jadi gaperlu buat variable lagi

get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`data chunk is ${chunk}`);
    });
    res.on('end', () => {
        console.log('no more data');
    })
});