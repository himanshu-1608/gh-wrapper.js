const { userByName, usersByName } = require("./utils/users");

const ghClient = {};

ghClient.getUserByName = userByName;
ghClient.getUsersByName = usersByName;

export default ghClient;