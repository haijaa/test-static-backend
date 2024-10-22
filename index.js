const express = require("express");
const cors = require("cors");

app.use(cors());

const app = express(),
  port = process.env.PORT || 3000;

app.get("/", (_request, response) => {
  response.send({ test: "Byter värde" });
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
