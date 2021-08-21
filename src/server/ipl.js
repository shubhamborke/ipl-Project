const matches = require("./csv-matches");


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

module.exports = matchesPlayedPerYear;

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

module.exports = matchWonPerTeam;

const extraRunsIn2016 = function extraRuns(result) {
    let extraRun = {};
    for (let i = 0; i < result.length; i++) {
        if (result[i].season === "2016") {
            if (extraRun[result[i].winner]) {
                extraRun[result[i].winner] += Number(result[i].win_by_runs);
            } else {
                extraRun[result[i].winner] = Number(result[i].win_by_runs);
            }
        }
    }
    return extraRun;
}

module.exports = extraRunsIn2016;