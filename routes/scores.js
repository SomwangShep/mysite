const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Score = mongoose.model('scores');
const User = mongoose.model('users');
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');

// Stories Index
router.get('/', (req, res) => {
  Score.find({user: req.user.id})
    // .populate('user')
    .sort({date:'desc'})
    .then(scores => {
      res.render('quizzes/index', {
        scores: scores
      });
    });
});

module.exports = router;