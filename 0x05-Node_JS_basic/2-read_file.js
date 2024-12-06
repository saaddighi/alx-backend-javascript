const fs = require('fs')

function countStudents(path){
    try {   
        const file = fs.readFileSync(path, "utf-8");
        const lines = file.split('\n');
        const studentnb = (lines.filter(line => line.trim() !== "").length) - 1;
        console.log(`Number of students: ${studentnb}`);
        const vlines = lines.filter(line => line.trim() !== "")
        const dict = vlines.slice(1).map(line => {
            const [firstname, lastname, age, field] = line.split(',');
            return {firstname, lastname, age, field}
        });
          
        const fields = {};
        for (const i of lines){
            if (i !== 0){
                if (fields[lines[i][3]]) fields[lines[i][3]] = []
                fields[lines[i][3]].push(lines[i][0])
            }
        }
        delete fields.field;

        for (const key of Object.keys(fields)) {
            console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`,
            );
        }

        
    
    } catch (err){
        if (err.code === "ENOENT"){
            console.error("Cannot load the database");
        };
    };
};

countStudents('./database.csv')
