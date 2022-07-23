const fs = require("fs");

//readFile
const getDbStudents = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./database/db.json", "utf-8", (err, data) => {
            const students = JSON.parse(data);
            resolve(students);
        })
    })
}

//writeFile
const insertDbStudents = (students) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./database/db.json", JSON.stringify(students), (err) => {
            resolve("Successfully added!");
          })
        })
}

module.exports.getDbStudents = getDbStudents;
module.exports.insertDbStudents = insertDbStudents;