const reposOfUser = async(userName) => {
    try {
        promise = await fetch(`https://api.github.com/users/${userName}`, {
            method: 'get',
            headers: {
                'accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${process.env.token}`
            }
        });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the username added in your function argument"
            };
        }
        user = await promise.json();
        user.responseCode = 200;
        user.responseMessage = "The response is a JSON object.";
        return user;
    } catch (err) {
        return err;
    }
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