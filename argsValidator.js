if (process.argv.length <= 3) {
    console.log("You did not enter all the arguments. Try again.");
    console.log("Example: node index.js ./urls.txt ./results");
    process.exit(-1);
}

module.exports = {
    'inputFilePath': process.argv[2],
    'resultsFilePath': process.argv[3]
}