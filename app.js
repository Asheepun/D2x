const express = require("express");
const hbs = require("express-handlebars");
const viewController = require(__dirname + "/controllers/viewController.js");
const app = express();

const port = process.env.PORT || 3000;

app.engine("hbs", hbs({
    defaultLayout: "base",
    extname: ".hbs",
}));

app.set("view engine", "hbs");

app.use(express.static("public"));

viewController(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));