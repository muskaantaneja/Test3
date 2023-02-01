const express = require('express')
const app = express();
app.get('/', function (req, res) {
   res.send('Welcome, I am Muskaan');
})
app.get('/about', function (req, res) {
   res.send('I am a Software Engineer');
})
// 
app.get('/contact', function (req, res) {
   res.send('You can contact me at muskaantaneja22@gmail.com');
})
app.get('/help', function (req, res) {
   res.send('This is a help page');
})
const server = 8080;

app.listen(server, function () {
  console.log("App is listening at server " + server );
})
