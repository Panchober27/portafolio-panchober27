const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

//S
const port = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares settings
app.use(morgan("dev"));
// future middlewares

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/movileApps"));
app.use(require("./routes/demo"));

// LS.
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
