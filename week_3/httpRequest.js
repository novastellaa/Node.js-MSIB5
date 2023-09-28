const http = require('https');

const req = http.request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`data chunk is ${chunk}`);
    });
    res.on('end', () => {
        console.log('no more data');
    })
});
req.end();