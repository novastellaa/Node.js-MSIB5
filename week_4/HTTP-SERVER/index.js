const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [{
        id: 0,
        name: 'novastella',
    },
    {
        id: 1,
        name: 'ijatkamal',
    }
]

server.on('request', (req, res) => {
    const items = req.url.split('/')
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Rewuest:', data);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);
    } else if (req.method === 'POST' && items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (req.method === 'POST' && items[1] === 'friends') {

    };

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
})