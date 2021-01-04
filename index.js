const {
    userByName,
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

const {
    listOrgProjects,
    listUserProjects
} = require("./utils/projects");

const {
    listWorkflows
} = require("./utils/actions");

const {
    listRepoStargazers,
    listRepoWatchers,
    listUserStarred,
    listUserWatching
} = require("./utils/activity");

const {
    gistDetails,
    listUserGists
} = require("./utils/gist");

const {
    textToMarkdown
} = require("./utils/markdown");

const {
    listPullReqs,
    listCommitsOnPR
} = require("./utils/pulls");

const ghClient = {};

function assignActionsFunctionalities() {
    ghClient.getListOfWorkflows = listWorkflows;
}

function assignActivityFunctionalities() {
    ghClient.getRepoStarrers = listRepoStargazers;
    ghClient.getRepoWatchers = listRepoWatchers;
    ghClient.getStarredReposByUser = listUserStarred;
    ghClient.getWatchReposByUser = listUserWatching;
}

function assignGistFunctionalities() {
    ghClient.getGistById = gistDetails;
    ghClient.getListOfUserGists = listUserGists;
}

function assignMarkdownFunctionalities() {
    ghClient.textToMarkdown = textToMarkdown;
}

function assignOrgsFunctionalities() {
    ghClient.getOrgDetails = orgDetails;
    ghClient.getUserOrgs = userOrgs;
    ghClient.getOrgAllMembers = listOrgMembers;
}

function assignProjectsFunctionalities() {
    ghClient.getListOfOrgProjects = listOrgProjects;
    ghClient.getListOfUserProjects = listUserProjects;
}

function assignPullsFunctionalities() {
    ghClient.getListOfPullReqs = listPullReqs;
    ghClient.getCommitsOfPullReqById = listCommitsOnPR;
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
    ghClient.getFollowersOf = listFollowers;
    ghClient.getFollowingOf = listFollowing;
    ghClient.checkSpecificFollower = AFollowsB;
}

assignActionsFunctionalities();
assignActivityFunctionalities();
assignGistFunctionalities();
assignMarkdownFunctionalities();
assignOrgsFunctionalities();
assignProjectsFunctionalities();
assignPullsFunctionalities();
assignReposFunctionalities();
assignUserFunctionalities();

module.exports = ghClient;