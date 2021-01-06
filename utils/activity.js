const fetch = require('node-fetch');
require('dotenv').config();
commonHeaders = {
    'accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${process.env.token}`
};

const listRepoStargazers = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/stargazers`, {
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
        repoStarrers = await promise.json();
        repoStarrers.responseCode = 200;
        repoStarrers.responseMessage = "The response is a JSON array.";
        return repoStarrers;
    } catch (err) {
        return err;
    }
};

const listRepoWatchers = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/subscribers`, {
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
        subscribers = await promise.json();
        subscribers.responseCode = 200;
        subscribers.responseMessage = "The response is a JSON array.";
        return subscribers;
    } catch (err) {
        return err;
    }
};

const listUserStarred = async(userName) => {
    try {
        promise = await fetch(
            `https://api.github.com/users/${userName}/starred`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the username added in your function argument"
            };
        }
        userStarred = await promise.json();
        userStarred.responseCode = 200;
        userStarred.responseMessage = "The response is a JSON array.";
        return userStarred;
    } catch (err) {
        return err;
    }
};

const listUserWatching = async(userName) => {
    try {
        promise = await fetch(
            `https://api.github.com/users/${userName}/subscriptions`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the username added in your function argument"
            };
        }
        userWatches = await promise.json();
        userWatches.responseCode = 200;
        userWatches.responseMessage = "The response is a JSON array.";
        return userWatches;
    } catch (err) {
        return err;
    }
};

module.exports = {
    listRepoStargazers,
    listRepoWatchers,
    listUserStarred,
    listUserWatching
};