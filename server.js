const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.listen(3000, function() {

})
app.get('/', function(req, res) {
  res.render('index.ejs')

})
app.get('/signup', function(req, res) {
  res.render('signup.ejs')

})
app.get('/profile', function(req, res) {
  res.render('profile.ejs')

})
app.get('/main', function(req, res) {
  res.render('main.ejs')

})
