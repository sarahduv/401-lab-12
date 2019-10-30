# OAuth Comparative Analysis

## OAuth Provider Name: GitHub

### Research Conducted By: Peter Carmichael, Alistair Blake, Sarah Gilliam

### Overall Score and Comments
#### Score (Out of 10): 7
#### General Comments
This stack uses the following:
* Javascript
* AJAX
* Express
* Jasonwebtoken
* bcrypt
* Mongo

#### Pros
* oAuth provides better security

#### Cons
* Documentation

### Ratings and Reviews
#### Documentation
Thoughts go here

#### Systems Requirements
node js
"bcrypt": "^3.0.2",
"cors": "^2.8.4",
"debug": "^4.1.0",
"dotenv": "^6.1.0",
"express": "^4.16.3",
"jest": "^24.8.0",
"jsonwebtoken": "^8.4.0",
"mongodb-memory-server": "^5.1.4",
"mongoose": "^5.3.13",
"mongoose-schema-jsonschema": "^1.1.15",
"morgan": "^1.9.0",
"require-directory": "^2.1.1",
"supertest": "^3.3.0",
"swagger-ui-express": "^4.0.2",
"eslint": "^6.5.1",
"lint": "^0.7.0"

#### Ramp-Up Projections
How long would/should it take a team of mid-junior developers to become productive?
- 1 week, depending on their strengths and weaknesses

#### Community Support and Adoption levels
All the frameworks in this repo are widely used and very popular, with over thousands of active repo's.

### Links and Resources
* [superagent](https://www.npmjs.com/package/superagent)
* [GitHub oAuth](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)

### Code Demos
* [live/running application](http://xyz.com)
* [Front End Repository](https://github.com/sarahduv/401-lab-12-front-end)
* [Back End Repository](https://github.com/sarahduv/401-lab-12)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm start`
* Endpoint: `/signup`
  * Provide your username and password to get a token, create a user in the database
* Endpoint: `/signin`
  * Provide your username and password to get a token
