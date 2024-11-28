const redline = require('readline')

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.on("SIGINT", () => {
    console.log("\nThank you for using the program! Closing now...");
    rl.close();
    process.exit();
})

rl.question("Welcome to Holberton School, what is your name?"+"\n", 
    function(answer){
        console.log("Your name is:", answer);
        rl.close()
});