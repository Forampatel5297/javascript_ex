const user = {
    username : null,
    password : null,
    greet: function (){
        return this.username ? console.log(`Hello, I'm user ${this.username}`): console.log('Please assign a username value');        
    },
    updaterusername: function (username) {
        this.username = username;
    },
    updatepassword: function (password) {
        this.password = password;
    },
}

user.greet();
user.updaterusername('foram');
user.updatepassword('12345@abc');
user.greet();