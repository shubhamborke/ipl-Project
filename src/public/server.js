const http = require("http")
const fs = require("fs")

const matchesPerYear = "src/public/output/matchesPerYear.json"
const bestEconomyPlayers = "src/public/output/bestEconomyPlayers.json"
const extraRunIn2016 = "src/public/output/extraRunIn2016.json"
const mostMatchAward = "src/public/output/mostMatchAward.json"
const top10EconomiBowler = "src/public/output/top10EconomiBowler.json"
const tossAndMachesWinner = "src/public/output/tossAndMachesWinner.json"
const dismissalPlayer = "src/public/output/dismissalPlayer.json"
const matchesWonPerYear = "src/public/output/matchesWonPerYear.json"

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/matchesPerYear":
            fs.readFile(matchesPerYear, "utf-8", (err, data) => {
                if (err) {
                  res.writeHead(404, {"content-type": "application/json"})
                  res.end("File not found");
                } else {
                  res.writeHead(200, {"content-type": "application/json"});
                  res.end(data);
                }
            });
            break;
            case "/bestEconomyPlayers":
                fs.readFile(bestEconomyPlayers, "utf-8", (err, data) => {
                    if(err){
                        res.writeHead(404, {"content-type": "application/json"})
                  res.end("File not found");
                    }else{
                        res.writeHead(200, {"content-type": "application/json"});
                  res.end(data);
                    }
                })
                break;
                case "/extraRunIn2016":
                    fs.readFile(extraRunIn2016, "utf-8", (err,data) => {
                        if(err){
                            res.writeHead(404, {"content-type": "application/json"})
                  res.end("File not found");
                        }else{
                            res.writeHead(200, {"content-type": "application/json"});
                  res.end(data);
                        }
                    })
                    break;
                    case "/mostMatchAward":
                        fs.readFile(mostMatchAward, "utf-8", (err,data) => {
                            if(err){
                                res.writeHead(404, {"content-type": "application/json"})
                      res.end("File not found");
                            }else{
                                res.writeHead(200, {"content-type": "application/json"});
                      res.end(data);
                            }
                        })
                        break;
                        case "/top10EconomiBowler":
                        fs.readFile(top10EconomiBowler, "utf-8", (err,data) => {
                            if(err){
                                res.writeHead(404, {"content-type": "application/json"})
                      res.end("File not found");
                            }else{
                                res.writeHead(200, {"content-type": "application/json"});
                      res.end(data);
                            }
                        })
                        break;
                        case "/tossAndMachesWinner":
                        fs.readFile(tossAndMachesWinner, "utf-8", (err,data) => {
                            if(err){
                                res.writeHead(404, {"content-type": "application/json"})
                      res.end("File not found");
                            }else{
                                res.writeHead(200, {"content-type": "application/json"});
                      res.end(data);
                            }
                        })
                        break;
                        case "/dismissalPlayer":
                        fs.readFile(dismissalPlayer, "utf-8", (err,data) => {
                            if(err){
                                res.writeHead(404, {"content-type": "application/json"})
                      res.end("File not found");
                            }else{
                                res.writeHead(200, {"content-type": "application/json"});
                      res.end(data);
                            }
                        })
                        break;
                        case "/matchesWonPerYear":
                            fs.readFile(matchesWonPerYear, "utf-8", (err,data) => {
                                if(err){
                                    res.writeHead(404, {"content-type": "application/json"})
                          res.end("File not found");
                                }else{
                                    res.writeHead(200, {"content-type": "application/json"});
                          res.end(data);
                                }
                            })
                            break;
                            case "/js":
                                fs.readFile("src/public/index.js", "utf-8", (err,data) => {
                                    if(err){
                                        res.writeHead(404, {"content-type": "application/json"})
                              res.end("File not found");
                                    }else{
                                        res.writeHead(200, {"content-type": "application/json"});
                              res.end(data);
                                    }
                                })
                                break;
                                case "/html":
                                fs.readFile("src/public/index.html", "utf-8", (err,data) => {
                                    if(err){
                                        res.writeHead(404, {"content-type": "application/json"})
                              res.end("File not found");
                                    }else{
                                        res.writeHead(200, {"content-type": "text/html"});
                              res.end(data);
                                    }
                                })
                                break;
            default:
                res.end("Invalid address")
    }
})

server.listen(8000, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Server created success...")
    }
})