const fs = require('fs');

// Not Blocking while I/O
console.log("Before");
fs.readFile("myfile.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log('File Read Without blocking:', data);
});
console.log("After");


// Blocking while I/O
console.log('Start of blocking code');
const data = fs.readFileSync('myfile.txt', 'utf8'); // Blocks here
console.log(data);
console.log('Blocking operation completed');