const readline = require('readline')

if (process.stdin.isTTY){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("Welcome to Holberton School, what is your name?\n", function(answer){
            console.log("Your name is:", answer);
            rl.close()
    });
    
    rl.on('SIGINT', function(){
        console.log("\nThis important software is now closing");
        process.exit(0)
    });
} else{
    let input = ""
    process.stdin.on('data', function (data){
        input = data.toString();
    });
    process.stdin.on('end', function(){
        console.log("Your name is:", input.trim())
    });
}
