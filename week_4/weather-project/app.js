const express = require('express');
const https = require('https');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {
    const query = req.body.cityName;
    const apiKey = "bd33c2c13cc25a4a95ce4797a13de484"
    const unit = " metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
    https.get(url, function(response) {
        console.log(response.statusCode);


        response.on("data", function(data) {
            const weatherData = JSON.parse(data)
            const city = weatherData.name;
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description
            const gambar = "https://openweathermap.org/img/wn/04d@2x.png "


            res.write("<p> the weather currently is" + description + "</p>")
            res.write("<h1> the temperatur " + city + " is " + temp + " celcius </h1>")
            res.write("<center><img src=" + gambar + ">")
            res.send()
        })
    })
});




app.listen(3000, function() {
    console.log('server is running on port 3000');
})