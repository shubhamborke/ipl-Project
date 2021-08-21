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


