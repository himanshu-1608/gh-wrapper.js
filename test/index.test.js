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

//Org Module Testing

const testOrgModule = async _ => {
    await ghClient.getOrgDetails('muskemteers');
    await ghClient.getUserOrgs('himanshu-1608');
    await ghClient.getOrgAllMembers('muskemteers');

    //setTimeout(shit, 2000);
};

setTimeout(testUserModule, 2000);

//throw new Error("Never publish without checking that goddamn c0ns0le");