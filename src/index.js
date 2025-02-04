const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require('./config/db');
// connexx 
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("combined"));
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening http://localhost:${port}`);
});
