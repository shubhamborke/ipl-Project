import { matches } from './csv-matches.js';
import { matchesPlayedPerYear } from './ipl.js';
import { matchWonPerTeam } from './ipl.js';
import { extraRunsIn2016 } from './ipl.js';
import fs from 'fs';



const function1 = matchesPlayedPerYear(matches);
const function2 = matchWonPerTeam(matches);
const function3 = extraRunsIn2016(matches);



fs.writeFile('src/public/output/matchesPerYear.json', JSON.stringify(function1,null,2), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});

fs.writeFile('src/public/output/matchesPlayePerYear.json', JSON.stringify(function2,null,2), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});

fs.writeFile('src/public/output/extraRunIn2016.json', JSON.stringify(function3,null,2), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});