     
     // matches played per year

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

export { matchesPlayedPerYear }


        // matches played by team per year

const matchWonPerTeam = function wonPerTeam(result) {
    let matchWon = {};
    for (let i = 0; i < result.length; i++) {
        if (!matchWon.hasOwnProperty(result[i].winner) && result[i].winner !== "") {
            matchWon[result[i].winner] = {};
        }
    }
    for (let i = 0; i < result.length; i++) {
        for (let key in matchWon) {
            if (key === result[i].winner) {
                if (matchWon[result[i].winner][result[i].season]) {
                    matchWon[result[i].winner][result[i].season] += 1;
                } else {
                    matchWon[result[i].winner][result[i].season] = 1;
                }
            }
        }

    }
    return matchWon;
}

export { matchWonPerTeam }


        // extra runs conceded by team in 2016

const extraRunsIn2016 = function extraRuns(result) {
    let extraRun = {};
    for (let i = 0; i < result.length; i++) {
        if (result[i].match_id >= 577) {
            if(extraRun[result[i].bowling_team]){
                extraRun[result[i].bowling_team] += Number(result[i].extra_runs);
            }else{
                extraRun[result[i].bowling_team] = Number(result[i].extra_runs);
            }
        }
    }
    return extraRun;
}


export { extraRunsIn2016 }

