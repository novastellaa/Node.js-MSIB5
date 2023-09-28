const axios = require('axios');

axios.get('https://www.google.com')
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.loge(err)
    })
    .then(() => {
        console.log('all done!')
    })