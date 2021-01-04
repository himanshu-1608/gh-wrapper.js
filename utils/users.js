userByName = (userName) => {
    return `Got the user: ${userName}, now searching it.`;
}

usersByName = (userNames) => {
    console.log("Users By Names: ");
    for (users of userNames) {
        console.log(users);
    }
    console.log("End of User List");
    return `Got the users, now searching 'em.`;
}

listFollowers = (userName) => {
    console.log(
        `Follower list of ${userName}: Follower 1, Follower2`
    );
}

listFollowing = (userName) => {
    console.log(
        `User ${userName} follows these people: Following1, Following2`
    );
}

AFollowsB = (user1, user2) => {
    console.log(`${user1} follows ${user2} if the content is not null or if no 404 error`);
}

module.exports = {
    userByName,
    usersByName,
    listFollowers,
    listFollowing,
    AFollowsB
};