const userAndPassword = 'pepito2017,12345';

const username = userAndPassword.substr(0, 10);
const Password = userAndPassword.substr(11, 16);

console.log(`The user ${username} has ${Password} as password`);