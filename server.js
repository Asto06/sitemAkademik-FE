const express = require("express");
const app = express();
app.use(express.static("./dist/scheduler"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", {
    root: "dist/scheduler",
  });
});

app.listen(process.env.PORT || 4200);
