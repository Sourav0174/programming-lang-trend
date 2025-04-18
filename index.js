const express = require("express");
const app = express();
const languagesRoute = require("./routes/languages");

const PORT = process.env.PORT || 3000;

app.use("/api/languages", languagesRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Programming Language Trends API!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
