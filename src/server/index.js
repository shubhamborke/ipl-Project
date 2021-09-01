import { matches } from './matchesData.js';
import { deliveries } from './deliveriesData.js';
import { matchesPlayedPerYear, mostMatchAwards } from './ipl.js';
import { matchWonPerTeam } from './ipl.js';
import { extraRunsIn2016 } from './ipl.js';
import { topEconomicBowler } from './ipl.js';
import { tossAndMatchWon } from './ipl.js';
import { strikeRatePerSeason } from './ipl.js';
import { dismissalPlayer } from './ipl.js';
import { economyPlayer } from './ipl.js';
import fs from 'fs';


const matchesPerYear = matchesPlayedPerYear(matches);
const matchesWonByTeam = matchWonPerTeam(matches);
const extraRun = extraRunsIn2016(deliveries);
const top10EconomiBowler = topEconomicBowler(deliveries);
const tossAndMachesWonPerTeam = tossAndMatchWon(matches);
const mostMatch = mostMatchAwards(matches);
const strikeRatePerPerson = strikeRatePerSeason(deliveries, matches);
const highestDissmissalPlayer = dismissalPlayer(deliveries);
const bestEconomyPlayer = economyPlayer(deliveries);



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

fs.writeFile('src/public/output/tossAndMachesWinner.json', JSON.stringify(tossAndMachesWonPerTeam,null,2), 'utf8', (err) =>{
  if(err){
      console.log(err);
  }else{
      console.log("written successful");
  }
});

fs.writeFile('src/public/output/mostMatchAward.json', JSON.stringify(mostMatch,null,2), 'utf8', (err) =>{
  if(err){
      console.log(err);
  }else{
      console.log("written successful");
  }
});

fs.writeFile('src/public/output/strikeRatePerSeason.json', JSON.stringify(strikeRatePerPerson,null,2), 'utf8', (err) =>{
  if(err){
      console.log(err);
  }else{
      console.log("written successful");
  }
});

fs.writeFile('src/public/output/dismissalPlayer.json', JSON.stringify(highestDissmissalPlayer,null,2), 'utf8', (err) =>{
  if(err){
      console.log(err);
  }else{
      console.log("written successful");
  }
});

fs.writeFile('src/public/output/bestEconomyPlayers.json', JSON.stringify(bestEconomyPlayer,null,2), 'utf8', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("written successful");
    }
  });