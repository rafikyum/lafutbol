const express = require("express");
const router = express.Router();
const axios = require("axios");

// table standigns - home

router.get("/serie_a", async (req, res) => {
  function getData(options) {
    return axios.request(options);
  }

  const table_config = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/standings",
    params: { season: "2023", league: "135" },
    headers: {
      "X-RapidAPI-Key": "ef7d32ce87msh2696077fbb1cc96p100c3ajsn9a96c91783dc",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fixture_config = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: { league: "135", next: "50" },
    headers: {
      "X-RapidAPI-Key": "ef7d32ce87msh2696077fbb1cc96p100c3ajsn9a96c91783dc",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const scorer_config = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/players/topscorers",
    params: { league: "135", season: "2023" },
    headers: {
      "X-RapidAPI-Key": "ef7d32ce87msh2696077fbb1cc96p100c3ajsn9a96c91783dc",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const assists_config = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/players/topassists",
    params: { league: "135", season: "2023" },
    headers: {
      "X-RapidAPI-Key": "ef7d32ce87msh2696077fbb1cc96p100c3ajsn9a96c91783dc",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const data = await getData(table_config);

  const data2 = await getData(fixture_config);

  const top_scorer_data = await getData(scorer_config);

  const top_assists_data = await getData(assists_config);

  res.render("serie_a", {
    data: data.data,
    data2: data2.data,
    top_scorer_data: top_scorer_data,
    top_assists_data: top_assists_data,
  });
});

module.exports = router;
