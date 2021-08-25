
// matches played per year

const matchesPlayedPerYear = function matchesPlayed(result) {
    let matchesPerYear = {};
    result.map(matchSeason => matchesPerYear.hasOwnProperty(matchSeason.season) ? matchesPerYear[matchSeason.season] += 1 : matchesPerYear[matchSeason.season] = 1);
   
    return matchesPerYear;
}


 export { matchesPlayedPerYear }


// matches played by team per year

// const matchWonPerTeam = function wonPerTeam(result) {
//     let matchWon = {};
//     for (let i = 0; i < result.length; i++) {
//         if (!matchWon.hasOwnProperty(result[i].winner) && result[i].winner !== "") {
//             matchWon[result[i].winner] = {};
//         }
//     }
//     for (let i = 0; i < result.length; i++) {
//         for (let key in matchWon) {
//             if (key === result[i].winner) {
//                 if (matchWon[result[i].winner][result[i].season]) {
//                     matchWon[result[i].winner][result[i].season] += 1;
//                 } else {
//                     matchWon[result[i].winner][result[i].season] = 1;
//                 }
//             }
//         }

//     }
//     return matchWon;
// }

// export { matchWonPerTeam }


// // extra runs conceded by team in 2016

// const extraRunsIn2016 = function extraRuns(result) {
//     let extraRun = {};
//     for (let i = 0; i < result.length; i++) {
//         if (result[i].match_id >= 577) {
//             if (extraRun[result[i].bowling_team]) {
//                 extraRun[result[i].bowling_team] += Number(result[i].extra_runs);
//             } else {
//                 extraRun[result[i].bowling_team] = Number(result[i].extra_runs);
//             }
//         }
//     }
//     return extraRun;
// }


// export { extraRunsIn2016 }


// // Economical top 10 bowler


// const topEconomicBowler = function economicBowlers(result) {
//     let totalOver = {};
//     let totalRuns = {};
//     let economic = {};
//     let economyPlayers = {};
//     for (let i = 0; i < result.length; i++) {
//         if (result[i].match_id >= 518 && result[i].match_id <= 576) {
//             if (totalRuns[result[i].bowler]) {
//                 totalRuns[result[i].bowler] += Number(result[i].wide_runs)+Number(result[i].bye_runs)+Number(result[i].legbye_runs)+Number(result[i].noball_runs)+Number(result[i].penalty_runs)+Number(result[i].wide_runs)+Number(result[i].batsman_runs)+Number(result[i].extra_runs)
//             } else {
//                 totalRuns[result[i].bowler] = Number(result[i].wide_runs)+Number(result[i].bye_runs)+Number(result[i].legbye_runs)+Number(result[i].noball_runs)+Number(result[i].penalty_runs)+Number(result[i].wide_runs)+Number(result[i].batsman_runs)+Number(result[i].extra_runs)
//             }
//         }
//         if (result[i].match_id >= 518 && result[i].match_id <= 576) {
//             if (totalOver[result[i].bowler]) {
//                 totalOver[result[i].bowler] += 1;
//             } else {
//                 totalOver[result[i].bowler] = 1;
//             }
//         }
//     }
//     for (let bowler in totalOver) {
//         totalOver[bowler] /= 6;
//     }
    
//     for (let key in totalRuns) {
//         economic[key] = totalRuns[key] / totalOver[key];
//     }
//     let economyArr = [];
//     for(let key in economic){
//         economyArr.push(economic[key])
//     }
//     economyArr.sort((a,b)=>a-b);
//     economyArr = economyArr.slice(0,10)
//     for(let i = 0 ; i < economyArr.length; i++){
//         for(let key in economic){
//             if(economyArr[i] === economic[key]){
//                 economyPlayers[key] = economyArr[i];
//             }
//         }
//     }
//     return economyPlayers
// }

// export { topEconomicBowler }
