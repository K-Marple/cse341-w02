/* Required Statements */
const express = require("express");
const app = express();
const webRoutes = require("./routes/webRoutes");
const cors = require("cors");
const path = require("path");

/* Local Server */
const port = process.env.PORT || 8080;

/* CORS */
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));

/* Routes */
app.use("/", webRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

/* Confirm Operation */
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
