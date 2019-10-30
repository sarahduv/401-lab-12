'use strict ';

const express = require('express');
const superagent = require('superagent');
require('dotenv').config();

const app = express();

app.use(express.static('./public'));
app.use(express.json());


// var MONGODB_URI = process.env.MONGODB_URI; // http://localhost:27017
var PORT = process.env.PORT || 3000; // 3000
// var SECRET = process.env.SECRET; 
var GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
var GITHUB_REDIRECT_URI = process.env.GITHUB_REDIRECT_URI; //http://localhost:3000/oauth


app.get('/oauth', authorize);

function authorize(req, res) {

  let code = req.query.code;
  console.log(req.query.code);
  console.log('1) code received: ', code);

  return superagent.post('https://github.com/login/oauth/access_token')
    .type('form')
    .send({
      code: code,
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      redirect_uri: GITHUB_REDIRECT_URI,
      grant_type: 'authorization_code',
    })
    .then(response => {
      let access_token = response.body.access_token;
      console.log('(2) Access token received, ', access_token);
      return access_token;
    })
    .then(token => {
      return superagent.get('https://api.github.com/user')
        .set('Authorization', `token ${token}`)
        .set('User-Agent', '401-lab-12');
    })
    .then(response => {
      let user = response.body;
      console.log(`3) here is our user:`, user);
      res.status(200).json(user);
    })
    .catch(e => res.send(e));
}

app.listen(PORT, () => {
  console.log('Oauth server running');
});

module.exports = authorize;