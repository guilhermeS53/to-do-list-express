const express = require("express");
const app = express();

const port = 3000;

// Route
app.get("/home", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log("Servidor rodando em http://localhost:${port}")
);
