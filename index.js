const request = require("request");
const express = require("express");
const path = require("path");
const app = express();
const ejsMate = require("ejs-mate");
const ejs = require("ejs");
const methodOverride = require("method-override");

const prem_route = require("./routes/prem");
const bundesliga = require("./routes/bundesliga");
const la_liga = require("./routes/la_liga");
const leageu_one = require("./routes/league_one");
const serie_a = require("./routes/serie_a");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/public", express.static("public"));

app.use("/", prem_route);
app.use("/", bundesliga);
app.use("/", la_liga);
app.use("/", serie_a);
app.use("/", leageu_one);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
