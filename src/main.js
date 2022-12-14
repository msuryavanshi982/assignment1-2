let csvToJson = require('convert-csv-to-json');

let fileInputName = 'src/csv/Authors.csv'; 
let fileOutputName = 'authors.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);


let fileInputName1 = 'src/csv/Books.csv'; 
let fileOutputName1 = 'books.json';

csvToJson.generateJsonFileFromCsv(fileInputName1,fileOutputName1);



let fileInputName2 = 'src/csv/Magazines.csv'; 
let fileOutputName2 = 'Magazines.json';

csvToJson.generateJsonFileFromCsv(fileInputName2,fileOutputName2);
