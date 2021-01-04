const ghClient = require('../index');
console.log("Starting tests...");

console.log(`Value of ghClient:`);
console.log(ghClient);

//User Module Testing

console.log(ghClient.getUserByName("himanshu-1608"));
console.log(ghClient.getUsersByName(
    ["himanshu-1608", "mostlypanda", "insaiyann", "sindresorhus"]
));
console.log(ghClient.getFollowersOf('himanshu-1608'));
console.log(ghClient.getFollowingOf('himanshu-1608'));
console.log(ghClient.checkSpecificFollower('himanshu-1608', 'mostlypanda'));

//Repo Module Testing

console.log(ghClient.getRepoListOfUser('himanshu-1608'));
console.log(ghClient.getRepoListOfOrg('muskemteers'));
console.log(ghClient.getRepoContributors('himanshu-1608', 'OurSQL'));
console.log(ghClient.getRepoCollaborators('himanshu-1608', 'OurSQL'));
console.log(ghClient.getRepoDetail('himanshu-1608', 'OurSQL'));
console.log(ghClient.getRepoLangs('himanshu-1608', 'OurSQL'));
console.log(ghClient.getRepoTopics('himanshu-1608', 'OurSQL'));
console.log(ghClient.getRepoCommits('himanshu-1608', 'OurSQL'));
console.log(ghClient.getRepoReadme('himanshu-1608', 'OurSQL'));
console.log(ghClient.getRepoForks('himanshu-1608', 'OurSQL'));
console.log(ghClient.getRepoHostingPage('muskemteers', 'OurSQL'));



throw new Error("Never publish without checking that goddamn c0ns0le");