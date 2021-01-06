const ghClient = require('../index');
console.log("Starting tests...");

console.log(`ghClient Object:`);
console.log(ghClient);

//User Module Testing

const testUserModule = async _ => {
    const user = await ghClient.getUserByName("himanshu-1608");
    console.log(user);
    const followerList = await ghClient.getFollowersOf('himanshu-1608');
    console.log(followerList);
    const followingList = await ghClient.getFollowingOf('himanshu-1608');
    console.log(followingList);
    const followerToCheck = "himanshu-1608";
    const hisSupreme = "mostlypanda";
    const checker = await ghClient.checkSpecificFollower(followerToCheck, hisSupreme);
    if (checker) {
        console.log(`${followerToCheck} definitely follows ${hisSupreme}...`);
    } else {
        console.log(`Either username entered are wrong or he is not following hisSupreme`);
    }

    setTimeout(testRepoModule, 2000);
};

//Repo Module Testing

const testRepoModule = async _ => {
    const repoListUser = await ghClient.getRepoListOfUser('himanshu-1608');
    console.log(repoListUser);
    const repoListOrg = await ghClient.getRepoListOfOrg('muskemteers');
    console.log(repoListOrg);
    const repoConts = await ghClient.getRepoContributors('himanshu-1608', 'OurSQL');
    console.log(repoConts);
    const repoCols = await ghClient.getRepoCollaborators('muskemteers', 'OurSQL');
    console.log(repoCols);
    const repoData = await ghClient.getRepoDetail('himanshu-1608', 'OurSQL');
    console.log(repoData);
    const repoLangList = await ghClient.getRepoLangs('himanshu-1608', 'OurSQL');
    console.log(repoLangList);
    const repoTopicList = await ghClient.getRepoTopics('himanshu-1608', 'gh-wrapper.js');
    console.log(repoTopicList);
    const repoCommitList = await ghClient.getRepoCommits('himanshu-1608', 'gh-wrapper.js');
    console.log(repoCommitList);
    const readMe = await ghClient.getRepoReadme('himanshu-1608', 'gh-wrapper.js');
    console.log(readMe);
    const forks = await ghClient.getRepoForks('muskemteers', 'OurSQL');
    console.log(forks);
    const hostingPage = await ghClient.getRepoHostingPage('muskemteers', 'OurSQL');
    console.log(hostingPage);

    setTimeout(testOrgModule, 2000);
};

//Orgs Module Testing

const testOrgModule = async _ => {
    const orgData = await ghClient.getOrgDetails('muskemteers');
    console.log(orgData);
    const userOrgList = await ghClient.getUserOrgs('himanshu-1608');
    console.log(userOrgList);
    const orgMems = await ghClient.getOrgAllMembers('muskemteers');
    console.log(orgMems);

    setTimeout(testProjectModule, 2000);
};

//Projects Module Testing

const testProjectModule = async _ => {
    const orgProjects = await ghClient.getListOfOrgProjects('microsoft');
    console.log(orgProjects);
    const userProjects = await ghClient.getListOfUserProjects('mostlypanda');
    console.log(userProjects);

    setTimeout(testActionsModule, 2000);
};

//Actions Module Testing

const testActionsModule = async _ => {
    const workflows = await ghClient.getListOfWorkflows('himanshu-1608', 'gh-wrapper.js');
    console.log(workflows);

    setTimeout(testActivityModule, 2000);
};

//Activity Module Testing

const testActivityModule = async _ => {
    const repoStarrers = await ghClient.getRepoStarrers('muskemteers', 'OurSQL');
    console.log(repoStarrers);
    const subscribers = await ghClient.getRepoWatchers('muskemteers', 'OurSQL');
    console.log(subscribers);
    const userStarred = await ghClient.getStarredReposByUser('himanshu-1608');
    console.log(userStarred);
    const userWatches = await ghClient.getWatchReposByUser('himanshu-1608');
    console.log(userWatches);

    setTimeout(testGistModule, 2000);
};

//Gist Module Testing

const testGistModule = async _ => {
    const gistData = await ghClient.getGistById('4deac4826ae5f05c5f6ab0ce9d73fb73');
    console.log(gistData);
    const userGists = await ghClient.getListOfUserGists('himanshu-1608');
    console.log(userGists);

    setTimeout(testMarkdownModule, 2000);
};

//Markdown Module Testing

const testMarkdownModule = async _ => {
    const markDown = await ghClient.textToMarkdown(`# what a header

    ## Second header here

    [link click here](www.google.com)

    - First Unordered List Point
    - Second Unordered List Point
    - Third Unordered List Point

    1. First Ordered List Point
    2. Second Ordered List Point
    3. Third Ordered List Point`);
    console.log(markDown);

    setTimeout(testPullsModule, 2000);
};

//Pulls Module Testing

const testPullsModule = async _ => {
    const pullReqs = await ghClient.getListOfPullReqs('himanshu-1608', 'A2Z-Learning');
    console.log(pullReqs);
    const pullCommits = await ghClient.getCommitsOfPullReqById('muskemteers', 'OurSQL', 3);
    console.log(pullCommits);

    setTimeout(finalTests, 2000);
};

//Start Chain Reaction here:

setTimeout(testUserModule, 2000);

function finalTests() {
    // throw new Error("Never publish without checking that goddamn c0ns0le");
    console.log(`Everything is working fine!!!\nGet to production :)`);
}