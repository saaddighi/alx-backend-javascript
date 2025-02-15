const fs = require('fs');

function countStudents(path) {
  try {
    // read data
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    // split data and taking only list without header
    const lines = data.split('\n').slice(1, -1);
    // give the header of data
    const header = data.split('\n').slice(0, 1)[0].split(',');
    // find firstname and field index
    const idxFn = header.findIndex((ele) => ele === 'firstname');
    const idxFd = header.findIndex((ele) => ele === 'field');
    // declarate two dictionaries for count each fields and store list of students
    const fields = {};
    const students = {};

    lines.forEach((line) => {
      const list = line.split(',');
      if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
      fields[list[idxFd]] += 1;
      if (!students[list[idxFd]]) students[list[idxFd]] = '';
      students[list[idxFd]] += students[list[idxFd]] ? `, ${list[idxFn]}` : list[idxFn];
    });

    console.log(`Number of students: ${lines.length}`);
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

countStudents('./database.csv');