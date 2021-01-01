const ghClient = require('./index');
console.log("Starting tests...");

console.log(`Value of ghClient:\n` + ghClient);

const val1 = ghClient.getUserByName("himanshu-1608");
const val2 = ghClient.getUsersByName(
    ["himanshu-1608", "mostlypanda", "insaiyann", "sindresorhus"]
);
console.log(val1);
console.log(val2);

//throw new Error("Never publish without checking that goddamn c0ns0le");