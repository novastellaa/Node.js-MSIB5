const model = require('../models/friends.model');

function getFriends(req, res) {
    res.json(model)
}


function getFriendsId(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "friends do not exist"
        });
    }
}

function postFriends(req, res) {

    if (!req.body.name) {
        return res.status(400).json({
            error: 'missing friends name'
        })
    }

    const newFriend = {
        id: model.length,
        name: req.body.name
    };
    model.push(newFriend);

    res.json(newFriend);
}

module.exports = {
    getFriends,
    getFriendsId,
    postFriends
}