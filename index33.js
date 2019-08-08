let usercount = 100;
let men = 100;
let women = 100;
usercount = usercount + 5;
console.log("increment the user count by ", usercount);

usercount = usercount - 3;
console.log("decrement the user count by ", usercount);

men = usercount%50;
console.log("user id as men" , usercount);


women = usercount%50;
console.log("user id as women" , usercount);

console.log(`${usercount} ,${men} , ${women}` );

usercount -= 3;
console.log(usercount);
usercount += 10;
console.log(usercount);


usercount *= 3;
console.log(usercount);


usercount /= 2;
console.log(usercount);