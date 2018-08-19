const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;

const keys = require('../config/keys'); 
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken,refreshToken,profile) => {
    /*console.log('accessToken',accessToken)
    console.log('refreshToken',refreshToken)
    console.log('profile',profile)*/
    new User({ googleId: profile.id }).save();

}));

/*
passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: '/auth/facebook/callback'
}, (accessToken,refreshToken,profile) => {
    console.log('accessToken',accessToken)
    console.log('refreshToken',refreshToken)
    console.log('profile',profile)
}));*/