const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


// clientID 624435429462-3qb4fnvm8i2jgilea27t179ge0ded2jp.apps.googleusercontent.com
// clientSecret 8zoXoMauUjsrPYBNqSC0lgzA

passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;

app.listen(PORT);