const fetch = require('node-fetch');
require('dotenv').config();
commonHeaders = {
    'accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${process.env.token}`
};

const listOrgProjects = async(orgName) => {
    try {
        promise = await fetch(
            `https://api.github.com/orgs/${orgName}/projects`, {
                method: 'get',
                headers: {
                    ...commonHeaders,
                    'accept': 'application/vnd.github.inertia-preview+json'
                }
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the organzation name added in your function argument"
            };
        }
        orgProjects = await promise.json();
        orgProjects.responseCode = 200;
        orgProjects.responseMessage = "The response is a JSON array of projects.";
        return orgProjects;
    } catch (err) {
        return err;
    }
};

const listUserProjects = async(userName) => {
    try {
        promise = await fetch(
            `https://api.github.com/users/${userName}/projects`, {
                method: 'get',
                headers: {
                    ...commonHeaders,
                    'accept': 'application/vnd.github.inertia-preview+json'
                }
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the user name added in your function argument"
            };
        }
        userProjects = await promise.json();
        userProjects.responseCode = 200;
        userProjects.responseMessage = "The response is a JSON array of projects.";
        return userProjects;
    } catch (err) {
        return err;
    }
};

module.exports = {
    listOrgProjects,
    listUserProjects
};