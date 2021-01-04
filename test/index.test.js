const ghClient = require('../index');
console.log("Starting tests...");

console.log(`Value of ghClient:`);
console.log(ghClient);

console.log(ghClient.getUserByName("himanshu-1608"));
console.log(ghClient.getUsersByName(
    ["himanshu-1608", "mostlypanda", "insaiyann", "sindresorhus"]
));
console.log(ghClient.getFollowersOf('himanshu-1608'));
console.log(ghClient.getFollowingOf('himanshu-1608'));
console.log(ghClient.checkSpecificFollower('himanshu-1608', 'mostlypanda'));

throw new Error("Never publish without checking that goddamn c0ns0le");