const {
    userByName,
    usersByName,
    listFollowers,
    listFollowing,
    AFollowsB
} = require("./utils/users");

const {
    reposOfUser,
    reposOfOrg,
    repoContributors,
    repoCollaborators,
    repoDetails,
    repoLangs,
    repoTopics,
    repoCommits,
    repoReadme,
    repoForks,
    repoHostingPage
} = require("./utils/repos");

const {
    orgDetails,
    userOrgs,
    listOrgMembers
} = require("./utils/orgs");

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
    ghClient.getOrgDetails = orgDetails;
    ghClient.getUserOrgs = userOrgs;
    ghClient.getOrgAllMembers = listOrgMembers;
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
    ghClient.getRepoListOfUser = reposOfUser;
    ghClient.getRepoListOfOrg = reposOfOrg;
    ghClient.getRepoContributors = repoContributors;
    ghClient.getRepoCollaborators = repoCollaborators;
    ghClient.getRepoDetail = repoDetails;
    ghClient.getRepoLangs = repoLangs;
    ghClient.getRepoTopics = repoTopics;
    ghClient.getRepoCommits = repoCommits;
    ghClient.getRepoReadme = repoReadme;
    ghClient.getRepoForks = repoForks;
    ghClient.getRepoHostingPage = repoHostingPage;
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