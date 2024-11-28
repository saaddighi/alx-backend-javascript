const redline = require('readline')

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Welcome to Holberton School, what is your name?"+"\n", 
    function(answer){
        console.log("Your name is:", answer);
        console.log("This important software is now closing");
        rl.close()
})