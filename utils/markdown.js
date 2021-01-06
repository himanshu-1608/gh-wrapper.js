const fetch = require('node-fetch');
require('dotenv').config();
commonHeaders = {
    'accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${process.env.token}`
};

const textToMarkdown = async(text) => {
    try {
        promise = await fetch(
            `https://api.github.com/markdown/raw`, {
                method: 'post',
                body: JSON.stringify(text),
                headers: commonHeaders
            });
        if (promise.status == 404) {
            return {
                "responseCode": promise.status,
                "message": promise.statusText,
                "responseMessage": "This is a standard error response...check the text sent"
            };
        }
        markDown = await promise.text();
        markDown.responseCode = 200;
        markDown.responseMessage = "The response is a JSON object.";
        return markDown;
    } catch (err) {
        return err;
    }
};

module.exports = {
    textToMarkdown
};