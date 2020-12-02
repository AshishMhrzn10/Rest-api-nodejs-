const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//Import routes
const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

//ROUTES
app.get("/", (req, res) => {
	res.send("We are on home");
});

//Connect mongodb
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
	console.log("Connected to DB");
});

//Start server
app.listen(3000);
