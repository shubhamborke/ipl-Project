import { matches } from './matchesData.js';
import { deliveries } from './deliveriesData.js';
import { matchesPlayedPerYear } from './ipl.js';
import { matchWonPerTeam } from './ipl.js';
import { extraRunsIn2016 } from './ipl.js';
import { topEconomicBowler } from './ipl.js';
import fs from 'fs';


const matchesPerYear = matchesPlayedPerYear(matches);
const matchesWonByTeam = matchWonPerTeam(matches);
const extraRun = extraRunsIn2016(matches, deliveries);
const top10EconomiBowler = topEconomicBowler(matches, deliveries);



fs.writeFile('src/public/output/matchesPerYear.json', JSON.stringify(matchesPerYear,null,2), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});

fs.writeFile('src/public/output/matchesWonPerYear.json', JSON.stringify(matchesWonByTeam,null,2), 'utf8', (err) =>{
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

fs.writeFile('src/public/output/top10EconomiBowler.json', JSON.stringify(top10EconomiBowler,null,2), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
});
