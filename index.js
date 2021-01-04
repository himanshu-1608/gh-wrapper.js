const {
    userByName,
    usersByName,
    listFollowers,
    listFollowing,
    AFollowsB
} = require("./utils/users");

const ghClient = {};

function assignActionsFunctionalities() {
    ghClient.getUserByName = userByName;
    ghClient.getUsersByName = usersByName;
}

function assignGistFunctionalities() {
    ghClient.getUserByName = userByName;
    ghClient.getUsersByName = usersByName;
}

function assignMarkdownFunctionalities() {
    ghClient.getUserByName = userByName;
    ghClient.getUsersByName = usersByName;
}

function assignOrgsFunctionalities() {
    ghClient.getUserByName = userByName;
    ghClient.getUsersByName = usersByName;
}

function assignProjectsFunctionalities() {
    ghClient.getUserByName = userByName;
    ghClient.getUsersByName = usersByName;
}

function assignPullsFunctionalities() {
    ghClient.getUserByName = userByName;
    ghClient.getUsersByName = usersByName;
}

function assignReposFunctionalities() {
    ghClient.getUserByName = userByName;
    ghClient.getUsersByName = usersByName;
}

function assignUserFunctionalities() {
    ghClient.getUserByName = userByName;
    ghClient.getUsersByName = usersByName;
    ghClient.getFollowersOf = listFollowers;
    ghClient.getFollowingOf = listFollowing;
    ghClient.checkSpecificFollower = AFollowsB;
}

assignActionsFunctionalities();
assignGistFunctionalities();
assignMarkdownFunctionalities();
assignOrgsFunctionalities();
assignProjectsFunctionalities();
assignPullsFunctionalities();
assignReposFunctionalities();
assignUserFunctionalities();

module.exports = ghClient;