import { matches } from "./matchesData.js";
import { deliveries } from "./deliveriesData.js";
import { matchesPlayedPerYear } from "./ipl.js";
import { matchWonPerTeam } from "./ipl.js";
import { extraRunsIn2016 } from "./ipl.js";
import { topEconomicBowler } from "./ipl.js";
import fs from "fs";

const matchesPerYear = matchesPlayedPerYear(matches);
const matchesWonByTeam = matchWonPerTeam(matches);
const extraRun = extraRunsIn2016(matches, deliveries);
const top10EconomiBowler = topEconomicBowler(matches, deliveries);

function writeOverJson(file, name) {
  fs.writeFile(
    `src/public/output/${name}.json`,
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

writeOverJson(matchesPerYear, "matchesPerYear");
writeOverJson(matchesWonByTeam, "matchesWonPerYear");
writeOverJson(extraRun, "extraRunIn2016");
writeOverJson(top10EconomiBowler, "top10EconomiBowler");
