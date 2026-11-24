const express = require('express');

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Sample data
let students = [
    { id: 1, name: "Piyush", age: 20 },
    { id: 2, name: "Rahul", age: 21 },
    { id: 3, name: "Aman", age: 22 }
];

// 1. GET - Retrieve all students
app.get('/students', (req, res) => {
    res.json(students);
});

// 2. POST - Add a new student
app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);

    res.send("Student added successfully!");
});

// 3. PUT - Update a student
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (student) {
        student.name = req.body.name;
        student.age = req.body.age;

        res.send("Student updated successfully!");
    } else {
        res.status(404).send("Student not found!");
    }
});

// 4. DELETE - Delete a student
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.send("Student deleted successfully!");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
}); 