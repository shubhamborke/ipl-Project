
import fs from 'fs';
import csv from 'csvtojson';



const deliveriesPath = 'src/data/deliveries.csv';
const matchesPath = 'src/data/matches.csv';
    
function csvToJsonFile(jsonFilePath, fileName){

    csv()
.fromFile(jsonFilePath)
.then((jsonObj)=>{
    
fs.writeFile(`/home/shubham/hello/vscodes/IPL-Project/src/server/${fileName}.js`, JSON.stringify(jsonObj), (err, data) => err ? console.log(err) : console.log("written successeful"))
    
})
}

csvToJsonFile(deliveriesPath, "deliveriesData");
csvToJsonFile(matchesPath, "matchesData")