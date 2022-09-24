const express = require("express");
const bodyParser = require("body-parser");
const log = require("./utils/morgenLogger");
const path = require("path")

const app = express();

//bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


const PORT = process.env.PORT || 5000;


app.use(bodyParser())

app.use(express.static(path.join(__dirname, "/views/public")))

//ejs part 
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, '/views'));

//morgen logging
log(app);

app.get("/", (req, res) => {
    res.render("html/index");
})

app.get("/home", (req, res) => {
    res.send("app is runnung");
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))