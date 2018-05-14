const path = require("path");
const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const env = require('dotenv').load()
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;

app.use("/api", apiRoutes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.get('/', function (req, res) {
  res.send('Welcome to Passport with Sequelize');
});



//Models
var models = require("./models");


//Routes
var authRoute = require('./routes/auth.js')(app, passport);


//load passport strategies
require('./config/passport/passport.js')(passport, models.user);


//Sync Database
models.sequelize.sync().then(function () {
  console.log('Nice! Database looks fine')

}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});



app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
