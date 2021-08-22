import { matches } from './csv-matches.js';
import { deliveries } from './csv-deliveries.js';
import { matchesPlayedPerYear } from './ipl.js';
import { matchWonPerTeam } from './ipl.js';
import { extraRunsIn2016 } from './ipl.js';
import fs from 'fs';



const matchesPerYear = matchesPlayedPerYear(matches);
const matchesPlayedByTeam = matchWonPerTeam(matches);
const extraRun = extraRunsIn2016(deliveries);



fs.writeFile('src/public/output/matchesPerYear.json', JSON.stringify(matchesPerYear,null,2), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});

fs.writeFile('src/public/output/matchesPlayePerYear.json', JSON.stringify(matchesPlayedByTeam,null,2), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});

fs.writeFile('src/public/output/extraRunIn2016.json', JSON.stringify(extraRun,null,2), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});