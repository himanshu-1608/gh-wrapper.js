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

export default {
    userByName,
    usersByName
};