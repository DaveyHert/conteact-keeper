// import express module and initialize it into app variable
const express = require("express");
const app = express();

// Route
app.get("/", (req, res) =>
  res.json({
    name: "David Herbert",
    level: "300",
    department: "Computer Science",
  })
);
// Defining our routes
app.use("/api/contacts", require("./routes/contacts"));
app.use("./api/contacts", require("./routes/contacts"));
app.use("./api/auth", require("./routes/auth"));

// Create a port or use production port if available
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
