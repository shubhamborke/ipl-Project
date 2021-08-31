import { deliveries } from "./deliveriesData.js";
import { matches } from "./matchesData.js";
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
  result.map((match) => (matchWon[match.winner] = {}));
  result.map((match) => (matchWon[match.winner][match.season] = 0));
  result.map((match) => (matchWon[match.winner][match.season] += 1));

  return matchWon;
};

export { matchWonPerTeam };

// extra runs conceded by team in 2016

const extraRunsIn2016 = function extraRuns(result) {
  let extraRun = {};
  result
    .filter((matche) => matche.match_id >= 577)
    .map((bowl) =>
      extraRun[bowl.bowling_team]
        ? (extraRun[bowl.bowling_team] += Number(bowl.extra_runs))
        : (extraRun[bowl.bowling_team] = Number(bowl.extra_runs))
    );

  return extraRun;
};

export { extraRunsIn2016 };

// // Economical top 10 bowler

const topEconomicBowler = function economicBowlers(result) {
  let totalOver = {};
  let totalRuns = {};
  let economic = {};
  let economyPlayers = {};
  result
    .filter((delivery) => delivery.match_id >= 518 && delivery.match_id <= 576)
    .map((runs) =>
      totalRuns[runs.bowler]
        ? (totalRuns[runs.bowler] +=
            +runs.wide_runs +
            +runs.bye_runs +
            +runs.legbye_runs +
            +runs.noball_runs +
            +runs.penalty_runs +
            +runs.batsman_runs +
            +runs.extra_runs)
        : (totalRuns[runs.bowler] =
            +runs.wide_runs +
            +runs.bye_runs +
            +runs.legbye_runs +
            +runs.noball_runs +
            +runs.penalty_runs +
            +runs.batsman_runs +
            +runs.extra_runs)
    );
  result
    .filter((delivery) => delivery.match_id >= 518 && delivery.match_id <= 576)
    .map((overs) =>
      totalOver[overs.bowler]
        ? (totalOver[overs.bowler] += 1)
        : (totalOver[overs.bowler] = 1)
    );
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

export { tossAndMatchWon };

//  Player awarded most per season

const mostMatchAwards = function matchAwards(result) {
  let seasons = {};
  let mostMatch = {};
  let awardedPlay = {};
  result.map((match) => (seasons[match.season] = {}));
  result.map((match) => (mostMatch[match.season] = {}));
  result.map((player) => (seasons[player.season][player.player_of_match] = 0));
  result.map((player) => (seasons[player.season][player.player_of_match] += 1));
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

export { mostMatchAwards };

// strike rate batsman for each season

const strikeRatePerSeason = function strikeRate(deliverydata, matchdata) {
  let batsmanRun = {};
  let bowlPlayed = {};
  let strikeRate = {};
  matchdata.map(season => batsmanRun[season.season] = {});
  matchdata.map(season => bowlPlayed[season.season] = {});
  let countSeason = [];
  let index = 0;
  matchdata.push({season: 100000})
  for(let i = 1; i < matchdata.length; i++){
    if(matchdata[i].season !== matchdata[i-1].season){
      countSeason.push([matchdata[index].id, matchdata[i-1].id]);
      index = i;
    }
  }
  matchdata.pop();
  index = 0;
  let keys = Object.keys(batsmanRun)
  countSeason.map(loop => {
    deliverydata.map(elem => {
      if(elem.match_id >= loop[0] && elem.match_id <= loop[1]){
         if(batsmanRun[keys[index]][elem.batsman]){
            batsmanRun[keys[index]][elem.batsman] += Number(elem.batsman_runs)
            bowlPlayed[keys[index]][elem.batsman] += 1;
          }else{
            batsmanRun[keys[index]][elem.batsman] = Number(elem.batsman_runs)
            bowlPlayed[keys[index]][elem.batsman] = 1;
          }
      }
    })
    index++;
  })
  for(let key in batsmanRun){
    for(let keys in batsmanRun[key]){
        batsmanRun[key][keys] = (batsmanRun[key][keys] * 100) / (bowlPlayed[key][keys])
    }
  }
  return batsmanRun;
}


export { strikeRatePerSeason }