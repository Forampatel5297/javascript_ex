
const user = {username: 'batman',
    password: 'Alfred1960ROCKS!',
};

const login = function (user) {
    return (user.username === 'batman' && user.password === 'Alfred1960ROCKS!') ? 'Welcome back batman!!' : 'Sorry, you can\'t enter the Batcave, try again..';
}

console.log(login(user));
