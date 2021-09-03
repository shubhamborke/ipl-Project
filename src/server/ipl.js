// // matches played per year

const matchesPlayedPerYear = function matchesPlayed(result) {
  let matchesPerYear = {};
  result.map((matchSeason) =>
    matchesPerYear.hasOwnProperty(matchSeason.season)
      ? (matchesPerYear[matchSeason.season] += 1)
      : (matchesPerYear[matchSeason.season] = 1)
  );

  return matchesPerYear;
};

// // matches played by team per year

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

// // extra runs conceded by team in 2016

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

// // // // Economical top 10 bowler

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

// Won tosses and matches

const tossAndMatchWon = function tossAndMachesWinner(result) {
  let tossMatch = {};
  result
    .filter((tossAndMatch) => tossAndMatch.toss_winner === tossAndMatch.winner)
    .map((tossWin) =>
      tossMatch[tossWin.winner]
        ? (tossMatch[tossWin.winner] += 1)
        : (tossMatch[tossWin.winner] = 1)
    );
  return tossMatch;
};

//  Player awarded most per season

const mostMatchAwards = function matchAwards(result) {
  let seasons = {};
  let mostMatch = {};
  let awardedPlay = {};
  result.map((match) => {
    seasons[match.season] = {};
    mostMatch[match.season] = {};
  });
  result.map((match) => {
    seasons[match.season][match.player_of_match] = 0;
  });
  result.map((match) => {
    seasons[match.season][match.player_of_match] += 1;
  });
  let mostAwards = [];
  for (let key in seasons) {
    let las = [];
    for (let keys in seasons[key]) {
      las.push(seasons[key][keys]);
    }
    las = las.sort((a, b) => b - a)[0];
    mostAwards.push(las);
  }
  let index = 0;
  for (let key in seasons) {
    index++;
    for (let keys in seasons[key]) {
      if (seasons[key][keys] === mostAwards[index - 1]) {
        awardedPlay[key] = keys;
      }
    }
  }

  return awardedPlay;
};

// strike rate batsman for each season

const strikeRatePerSeason = function strikeRate(deliverydata, matchdata) {
  let batsmanRun = {};
  let bowlPlayed = {};
  let strikeRate = {};
  let copyOfBatsman = {};
  matchdata.map((season) => {
    batsmanRun[season.season] = {};
    bowlPlayed[season.season] = {};
  });
  let index = 0;
  matchdata.push({ season: 100000 });
  for (let i = 1; i < matchdata.length; i++) {
    if (matchdata[i].season !== matchdata[i - 1].season) {
      copyOfBatsman[matchdata[i - 1].season] = [
        matchdata[index].id,
        matchdata[i - 1].id,
      ];
      index = i;
    }
  }
  matchdata.pop();
  let countSeason = Object.values(copyOfBatsman);
  let keys = Object.keys(copyOfBatsman);
  countSeason.map((loop, index) => {
    deliverydata.map((elem) => {
      if (
        elem.match_id >= Number(loop[0]) &&
        elem.match_id <= Number(loop[1])
      ) {
        if (batsmanRun[keys[index]][elem.batsman]) {
          batsmanRun[keys[index]][elem.batsman] += Number(elem.batsman_runs);
          bowlPlayed[keys[index]][elem.batsman] += 1;
        } else {
          batsmanRun[keys[index]][elem.batsman] = Number(elem.batsman_runs);
          bowlPlayed[keys[index]][elem.batsman] = 1;
        }
      }
    });
  });

  for (let key in batsmanRun) {
    for (let keys in batsmanRun[key]) {
      batsmanRun[key][keys] =
        (batsmanRun[key][keys] * 100) / bowlPlayed[key][keys];
    }
  }
  return batsmanRun;
};

// Player dismissed by another player

const dismissalPlayer = function dismissedPlayer(result) {
  let dismissPlayer = {};
  let player = [];
  let maxCount = {};
  result.map((dismiss) => {
    if (dismiss.player_dismissed !== "") {
      maxCount[dismiss.player_dismissed] = {};
      dismissPlayer[dismiss.player_dismissed] = {};
    }
  });

  for (let key in dismissPlayer) {
    result.map((dismiss) =>
      dismiss.player_dismissed === key
        ? dismissPlayer[key][dismiss.bowler]
          ? (dismissPlayer[key][dismiss.bowler] += 1)
          : (dismissPlayer[key][dismiss.bowler] = 1)
        : null
    );
  }
  for (let key in dismissPlayer) {
    let arr = [];
    for (let keys in dismissPlayer[key]) {
      arr.push(dismissPlayer[key][keys]);
    }
    player.push(Math.max(...arr));
  }
  let index = 0;
  for (let key in dismissPlayer) {
    for (let keys in dismissPlayer[key]) {
      if (dismissPlayer[key][keys] === player[index]) {
        maxCount[key][keys] = player[index];
        break;
      }
    }
    index++;
  }
  return maxCount;
};

//  most economy player in super over

const economyPlayer = function economy(result) {
  let totalRuns = {};
  let totalOver = {};
  let economyInSuperOver = {};
  result
    .filter((totalRun) => totalRun.is_super_over !== "0")
    .map((runs) => {
      if (totalRuns[runs.bowler]) {
        totalRuns[runs.bowler] += Number(runs.total_runs);
      } else {
        totalRuns[runs.bowler] = Number(runs.total_runs);
      }
      if (totalOver[runs.bowler]) {
        totalOver[runs.bowler] += 1;
      } else {
        totalOver[runs.bowler] = 1;
      }
    });

  for (let key in totalOver) {
    totalOver[key] = totalOver[key] / 6;
  }
  for (let key in totalRuns) {
    totalRuns[key] = totalRuns[key] / totalOver[key];
  }
  let arr = [];
  for (let key in totalRuns) {
    arr.push(totalRuns[key]);
  }

  arr.sort((a, b) => a - b);
  arr.map((economy) => {
    for (let key in totalRuns) {
      if (totalRuns[key] === economy) {
        economyInSuperOver[key] = economy;
      }
    }
  });
  return economyInSuperOver;
};

module.exports = {
  matchesPlayedPerYear,
  matchWonPerTeam,
  extraRunsIn2016,
  topEconomicBowler,
  tossAndMatchWon,
  mostMatchAwards,
  strikeRatePerSeason,
  dismissalPlayer,
  economyPlayer,
};
