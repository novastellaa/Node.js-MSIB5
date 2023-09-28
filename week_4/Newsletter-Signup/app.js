const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public")); // metode express agar membuat page static folder supaya bisa di akses di satu folder

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html") // mengatur rute get ke halaman signup agar tampil di port 3000
});

app.post('/', function(req, res) { // mengambil data dari form dan console log ke server
    const firstName = req.body.fName;
    const lastName = req.body.lName
    const email = req.body.email;
    // console.log(firstName, lastName, email);

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    }
    const jsonData = JSON.stringify(data);

    const url = "https://us17.api.mailchimp.com/3.0/lists/b90e6bc011";

    const options = {
        method: 'POST',
        auth: 'novastella:abc552e22de730b48c009854a265c8005-us17'
    }
    const request = https.request(url, options, function(response) {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/succes.html")
        } else {
            res.sendFile(__dirname + "/failure.html")
        }


        response.on("data", function(data) {
            console.log(JSON.parse(data))
        })
    })
    request.write(jsonData);
    request.end()
});

app.post("/failure", function(req, res) {
    res.redirect('/')
});

app.listen(3000, function() {
    console.log("server is running on port 3000")
})



// API KEY
// bc552e22de730b48c009854a265c8005 - us17

// audience id
//b90e6bc011