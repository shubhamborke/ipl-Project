// // matches played per year
const matchesPlayedPerYear = function matchesPlayed(result) {
  const accumlator = result.reduce((accumlator, matchSeason) => {
    if (accumlator[matchSeason.season]) {
      accumlator[matchSeason.season] += 1;
    } else {
      accumlator[matchSeason.season] = 1;
    }

    return accumlator;
  }, {});
  return accumlator;
};

// matches played by team per year
const matchWonPerTeam = function wonPerTeam(result) {
  let matchWon = {};
  const winningTeams = result.reduce((winningTeams, match) => {
    if (winningTeams[match.winner] && winningTeams[match.winner] !== "") {
      if (winningTeams[match.winner][match.season]) {
        winningTeams[match.winner][match.season] += 1;
      } else {
        winningTeams[match.winner][match.season] = 1;
      }
    } else {
      winningTeams[match.winner] = {};
    }
    return winningTeams;
  }, {});

  return winningTeams;
};

// // extra runs conceded by team in 2016

const extraRunsIn2016 = function extraRuns(matchData, deliveryData) {
  const years2016 = matchData
    .filter((season) => season.season === "2016")
    .map((ids) => ids.id);
  const deliveriesFor2016 = deliveryData
    .filter((element) => {
      if (years2016.includes(element.match_id)) {
        return element;
      }
    })
    .reduce((deliveriesFor2016, elements) => {
      if (deliveriesFor2016[elements.bowling_team]) {
        deliveriesFor2016[elements.bowling_team] += Number(elements.extra_runs);
      } else {
        deliveriesFor2016[elements.bowling_team] = Number(elements.extra_runs);
      }
      return deliveriesFor2016;
    }, {});
  return deliveriesFor2016;
};

// // // // // Economical top 10 bowler

const topEconomicBowler = function economicBowlers(matchData, deliveryData) {
  let economic = {};
  let economyPlayers = {};
  const year2015 = matchData
    .filter((season) => season.season === "2015")
    .map((ids) => ids.id);
  const deliveryRuns = deliveryData
    .filter((element) => year2015.includes(element.match_id))
    .reduce((deliveryRuns, elements) => {
      if (deliveryRuns[elements.bowler]) {
        deliveryRuns[elements.bowler] += Number(elements.total_runs);
      } else {
        deliveryRuns[elements.bowler] = Number(elements.total_runs);
      }
      return deliveryRuns;
    }, {});
  const deliveryOvers = deliveryData
    .filter((element) => year2015.includes(element.match_id))
    .reduce((deliveryOvers, elements) => {
      if (deliveryOvers[elements.bowler]) {
        deliveryOvers[elements.bowler] += 1;
      } else {
        deliveryOvers[elements.bowler] = 1;
      }
      return deliveryOvers;
    }, {});

  for (let bowler in deliveryOvers) {
    deliveryOvers[bowler] /= 6;
  }
  for (let key in deliveryRuns) {
    economic[key] = deliveryRuns[key] / deliveryOvers[key];
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
  const tossMatch = result
    .filter((tossAndMatch) => tossAndMatch.toss_winner === tossAndMatch.winner)
    .reduce((tossMatch, tossWin) => {
      if (tossMatch[tossWin.winner]) {
        tossMatch[tossWin.winner] += 1;
      } else {
        tossMatch[tossWin.winner] = 1;
      }
      return tossMatch;
    }, {});
  return tossMatch;
};

//  Player awarded most per season

const mostMatchAwards = function matchAwards(result) {
  let awardedPlay = {};
  const seasons = result.reduce((seasons, match) => {
    if (seasons[match.season]) {
      if (seasons[match.season][match.player_of_match]) {
        seasons[match.season][match.player_of_match] += 1;
      } else {
        seasons[match.season][match.player_of_match] = 1;
      }
    } else {
      seasons[match.season] = {};
    }
    return seasons;
  }, {});
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
  let strikeRate = {};
  let copyOfBatsman = {};
  const batsmanRun = matchdata.reduce((batsmanRun, season) => {
    batsmanRun[season.season] = {};
    return batsmanRun;
  }, {});
  const bowlPlayed = matchdata.reduce((bowlPlayed, season) => {
    bowlPlayed[season.season] = {};
    return bowlPlayed;
  }, {});

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
  let player = [];
  const maxCount = result.reduce((maxCount, dismiss) => {
    if (dismiss.player_dismissed !== "") {
      maxCount[dismiss.player_dismissed] = {};
    }
    return maxCount;
  }, {});

  const dismissPlayer = result.reduce((dismissPlayer, dismiss) => {
    if (dismiss.player_dismissed !== "") {
      dismissPlayer[dismiss.player_dismissed] = {};
    }
    return dismissPlayer;
  }, {});

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
  // let totalOver = {};
  let economyInSuperOver = {};
  const totalRuns = result
    .filter((totalRun) => totalRun.is_super_over !== "0")
    .reduce((totalRuns, runs) => {
      if (totalRuns[runs.bowler]) {
        totalRuns[runs.bowler] += Number(runs.total_runs);
      } else {
        totalRuns[runs.bowler] = Number(runs.total_runs);
      }
      return totalRuns;
    }, {});
  const totalOver = result
    .filter((totalRun) => totalRun.is_super_over !== "0")
    .reduce((totalOver, runs) => {
      if (totalOver[runs.bowler]) {
        totalOver[runs.bowler] += 1;
      } else {
        totalOver[runs.bowler] = 1;
      }
      return totalOver;
    }, {});

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
