const { log } = require('console');
const http = require('http');
const { url } = require('inspector');
const port = 300;
const sever = http.createServer((req, res) => { //req dan res itu request dan respon
    if (req, url === '/') {
        res.write('<h1>hello</h1>');
        res.end();

    } else if (req, res === '/about') {
        res.write('<h1>ini halaman about</h1>')
        res.end();
    } else {}
});