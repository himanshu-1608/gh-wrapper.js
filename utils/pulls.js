const fetch = require('node-fetch');
require('dotenv').config();
commonHeaders = {
    'accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${process.env.token}`
};

const listPullReqs = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/pulls`, {
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
        pullReqs = await promise.json();
        pullReqs.responseCode = 200;
        pullReqs.responseMessage = "The response is a JSON array of pull requests.";
        return pullReqs;
    } catch (err) {
        return err;
    }
};

const listCommitsOnPR = async(ownerName, repoName, pullNo) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/pulls/${pullNo}/commits`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownerName, repoName and pull no. added in your function argument"
            };
        }
        pullCommits = await promise.json();
        pullCommits.responseCode = 200;
        pullCommits.responseMessage = "The response is a JSON array of commits on a pull request.";
        return pullCommits;
    } catch (err) {
        return err;
    }
};

module.exports = {
    listPullReqs,
    listCommitsOnPR
};