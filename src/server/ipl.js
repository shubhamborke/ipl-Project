
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


// extra runs conceded by team in 2016

const extraRunsIn2016 = function extraRuns(result) {
    let extraRun = {};
    result.filter(matche => matche.match_id >= 577).map(bowl => extraRun[bowl.bowling_team] ? extraRun[bowl.bowling_team] += Number(bowl.extra_runs) : extraRun[bowl.bowling_team] = Number(bowl.extra_runs))
   
    return extraRun;
}


export { extraRunsIn2016 }



