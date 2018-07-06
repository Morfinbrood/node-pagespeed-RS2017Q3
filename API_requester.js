const https = require('https');
const outputModul = require('./outputData');

const outputer = new outputModul();

module.exports = class API_requester {

    constructor(API_url, resultsFilePath) {
        this.API_url = API_url;
        this.resultsFilePath = resultsFilePath;
    }

    requestUrlsFromArrWithInterval(arr, interval) {
        let i = 0;
        const that = this;
        let timerId = setInterval(function () {
            that.requestUrl(arr[i]);
            if (i == arr.length - 1) {
                clearInterval(timerId);
            }
            i++;
        }, interval);
        console.log('Scan started');
    }

    requestUrl(url) {
        https.get(this.API_url + '?url=' + url, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                let result = JSON.parse(data);
                if (result.error) {
                    console.log(url);
                    console.log("Result failed");
                }
                else {
                    outputer.appendDataToFile(this.resultsFilePath, JSON.stringify(result));
                    console.log(url);
                    console.log("Result success");
                }
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }

};