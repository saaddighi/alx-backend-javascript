const redline = require('readline')

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Welcome to Holberton School, what is your name?"+"\n", 
    function(answer){
        console.log("Your name is:", answer);
        rl.close()
});

rl.on('SIGINT', function(){
    console.log("\nThis important software is now closing");
    process.exit(0)
})
