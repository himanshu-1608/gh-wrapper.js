require('dotenv').config();
const { userByName, usersByName } = require("./utils/users");

const ghClient = {};

ghClient.getUserByName = userByName;
ghClient.getUsersByName = usersByName;

module.exports = ghClient;