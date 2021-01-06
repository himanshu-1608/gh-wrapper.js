const fetch = require('node-fetch');
require('dotenv').config();
commonHeaders = {
    'accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${process.env.token}`
};

const orgDetails = async(orgName) => {
    try {
        promise = await fetch(
            `https://api.github.com/orgs/${orgName}`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the organization name added in your function argument"
            };
        }
        orgData = await promise.json();
        orgData.responseCode = 200;
        orgData.responseMessage = "The response is a JSON object.";
        return orgData;
    } catch (err) {
        return err;
    }
}

const userOrgs = async(userName) => {
    try {
        promise = await fetch(
            `https://api.github.com/users/${userName}/orgs`, {
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
        userOrgList = await promise.json();
        userOrgList.responseCode = 200;
        userOrgList.responseMessage = "The response is a JSON array of organization objects.";
        return userOrgList;
    } catch (err) {
        return err;
    }
}

const listOrgMembers = async(orgName) => {
    try {
        promise = await fetch(
            `https://api.github.com/orgs/${orgName}/members`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the organization name added in your function argument"
            };
        }
        orgMems = await promise.json();
        orgMems.responseCode = 200;
        orgMems.responseMessage = "The response is a JSON array of github users.";
        return orgMems;
    } catch (err) {
        return err;
    }
}

module.exports = {
    orgDetails,
    userOrgs,
    listOrgMembers
};