const fetch = require('node-fetch');
require('dotenv').config();
commonHeaders = {
    'accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${process.env.token}`
};

const userByName = async(userName) => {
    try {
        promise = await fetch(`https://api.github.com/users/${userName}`, {
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
        user = await promise.json();
        user.responseCode = 200;
        user.responseMessage = "The response is a JSON object.";
        return user;
    } catch (err) {
        return err;
    }
}

const listFollowers = async(userName) => {
    try {
        promise = await fetch(`https://api.github.com/users/${userName}/followers`, {
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
        followerList = await promise.json();
        followerList.responseCode = 200;
        followerList.responseMessage = "The response is a JSON array.";
        return followerList;
    } catch (err) {
        return err;
    }
}

const listFollowing = async(userName) => {
    try {
        promise = await fetch(`https://api.github.com/users/${userName}/following`, {
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
        followingList = await promise.json();
        followingList.responseCode = 200;
        followingList.responseMessage = "The response is a JSON array.";
        return followingList;
    } catch (err) {
        return err;
    }
}

const AFollowsB = async(followerToCheck, hisSupreme) => {
    try {
        promise = await fetch(
            `https://api.github.com/users/${followerToCheck}/following/${hisSupreme}`, {
                method: 'get',
                headers: commonHeaders
            });
        if (promise.status == 204) {
            return true;
        } else return false;
    } catch (err) {
        return err;
    }
}

module.exports = {
    userByName,
    listFollowers,
    listFollowing,
    AFollowsB
};