import { matches } from "./matchesData.js";
// matches played per year

const matchesPlayedPerYear = function matchesPlayed(result) {
    let matchesPerYear = {};
    result.map(matchSeason => matchesPerYear.hasOwnProperty(matchSeason.season) ? matchesPerYear[matchSeason.season]
     += 1 : matchesPerYear[matchSeason.season] = 1);
   
    return matchesPerYear;
}


 export { matchesPlayedPerYear }


// matches played by team per year

const matchWonPerTeam = function wonPerTeam(result) {
    let matchWon = {};
    result.map(match => matchWon[match.winner] = {});
    result.map(match => matchWon[match.winner][match.season] = 0);
    result.map(match => matchWon[match.winner][match.season] += 1);
    
    return matchWon;
}


export { matchWonPerTeam }


