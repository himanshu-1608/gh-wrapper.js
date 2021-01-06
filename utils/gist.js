const fetch = require('node-fetch');
require('dotenv').config();
commonHeaders = {
    'accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${process.env.token}`
};

const gistDetails = async(gistId) => {
    try {
        promise = await fetch(
            `https://api.github.com/gists/${gistId}`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the gistId added in your function argument"
            };
        }
        gistData = await promise.json();
        gistData.responseCode = 200;
        gistData.responseMessage = "The response is a JSON object.";
        return gistData;
    } catch (err) {
        return err;
    }
};

const listUserGists = async(userName) => {
    try {
        promise = await fetch(
            `https://api.github.com/users/${userName}/gists`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the user name added in your function argument"
            };
        }
        userGists = await promise.json();
        userGists.responseCode = 200;
        userGists.responseMessage = "The response is a JSON array.";
        return userGists;
    } catch (err) {
        return err;
    }
};

module.exports = {
    gistDetails,
    listUserGists
};