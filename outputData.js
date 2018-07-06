const fs = require('fs');
module.exports = class OutputData {

    clearResultsFile(sourcePath) {
        try {
            fs.writeFileSync(sourcePath, '');
        } catch (err) {
            console.log("trouble in OutputData:clearResultFile with parameters: " + "sourcepath= " + sourcePath);
            /* Handle the error */
        }
    }

    appendDataToFile(sourcePath, data, option = null) {
        try {
            fs.appendFileSync(sourcePath, `${data}\r\n`, option);
        } catch (err) {
            console.log("trouble in OutputData:appendDataToFile with parameters: " + "sourcepath= " + sourcePath + " data= " + data + " option= " + option);
            /* Handle the error */
        }
    }
};