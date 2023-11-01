//require
const express = require('express');
const app = express();
const PORT = 3000;
const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');
const path = require('path');



app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});


app.use('/site', express.static(path.join(__dirname, 'public'))); //static 
app.use(express.json());

// friends controller
app.post('/friends', friendsController.postFriends);

app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId', friendsController.getFriendsId);

// messages controller
app.get('/messages', messagesController.getMessages);

app.post('/messages', messagesController.postMessages);

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
});