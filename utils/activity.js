const listRepoStargazers = (ownerName, repoName) => {
    console.log(`Owner ${ownerName}'s repo named ${repoName} has following stargazers: null`);
};

const listRepoWatchers = (ownerName, repoName) => {
    console.log(`Owner ${ownerName}'s repo named ${repoName} has following watchers: null`);
};

const listUserStarred = (userName) => {
    console.log(`User ${userName} has starred following repos: null`);
};

const listUserWatching = (userName) => {
    console.log(`User ${userName} is watching following repos: null`);
};

module.exports = {
    listRepoStargazers,
    listRepoWatchers,
    listUserStarred,
    listUserWatching
};