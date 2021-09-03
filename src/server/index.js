const matches = require("./matchesData.json");
const deliveries = require("./deliveriesData.json");
const functions = require("./ipl");

const fs = require("fs");

const matchesPerYear = functions.matchesPlayedPerYear(matches);
const matchesWonByTeam = functions.matchWonPerTeam(matches);
const extraRun = functions.extraRunsIn2016(matches, deliveries);
const top10EconomiBowler = functions.topEconomicBowler(matches, deliveries);
const tossAndMachesWonPerTeam = functions.tossAndMatchWon(matches);
const mostMatch = functions.mostMatchAwards(matches);
const strikeRatePerPerson = functions.strikeRatePerSeason(deliveries, matches);
const highestDissmissalPlayer = functions.dismissalPlayer(deliveries);
const bestEconomyPlayer = functions.economyPlayer(deliveries);

function writeOverjson(file, fileName) {
  fs.writeFile(
    `src/public/output/${fileName}.json`,
    JSON.stringify(file, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("written successful");
      }
    }
  );
}

writeOverjson(matchesPerYear, "matchesPerYear");
writeOverjson(matchesWonByTeam, "matchesWonPerYear");
writeOverjson(extraRun, "extraRunIn2016");
writeOverjson(top10EconomiBowler, "top10EconomiBowler");
writeOverjson(tossAndMachesWonPerTeam, "tossAndMachesWinner");
writeOverjson(mostMatch, "mostMatchAward");
writeOverjson(strikeRatePerPerson, "strikeRatePerSeason");
writeOverjson(highestDissmissalPlayer, "dismissalPlayer");
writeOverjson(bestEconomyPlayer, "bestEconomyPlayers");
