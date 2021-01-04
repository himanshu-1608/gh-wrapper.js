const ghClient = require('../index');
console.log("Starting tests...");

console.log(`Value of ghClient:`);
console.log(ghClient);

//User Module Testing

const testUserModule = async _ => {
    await ghClient.getUserByName("himanshu-1608");
    await ghClient.getUsersByName(
        ["himanshu-1608", "mostlypanda", "insaiyann", "sindresorhus"]
    );
    await ghClient.getFollowersOf('himanshu-1608');
    await ghClient.getFollowingOf('himanshu-1608');
    await ghClient.checkSpecificFollower('himanshu-1608', 'mostlypanda');

    setTimeout(testRepoModule, 2000);
};

//Repo Module Testing

const testRepoModule = async _ => {
    await ghClient.getRepoListOfUser('himanshu-1608');
    await ghClient.getRepoListOfOrg('muskemteers');
    await ghClient.getRepoContributors('himanshu-1608', 'OurSQL');
    await ghClient.getRepoCollaborators('himanshu-1608', 'OurSQL');
    await ghClient.getRepoDetail('himanshu-1608', 'OurSQL');
    await ghClient.getRepoLangs('himanshu-1608', 'OurSQL');
    await ghClient.getRepoTopics('himanshu-1608', 'OurSQL');
    await ghClient.getRepoCommits('himanshu-1608', 'OurSQL');
    await ghClient.getRepoReadme('himanshu-1608', 'OurSQL');
    await ghClient.getRepoForks('himanshu-1608', 'OurSQL');
    await ghClient.getRepoHostingPage('muskemteers', 'OurSQL');

    setTimeout(testOrgModule, 2000);
};

//Orgs Module Testing

const testOrgModule = async _ => {
    await ghClient.getOrgDetails('muskemteers');
    await ghClient.getUserOrgs('himanshu-1608');
    await ghClient.getOrgAllMembers('muskemteers');

    setTimeout(testProjectModule, 2000);
};

//Projects Module Testing

const testProjectModule = async _ => {
    await ghClient.getListOfOrgProjects('muskemteers');
    await ghClient.getListOfUserProjects('himanshu-1608');

    setTimeout(testActionsModule, 2000);
}

//Actions Module Testing

const testActionsModule = async _ => {
    await ghClient.getListOfWorkflows('himanshu-1608', 'gh-wrapper.js');

    setTimeout(testActivityModule, 2000);
}

//Activity Module Testing

const testActivityModule = async _ => {
    await ghClient.getRepoStarrers('muskemteers', 'OurSQL');
    await ghClient.getRepoWatchers('muskemteers', 'OurSQL');
    await ghClient.getStarredReposByUser('himanshu-1608');
    await ghClient.getWatchReposByUser('himanshu-1608');
}

//Start Chain Reaction here:

setTimeout(testUserModule, 2000);

//throw new Error("Never publish without checking that goddamn c0ns0le");