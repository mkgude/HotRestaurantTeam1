// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a few array variables that will hold the data
let waitlistArr = [];
let tablesArr = [];

// routes
// ==========================
// front end routes
// Create a set of routes for displaying the HTML pages
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/waitlist", function (req, res) {
  res.sendFile(path.join(__dirname, "waitlist.html"));
});

// API routes
// Create a set of routes for getting and posting table data
app.get("/api/reservations", (req, res) => res.send("display reservations"));

app.get("/api/tables", (req, res) => res.send("display tables"));
// Use jQuery to run AJAX calls to GET and POST data from users to the Express server

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
