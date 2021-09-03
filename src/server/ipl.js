// matches played per year

const matchesPlayedPerYear = function matchesPlayed(result) {
  let matchesPerYear = {};
  result.map((matchSeason) =>
    matchesPerYear.hasOwnProperty(matchSeason.season)
      ? (matchesPerYear[matchSeason.season] += 1)
      : (matchesPerYear[matchSeason.season] = 1)
  );

  return matchesPerYear;
};

export { matchesPlayedPerYear };

// matches played by team per year

const matchWonPerTeam = function wonPerTeam(result) {
  let matchWon = {};
  result.map((match) =>
    matchWon[match.winner]
      ? matchWon[match.winner][match.season]
        ? (matchWon[match.winner][match.season] += 1)
        : (matchWon[match.winner][match.season] = 1)
      : (matchWon[match.winner] = {})
  );
  /*  
            code with if-else seperate
    
      if(matchWon[match.winner]){
      if(matchWon[match.winner][match.season]){
        matchWon[match.winner][match.season] += 1;
      }else{
        matchWon[match.winner][match.season]= 1;
      }
    }else{
      matchWon[match.winner] = {}
    }
      
    })

    */
  /*   code with more iteration seperate


    result.map(match => matchWon[match.winner] = {});
    result.map(match => matchWon[match.winner][match.season] = 0);
    result.map(match => matchWon[match.winner][match.season] += 1);
    */
  return matchWon;
};

export { matchWonPerTeam };

// extra runs conceded by team in 2016

const extraRunsIn2016 = function extraRuns(matchData, deliveryData) {
  let extraRun = {};

  matchData
    .filter((season) => season.season === "2016")
    .map((ids) => {
      let matchId = ids.id;
      return deliveryData
        .filter((compareId) => compareId.match_id === matchId)
        .map((teamExist) =>
          extraRun[teamExist.bowling_team]
            ? (extraRun[teamExist.bowling_team] += Number(teamExist.extra_runs))
            : (extraRun[teamExist.bowling_team] = Number(teamExist.extra_runs))
        );
    });

  //   /*  direct id method will have biggest disadvantage
  //     result.filter(match => match.match_id >= 577).map(bowl => extraRun[bowl.bowling_team] ? extraRun[bowl.bowling_team] += Number(bowl.extra_runs) : extraRun[bowl.bowling_team] = Number(bowl.extra_runs)) */

  return extraRun;
};

export { extraRunsIn2016 };

// // // Economical top 10 bowler

const topEconomicBowler = function economicBowlers(matchData, deliveryData) {
  let totalOver = {};
  let totalRuns = {};
  let economic = {};
  let economyPlayers = {};
  matchData
    .filter((season) => season.season === "2015")
    .map((ids) => {
      let matchId = ids.id;
      deliveryData
        .filter((compareId) => compareId.match_id === matchId)
        .map((teamExist) => {
          if (totalRuns[teamExist.bowler]) {
            totalRuns[teamExist.bowler] += Number(teamExist.total_runs);
          } else {
            totalRuns[teamExist.bowler] = Number(teamExist.total_runs);
          }
          if (totalOver[teamExist.bowler]) {
            totalOver[teamExist.bowler] += 1;
          } else {
            totalOver[teamExist.bowler] = 1;
          }
        });
    });
  for (let bowler in totalOver) {
    totalOver[bowler] /= 6;
  }
  for (let key in totalRuns) {
    economic[key] = totalRuns[key] / totalOver[key];
  }
  let economyArr = [];
  for (let key in economic) {
    economyArr.push(economic[key]);
  }
  economyArr.sort((a, b) => a - b);
  economyArr = economyArr.slice(0, 10);
  economyArr.map((economi) => {
    for (let key in economic) {
      if (economi === economic[key]) {
        economyPlayers[key] = economi;
      }
    }
  });

  /*    Avoided itrating over and over on data. program will blocked or complexity occuers
    // result.filter(delivery => delivery.match_id >= 518 && delivery.match_id <= 576).map(runs => totalRuns[runs.bowler] ? totalRuns[runs.bowler] += +runs.wide_runs + +runs.bye_runs + +runs.legbye_runs + +runs.noball_runs + +runs.penalty_runs + +runs.batsman_runs + +runs.extra_runs: totalRuns[runs.bowler] = +runs.wide_runs + +runs.bye_runs + +runs.legbye_runs + +runs.noball_runs + +runs.penalty_runs + +runs.batsman_runs + +runs.extra_runs);
    // result.filter(delivery => delivery.match_id >= 518 && delivery.match_id <= 576).map(overs => totalOver[overs.bowler] ? totalOver[overs.bowler] += 1 : totalOver[overs.bowler] = 1);
    
    */
  return economyPlayers;
};

export { topEconomicBowler };
