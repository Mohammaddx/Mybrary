const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.set(expressLayouts);
app.set(express.static("public"));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`server is running up on PORT = ${PORT}`);
});
