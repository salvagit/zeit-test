const express = require("express");

const api = express();

api.get("/", (req, res) => {
  res.json({
    success: true,
    message: "api test"
  });
});

const port = process.env.PORT || 8080;

api.listen(port, () => console.log(`app started on port ${port}`));
