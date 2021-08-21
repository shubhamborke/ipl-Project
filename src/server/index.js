const matches = require('./csv-matches')
const matchesPlayedPerYear = require('./ipl')
const matchWonPerTeam = require('./ipl')
const extraRunsIn2016 = require('./ipl')


const fs = require('fs');

const function1 = matchesPlayedPerYear(matches);
const function2 = matchWonPerTeam(matches);
const function3 = extraRunsIn2016(matches);



fs.writeFile('src/public/output/matchesPerYear.json', JSON.stringify(function1), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});

fs.writeFile('src/public/output/matchesPlayePerYear.json', JSON.stringify(function2), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});

fs.writeFile('src/public/output/extraRunIn2016.json', JSON.stringify(function3), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});