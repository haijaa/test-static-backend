const express = require("express");
const cors = require("cors");

const app = express(),
  port = process.env.PORT || 3000;

app.use(cors());
app.get("/", (_request, response) => {
  response.send({
    test: "Byter värde",
  });
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
