'use strict';

const superagent = require('superagent');

function authorize(req, res) {
  let code = req.query.code;
  console.log(req.query.code);
  console.log('1) code received: ', code);
  return superagent.post('https://github.com/login/oauth/access_token')
    .type('form')
    .send({
      code: code,
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      redirect_uri: process.env.GITHUB_REDIRECT_URI,
      // grant_type: 'authorization_code',
    })
    .then(response => {
      let access_token = response.body.access_token;
      console.log('(2) Access token received, ', access_token);
      return access_token;
    })
    .then(token => {
      return superagent.get('https://api.github.com/user')
        .set(`Authorization, Bearer ${token}`);
    })
    .then(response => {
      let user = response.body;
      console.log('(3) here is our user:', user);
      res.status(200).json(user);
    })
    .catch(e => res.send(e));
}

module.exports = authorize;