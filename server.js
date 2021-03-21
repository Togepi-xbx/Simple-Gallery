require('dotenv').config();

const path = require('path');
const express = require('express');
const index = require('./routes/index')
const dogs = require('./data/dogs')
const gallery = require('./routes/api/dogs')

const app = express();
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index);


app.get('/api/v0/dogs', (req, res) => {
  res.json (dogs);
})

app.use('/gallery', gallery);

app.use(function(req, res, next) {
  res.status(404);
  // 404 error redirect to a html page
  res.sendFile('/public/404.html', {root : __dirname});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

