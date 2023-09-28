const path = require('path');


function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '../public/images/gambar.jpg'));
    // res.send('hello albertt')
}

function postMessages(req, res) {
    console.log('updating messages.....')
}


module.exports = {
    getMessages,
    postMessages
}