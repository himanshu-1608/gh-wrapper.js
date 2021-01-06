const fetch = require('node-fetch');
require('dotenv').config();
commonHeaders = {
    'accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${process.env.token}`
};

const listWorkflows = async(ownerName, repoName) => {
    try {
        promise = await fetch(
            `https://api.github.com/repos/${ownerName}/${repoName}/actions/workflows`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the ownername and reponame added in your function argument"
            };
        }
        workflows = await promise.json();
        workflows.responseCode = 200;
        workflows.responseMessage = "The response is a JSON object where total_count is total workflows and then there is a JSON array of workflows with key 'workflows'";
        return workflows;
    } catch (err) {
        return err;
    }
};

module.exports = {
    listWorkflows
};