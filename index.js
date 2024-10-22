const express = require("express");
const cors = require("cors");

const app = express(),
  port = process.env.PORT || 3000;

app.get("/", (_request, response) => {
  response.send(
    {
      test: "Byter värde",
    },
    {
      anotherValue: "Hobladoo",
    }
  );
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
app.use(cors());
