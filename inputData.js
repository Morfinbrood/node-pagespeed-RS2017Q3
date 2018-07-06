const fs = require('fs');
module.exports = class InputData {
    urlsFromFile(sourcePath, option = null) {
        let data = null;
        try {
            data = fs.readFileSync(sourcePath, option);
        } catch (err) {
            console.log("trouble in InputData:urlsFromFile with parameters: " + "sourcepath= " + sourcePath + " option= " + option);
            /* Handle the error */
        }

        if (!data) {
            console.log("Data = null trouble in InputData:urlsFromFile with parameters: " + "sourcepath= " + sourcePath + " option= " + option);
            /* Handle the error */
            return error;
        }
        return data.split(/\r\n|\n/);
    }
};