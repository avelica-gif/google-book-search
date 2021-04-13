const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

//define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//define API routes here

