const listPullReqs = (ownerName, repoName) => {
    console.log(`Owner ${ownerName}'s repo named ${repoName} has following pull requests: null`);
};

const listCommitsOnPR = (ownerName, repoName, pullNo) => {
    console.log(`Owner ${ownerName}'s repo named ${repoName}'s Pull Request ${pullNo} has following commits: null`);
};

module.exports = {
    listPullReqs,
    listCommitsOnPR
};