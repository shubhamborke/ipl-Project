const fs = require('fs')
const csv = require('csvtojson')
const path = require('path')


const deliveriesPath = 'src/data/deliveries.csv';
const matchesPath = 'src/data/matches.csv';
    
function csvToJsonFile(jsonFilePath, fileName){
let absPath = path.join(__dirname, `/${fileName}.json`)
    csv()
.fromFile(jsonFilePath)
.then((jsonObj)=>{
    
fs.writeFile(absPath, JSON.stringify(jsonObj), (err, data) => err ? console.log(err) : console.log("written successeful"))
    
})
}

csvToJsonFile(deliveriesPath, "deliveriesData");
csvToJsonFile(matchesPath, "matchesData")