// const request = require('./request');
// const response = require('./response');

import { send } from './request.mjs';
import { read } from './response.mjs';
import { REQUEST_TIMEOUT } from './request.mjs';

function makeRequest(url, data) {
    send(url, data);
    return read();
}
const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);