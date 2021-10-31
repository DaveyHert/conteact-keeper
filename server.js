// import express module and initialize it into app variable
const express = require("express");
const app = express();

// Create a port or use production port if available
const PORT = process.env.PORT || 5000;

// Route
app.get("/", (req, res) =>
  res.json({
    name: "David Herbert",
    level: "300",
    department: "Computer Science",
  })
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
