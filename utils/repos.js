const fetch = require('node-fetch');
require('dotenv').config();
commonHeaders = {
    'accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${process.env.token}`
};

const reposOfUser = async(userName, additionals = null) => {
    queries = {
        "type": "all",
        "sort": "updated"
    };
    if (additionals) {
        (additionals.type != null) ? (queries.type = additionals.type) : null;
        (additionals.sort != null) ? (queries.sort = additionals.sort) : null;
    }
    try {
        promise = await fetch(
            `https://api.github.com/users/${userName}/repos?type=${queries.type}&sort=${queries.sort}`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the username added in your function argument and check if your additional options are valid or not"
            };
        }
        repoList = await promise.json();
        repoList.responseCode = 200;
        repoList.responseMessage = "The response is a JSON array.";
        return repoList;
    } catch (err) {
        return err;
    }
};

const reposOfOrg = async(orgName, additionals = null) => {
    queries = {
        "type": "all",
        "sort": "updated"
    };
    if (additionals) {
        (additionals.type != null) ? (queries.type = additionals.type) : null;
        (additionals.sort != null) ? (queries.sort = additionals.sort) : null;
    }
    try {
        promise = await fetch(
            `https://api.github.com/orgs/${orgName}/repos?type=${queries.type}&sort=${queries.sort}`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the organization name added in your function argument and check if your additional options are valid or not"
            };
        }
        repoList = await promise.json();
        repoList.responseCode = 200;
        repoList.responseMessage = "The response is a JSON array.";
        return repoList;
    } catch (err) {
        return err;
    }
};

const repoContributors = async(ownerName, repoName, additionals = null) => {
    const queries = {
        anon: true
    }
    if (additionals) {
        queries.anon = (additionals.anon) ? true : false;
    }
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/contributors?anon=${queries.anon}`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownerName and repoName added in your function argument and check if your additional options are valid or not"
            };
        }
        repoConts = await promise.json();
        repoConts.responseCode = 200;
        repoConts.responseMessage = "The response is a JSON array.";
        return repoConts;
    } catch (err) {
        return err;
    }
};

const repoCollaborators = async(ownerName, repoName, additionals = null) => {
    const queries = {
        affiliation: "all"
    }
    if (additionals) {
        (additionals.affiliation != "") ? queries.affiliation = additionals.affiliation: null;
    }
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/collaborators?affiliation=${queries.affiliation}`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownerName and repoName added in your function argument and check if your additional options are valid or not"
            };
        }
        repoCols = await promise.json();
        repoCols.responseCode = 200;
        repoCols.responseMessage = "The response is a JSON array.";
        return repoCols;
    } catch (err) {
        return err;
    }
};

const repoDetails = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownerName and repoName added in your function argument"
            };
        }
        repoData = await promise.json();
        repoData.responseCode = 200;
        repoData.responseMessage = "The response maybe a single JSON object but if it is a fork, then the object will contain parent repo data too";
        return repoData;
    } catch (err) {
        return err;
    }
};

const repoLangs = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/languages`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownerName and repoName added in your function argument"
            };
        }
        repoLangList = await promise.json();
        repoLangList.responseCode = 200;
        repoLangList.responseMessage = "The response is a JSON object with all languages included as keys and additionally there will be 2 extra keys: responseCode & responseMessage";
        return repoLangList;
    } catch (err) {
        return err;
    }
};

const repoTopics = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/topics`, {
                method: 'get',
                headers: {
                    ...commonHeaders,
                    'accept': 'application/vnd.github.mercy-preview+json'
                }
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownerName and repoName added in your function argument"
            };
        }
        repoTopicList = await promise.json();
        repoTopicList.responseCode = 200;
        repoTopicList.responseMessage = "The response is a JSON object with all topics as a JSON array which is the value of 'names' key and additionally there will be 2 extra keys: responseCode & responseMessage";
        return repoTopicList;
    } catch (err) {
        return err;
    }
};

const repoCommits = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/commits`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownerName and repoName added in your function argument"
            };
        }
        repoCommitList = await promise.json();
        repoCommitList.responseCode = 200;
        repoCommitList.responseMessage = "The response is a JSON array";
        return repoCommitList;
    } catch (err) {
        return err;
    }
};

const repoReadme = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/readme`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownerName and repoName added in your function argument"
            };
        }
        const readMe = await promise.json();
        readMe.responseCode = 200;
        readMe.responseMessage = "The response is a JSON object";
        return readMe;
    } catch (err) {
        return err;
    }
};

const repoForks = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/forks`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownerName and repoName added in your function argument"
            };
        }
        const forks = await promise.json();
        forks.responseCode = 200;
        forks.responseMessage = "The response is a JSON array where every element is a fork object";
        return forks;
    } catch (err) {
        return err;
    }
};

const repoHostingPage = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/pages`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownerName and repoName added in your function argument"
            };
        }
        const hostingPage = await promise.json();
        hostingPage.responseCode = 200;
        hostingPage.responseMessage = "The response is a JSON object";
        return hostingPage;
    } catch (err) {
        return err;
    }
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