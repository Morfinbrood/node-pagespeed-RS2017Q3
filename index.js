const inputDataModul = require('./inputData');
const apiRequesterModul = require('./API_requester');
const outputModul = require('./outputData');

const nodeArgs = require('./argsValidator');
const inputFilePath = nodeArgs.inputFilePath;
const resultsFilePath = nodeArgs.resultsFilePath;

// for tests
// const inputFilePath='./urls.txt';
// const resultsFilePath = './results';

// constants
const API_url = 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed';
const requestInterval = 2000;

// sync
const input = new inputDataModul();

const urls = input.urlsFromFile(inputFilePath, 'utf8');

const outputer = new outputModul();
outputer.clearResultsFile(resultsFilePath);

// async
let apiRequester = new apiRequesterModul(API_url, resultsFilePath);

apiRequester.requestUrlsFromArrWithInterval(urls, requestInterval);
