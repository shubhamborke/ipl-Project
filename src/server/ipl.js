import { matches } from "./csv-json.js";


const matchesPlayedPerYear = function matchesPlayed(result) {
    let matchesPerYear = {};
    for (let i = 0; i < result.length; i++) {
        if (matchesPerYear.hasOwnProperty(result[i].season)) {
            matchesPerYear[result[i].season] += 1;
        } else {
            matchesPerYear[result[i].season] = 1;
        }
    }
    return matchesPerYear;
}

console.log(matchesPlayedPerYear(matches));


const matchWonPerTeam = function wonPerTeam(result) {
    let matchWon = {};
    for (let i = 0; i < result.length; i++) {
        if (!matchWon.hasOwnProperty(result[i].winner) && result[i].winner !== "") {
            matchWon[result[i].winner] = {};
        }
    }
    for(let i = 0 ; i < result.length; i++){
        for(let key in matchWon){
            if(key === result[i].winner){
                if(matchWon[result[i].winner][result[i].season]){
                    matchWon[result[i].winner][result[i].season] += 1;
                }else{
                    matchWon[result[i].winner][result[i].season] = 1;
                }
            }
        }
            
    }
    return matchWon;
}

console.log(matchWonPerTeam(matches))
