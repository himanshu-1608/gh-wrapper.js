const reposOfUser = (userName) => {
    console.log(`The owner ${userName}'s has following repos: Repo1, repo2, repo3, etc.`);
};

const reposOfOrg = (orgName) => {
    console.log(`The organisation ${orgName} has following repos: Repo1, Repo2, etc.`);
};

const repoContributors = (ownerName, repoName) => {
    console.log(`The owner ${ownerName}'s repo named ${repoName} has following contributors: null`);
};

const repoCollaborators = (ownerName, repoName) => {
    console.log(`The owner ${ownerName}'s repo named ${repoName} has following contributors: null`);
};

const repoDetails = (ownerName, repoName) => {
    console.log(`The owner ${ownerName}'s repo named ${repoName} has following data attached: null`);
};

const repoLangs = (ownerName, repoName) => {
    console.log(`The owner ${ownerName}'s repo named ${repoName} has following languages involved: null`);
};

const repoTopics = (ownerName, repoName) => {
    console.log(`The owner ${ownerName}'s repo named ${repoName} has following topics used: null`);
};

const repoCommits = (ownerName, repoName) => {
    console.log(`The owner ${ownerName}'s repo named ${repoName} has following commits: null`);
};

const repoReadme = (ownerName, repoName) => {
    console.log(`The owner ${ownerName}'s repo named ${repoName} has following Readme: null`);
};

const repoForks = (ownerName, repoName) => {
    console.log(`The owner ${ownerName}'s repo named ${repoName} has following forks: null`);
};

const repoHostingPage = (ownerName, repoName) => {
    console.log(`The owner ${ownerName}'s repo named ${repoName} has following github pages data: null`);
};

module.exports = {
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
};