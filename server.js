const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = 5000;
const app = express();
const FOOTBALL_API = "https://api.football-data.org/v4/";
app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
};

app.get("/*", cors(corsOptions), async (req, res) => {
  const axiosOptions = {
    method: "GET",
    headers: {
      "X-Auth-Token": "8c04d401925e49e599c1ae9253de1363",
    },
  };
  await axios
    .get(`${FOOTBALL_API}/${req.path}`, axiosOptions)
    .then(function (response) {
      const data = response.data;
      return res.json(data);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
