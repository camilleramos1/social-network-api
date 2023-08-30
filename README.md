# Social Network API

[![MIT License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## Description
This application is an API for a social network. In this social network, you are able to create new users, add new thoughts,  react to other's thoughts, and add new friends. This app uses Express.js,  MongoDB, Mongoose, and I also used and extra npm package, date-fns, to format the timestamps on both thoughts and reactions.

## Installation
Clone this repository, and ensure to run npm i within your terminal to install all necessary dependencies. 

## Usage
* Use npm start to start the server
* Ensure you are connected through MongoDB on URI localhost:27017. 
* Use database socialDB
* Use Insomnia to test routes 

The following routes can be used:

**USER**
* `GET /api/users`
* `GET /api/users/:userId`
* `POST /api/users`
* `PUT /api/users/:userId`
* `DELETE /api/users/:userId`
* `POST /api/users/:userId/friends/:friendId`
* `DELETE /api/users/:userId/friends/:friendId`

**THOUGHTS**
* GET /api/thoughts
* GET /api/thoughts/:thoughtId
* POST /api/thoughts
* PUT /api/thoughts/:thoughtId
* DELETE /api/thoughts/:thoughtId
* POST /api/thoughts/:thoughtId/reactions
* DELETE /api/thoughts/:thoughtId/reactions/:reactionId

## License
This project is covered under the MIT license. To learn more, please click the license badge at the top of the page.

## Questions
Have any questions about this project? Get in touch with me!

Github: https://github.com/camilleramos1