import { testData } from './testData';
import * as fs from 'fs';

const output = JSON.stringify(testData);
fs.writeFile('db.json', output, 'utf8', function (err) {
    if (err) {
        console.log("An error occurred while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});