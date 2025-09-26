/* Required Statements */
const express = require("express");
const app = express();
const route = require("./routes");

/* Local Server */
const port = process.env.PORT || 8080;

/* Routes */
app.use("/", route);

/* Confirm Operation */
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
