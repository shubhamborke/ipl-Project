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

  return economyPlayers;
};

export { topEconomicBowler };
