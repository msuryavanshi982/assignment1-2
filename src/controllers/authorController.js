
const createAuthor = (req,res) => {
    const csvToJson = require("convert-csv-to-json")

    const input = require("../csv/Authors.csv")
    const output = require("db.json")


    csvToJson.generateJsonFileFromCsv(input, output);
    res.send()
}



module.exports={createAuthor}