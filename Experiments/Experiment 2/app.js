const fs = require('fs');

// 1. CREATE - Create a file and write data
fs.writeFileSync('data.txt', 'Hello! This is my first file.');

// 2. READ - Read the file content
const data = fs.readFileSync('data.txt', 'utf8');
console.log("File Content:", data);

// 3. UPDATE - Append new content to the file
fs.appendFileSync('data.txt', '\nThis is updated content.');
console.log("File updated successfully!");

// 4. DELETE - Delete the file
// fs.unlinkSync('data.txt');
// console.log("File deleted successfully!");