// Dependencies
const PORT = process.env.PORT || 5000
const express = require('express')
const path = require('path')
const app = express()
const axios = require('axios');


// a simple express server
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'public/index.html')))
.get('/', (req,res) => res.sendFile(path.join(__dirname, './app.js')))
.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => console.log(`Chuck Node-bot is listening on port ${PORT}`));

// Start up message
console.log('Chuck-bot is online, Human');


// the Chucck Norris API random quote generator
// const chuckAPI = 'https://api.chucknorris.io/jokes/random';
const chuckAPI = 'http://api.icndb.com/jokes/random';


// using axios to GET the data and post it to Twitter with Twit
function getChuckQuote() {

  axios.get(chuckAPI)
  .then(function (response) {
    const data = response.data.value.joke;
    console.log(data);
    return data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

getChuckQuote();

// automating the tweeting, one tweet every 10 seconds
// setInterval(getChuckQuote, 1000*10);


