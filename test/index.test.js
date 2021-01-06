const ghClient = require('../index');
console.log("Starting tests...");

// console.log(`ghClient Object:`);
// console.log(ghClient);

//User Module Testing

const testUserModule = async _ => {
    // const user = await ghClient.getUserByName("himanshu-1608");
    // console.log(user);
    // const followerList = await ghClient.getFollowersOf('himanshu-1608');
    // console.log(followerList);
    // const followingList = await ghClient.getFollowingOf('himanshu-1608');
    // console.log(followingList);
    // const followerToCheck = "himanshu-1608";
    // const hisSupreme = "mostlypanda";
    // const checker = await ghClient.checkSpecificFollower(followerToCheck, hisSupreme);
    // if (checker) {
    //     console.log(`${followerToCheck} definitely follows ${hisSupreme}...`);
    // } else {
    //     console.log(`Either username entered are wrong or he is not following hisSupreme`);
    // }
    setTimeout(testRepoModule, 0);
};

//Repo Module Testing

const testRepoModule = async _ => {
    // const repoList = await ghClient.getRepoListOfUser('himanshu-1608');
    // console.log(repoList);
    // const repoList = await ghClient.getRepoListOfOrg('muskemteers');
    // console.log(repoList);
    // const repoConts = await ghClient.getRepoContributors('himanshu-1608', 'OurSQL');
    // console.log(repoConts);
    // const repoCols = await ghClient.getRepoCollaborators('muskemteers', 'OurSQL');
    // console.log(repoCols);
    // const repoData = await ghClient.getRepoDetail('himanshu-1608', 'OurSQL');
    // console.log(repoData);
    // const repoLangList = await ghClient.getRepoLangs('himanshu-1608', 'OurSQL');
    // console.log(repoLangList);
    // const repoTopicList = await ghClient.getRepoTopics('himanshu-1608', 'gh-wrapper.js');
    // console.log(repoTopicList);
    // const repoCommitList = await ghClient.getRepoCommits('himanshu-1608', 'gh-wrapper.js');
    // console.log(repoCommitList);
    // const readMe = await ghClient.getRepoReadme('himanshu-1608', 'gh-wrapper.js');
    // console.log(readMe);
    // const forks = await ghClient.getRepoForks('muskemteers', 'OurSQL');
    // console.log(forks);
    // const hostingPage = await ghClient.getRepoHostingPage('muskemteers', 'OurSQL');
    // console.log(hostingPage);
    setTimeout(testOrgModule, 0);
};

//Orgs Module Testing

const testOrgModule = async _ => {
    await ghClient.getOrgDetails('muskemteers');
    // await ghClient.getUserOrgs('himanshu-1608');
    // await ghClient.getOrgAllMembers('muskemteers');

    // setTimeout(testProjectModule, 2000);
};

//Projects Module Testing

const testProjectModule = async _ => {
    await ghClient.getListOfOrgProjects('muskemteers');
    await ghClient.getListOfUserProjects('himanshu-1608');

    setTimeout(testActionsModule, 2000);
};

//Actions Module Testing

const testActionsModule = async _ => {
    await ghClient.getListOfWorkflows('himanshu-1608', 'gh-wrapper.js');

    setTimeout(testActivityModule, 2000);
};

//Activity Module Testing

const testActivityModule = async _ => {
    await ghClient.getRepoStarrers('muskemteers', 'OurSQL');
    await ghClient.getRepoWatchers('muskemteers', 'OurSQL');
    await ghClient.getStarredReposByUser('himanshu-1608');
    await ghClient.getWatchReposByUser('himanshu-1608');

    setTimeout(testGistModule, 2000);
};

//Gist Module Testing

const testGistModule = async _ => {
    await ghClient.getGistById('wq3kjg324');
    await ghClient.getListOfUserGists('himanshu-1608');

    setTimeout(testMarkdownModule, 2000);
};

//Markdown Module Testing

const testMarkdownModule = async _ => {
    await ghClient.textToMarkdown(
        `
        # what a header
        
        ## Second header here

        [link click here](www.google.com)

        - First Unordered List Point
        - Seconf Unordered List Point
        - Third Unordered List Point
        
        1. First Ordered List Point
        2. Seconf Ordered List Point
        3. Third Ordered List Point
        `
    );

    setTimeout(testPullsModule, 2000);
};

//Pulls Module Testing

const testPullsModule = async _ => {
    await ghClient.getListOfPullReqs('muskemteers', 'OurSQL');
    await ghClient.getCommitsOfPullReqById('muskemteers', 'OurSQL', 3);
};

//Start Chain Reaction here:

setTimeout(testUserModule, 2000);

//throw new Error("Never publish without checking that goddamn c0ns0le");