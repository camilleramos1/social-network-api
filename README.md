# Social Network API

[![MIT License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Walkthrough](#walkthrough)
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


<ins>The following routes can be used:</ins>

**USER**
* `GET /api/users` - Get all users
* `GET /api/users/:userId` - Get one user by id
* `POST /api/users` - Create new user
* `PUT /api/users/:userId` - Update existing user
* `DELETE /api/users/:userId` - Delete user by id
* `POST /api/users/:userId/friends/:friendId` - Add new friend
* `DELETE /api/users/:userId/friends/:friendId` - Delete friend

**THOUGHTS**
* `GET /api/thoughts` - Get all thoughts
* `GET /api/thoughts/:thoughtId` - Get one thought by id
* `POST /api/thoughts` - Create new thought
* `PUT /api/thoughts/:thoughtId` - Update existing thought
* `DELETE /api/thoughts/:thoughtId` - Delete thought by id
* `POST /api/thoughts/:thoughtId/reactions` - Add new reaction
* `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Delete reaction

## Walkthrough 


## License
This project is covered under the MIT license. To learn more, please click the license badge at the top of the page.

## Questions
Have any questions about this project? Get in touch with me!

Github: https://github.com/camilleramos1