
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//empty JS object
projectData = {};

app.use(express.static("website"));

const getAll = (req, res) => res.status(200).send(projectData);

app.get("/all", getAll);

const postData = (req, res) => {
  projectData = req.body;
  console.log(projectData); }

app.post("/add", postData);

const port = 4000;
const host = "127.0.0.1";

// testing the server 
const listening = () =>
console.log(`http://${host}:${port}/`);

app.listen(port, listening);
