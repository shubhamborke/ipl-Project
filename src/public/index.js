
function MatchesPlayedPerYear() {
  // fetch("http://localhost:8000/matchesPerYear")
  //   .then((resolve) => resolve.json())
  //   .then((data) => {
  //     console.log(data)

  fetch("http://localhost:8000/matchesPerYear")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      /*
// const url = "http://localhost:8000/matchesPerYear";
// http.get(url, res => {
//   let data = '';
//   res.on('data', chunk => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     data = JSON.parse(data);
//     console.log(data);
//   })
// }).on('error', err => {
//   console.log(err.message);
// })

*/
      let keys = [];
      let values = [];
      for (let key in data) {
        keys.push(key);
        values.push(data[key]);
      }
      Highcharts.chart("matchesPlayedPerYear", {
        chart: {
          type: "bar",
        },
        title: {
          text: "Matches Played Per Year",
        },
        xAxis: {
          categories: keys,
        },
        series: [
          {
            name: "Matches-Played-Per-Yers-Chart",
            data: values,
          },
        ],
      });
    });
}
MatchesPlayedPerYear();

function bestEconomyPlayers() {
  fetch("http://localhost:8000/bestEconomyPlayers")
    .then((resolve) => resolve.json())
    .then((data) => {
      let keys = [];
      let values = [];
      for (let key in data) {
        keys.push(key);
        values.push(data[key]);
      }

      Highcharts.chart("bestEconomyPlayers", {
        chart: {
          type: "column",
        },
        title: {
          text: "Best Economy Players",
        },
        xAxis: {
          categories: keys,
        },
        series: [
          {
            name: "Best-Economy-Of-Players",
            data: values,
          },
        ],
      });
    });
}

function extraRunIn2016() {
    fetch("http://localhost:8000/extraRunIn2016")
      .then((resolve) => resolve.json())
      .then((data) => {
        let keys = [];
        let values = [];
        for (let key in data) {
          keys.push(key);
          values.push(data[key]);
        }

        Highcharts.chart("extraRunsIn2016", {
          chart: {
            type: "column",
          },
          title: {
            text: "Extra Runs In 2016",
          },
          xAxis: {
            categories: keys,
          },
          series: [
            {
              name: "Extra-Runs-In-2016",
              data: values,
            },
          ],
        });
      });
  }

  function mostMatchesAwards() {
    fetch("http://localhost:8000/mostMatchAward")
      .then((resolve) => resolve.json())
      .then((data) => {
        let names = []
        let values = [];
        for (let key in data) {
          names.push(data[key])
          values.push([data[key]+" " + key, Number(key)]);
        }

        Highcharts.chart("mostMatchAwards", {
          chart: {
            type: 'pie'
          },
          title: {
            text: "Most Matches Awards",
          },
          xAxis: {
            categories: names
          },
          series: [
            {
              name: "Most-Matches-Awards",
              data: values,
            },
          ],
        });
      });
  }

  function top10EconomicBowler() {
    fetch("http://localhost:8000/top10EconomiBowler")
      .then((resolve) => resolve.json())
      .then((data) => {
        let keys = [];
        let values = [];
        for (let key in data) {
          keys.push(key);
          values.push(data[key]);
        }

        Highcharts.chart("top10EconomicBowler", {
          chart: {
            type: 'column'
          },
          title: {
            text: "Top Ten Economic Bowler",
          },
          xAxis: {
            categories: keys
          },
          series: [
            {
              name: "Top-Ten-Economic-Bowler",
              data: values,
            },
          ],
        });
      });
  }

  function tossAndMatchWinner() {
    fetch("http://localhost:8000/tossAndMachesWinner")
      .then((resolve) => resolve.json())
      .then((data) => {
        let keys = [];
        let values = [];
        for (let key in data) {
          keys.push(key);
          values.push(data[key]);
        }

        Highcharts.chart("tossAndMachesWinner", {
          chart: {
            type: 'column'
          },
          title: {
            text: "Toss And Match Winner",
          },
          xAxis: {
            categories: keys
          },
          series: [
            {
              name: "Toss-And-Match-Winner",
              data: values,
            },
          ],
        });
      });
  }

  function dismissalPlayer() {
    fetch("http://localhost:8000/dismissalPlayer")
      .then((resolve) => resolve.json())
      .then((data) => {
        let values = [];
        for (let key in data) {
          for(let valKey in data[key]){
            values.push([`${key} ${valKey} ${data[key][valKey]}`, data[key][valKey]])
          }
        }

        Highcharts.chart("dismissalPlayer", {
          chart: {
            type: 'pie'
          },
          title: {
            text: "Dismissal Player",
          },
          series: [
            {
              name: "Dismissal-Player",
              data: values,
            },
          ],
        });
      });
  }

  function matchesWonPerYear() {
    fetch("http://localhost:8000/matchesWonPerYear")
      .then((resolve) => resolve.json())
      .then((data) => {
        let keys = [];
        let values = [];
        let seasons = [];
        for (let key in data) {
          keys.push(key)
          let indexval = [];
          for(let valKey in data[key]){
              indexval.push(data[key][valKey])
              if(!seasons.includes(valKey)){
                seasons.push(valKey)
              }
          }
          values.push([key, indexval])
      }

        Highcharts.chart("matchesWonPerYear", {
          chart: {
            type: "column",
          },
          title: {
            text: "Matches Won Per Year",
          },
          xAxis: {
            categories: seasons
          },
          series: [
            {
              name: values[0][0],
              data: values[0][1]
            },
            {
              name: values[1][0],
              data: values[1][1]
            },
            {
              name: values[2][0],
              data: values[2][1]
            },
            {
              name: values[3][0],
              data: values[3][1]
            },
            {
              name: values[4][0],
              data: values[4][1]
            },
            {
              name: values[5][0],
              data: values[5][1]
            },
            {
              name: values[6][0],
              data: values[6][1]
            },
            {
              name: values[7][0],
              data: values[7][1]
            },
            {
              name: values[8][0],
              data: values[8][1]
            },
            {
              name: values[9][0],
              data: values[9][1]
            },
            {
              name: values[10][0],
              data: values[10][1]
            },
            {
              name: values[11][0],
              data: values[11][1]
            },
            {
              name: values[12][0],
              data: values[12][1]
            },
            {
              name: values[13][0],
              data: values[13][1]
            },
            {
              name: values[14][0],
              data: values[14][1]
            }
          ],
        });
      });
  }
MatchesPlayedPerYear();
bestEconomyPlayers();
extraRunIn2016();
mostMatchesAwards();
top10EconomicBowler();
tossAndMatchWinner();
dismissalPlayer();
matchesWonPerYear();

// // MatchesPlayedPerYear();

// // document.addEventListener("DOMContentLoaded", () => {
// //   Highcharts.chart("container", {
// //     xAxis: {
// //       categories: ["Apple", "Bannana", "Orange"],
// //     },
// //     series: [
// //       {
// //         name: "john",
// //         data: [1, 2, 3],
// //       },
// //       {
// //         name: "Ro",
// //         data: [2, 4, 8],
// //       },
// //     ],
// //   });
// // });
