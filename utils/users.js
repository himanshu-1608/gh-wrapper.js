const userByName = (userName) => {
    return `Got the user: ${userName}, now searching it.`;
}

const listFollowers = (userName) => {
    console.log(
        `Follower list of ${userName}: Follower 1, Follower2`
    );
}

const listFollowing = (userName) => {
    console.log(
        `User ${userName} follows these people: Following1, Following2`
    );
}

const AFollowsB = (followerToCheck, hisGod) => {
    console.log(`${followerToCheck} follows ${hisGod} if the response code is 200ish, and doesn't if response is 400ish`);
}

module.exports = {
    userByName,
    listFollowers,
    listFollowing,
    AFollowsB
};