import express from "express";
const app = express();
app.use(express.json());
let users = [{
    id:1,
    name:"A",
    email:"a@abes.ac.in"
},
{
    id:2,
    name:"B",
    email:"b@abes.ac.in"
}];

// GET request 
app.get("/users",(req, res) => {
    res.json(users);
});

// POST request to create a new server
app.post("/users",(req, res) => {
    const user = {
        id:users.length+1,
        name:req.body.name,
        email:req.body.email
    };
    users.push(user);
    res.json(user);
});

// PUT request to update a user by 10
app.put("/users", (req, res) => {
    let user = users.find(u => u.id == req.body.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json(user);
});

app.listen(8000,() => {
    console.log("Server is running on http://localhost:8000")
})





// Create RESTAPI for 100 products with id, name, price, description. Implement GET, POST, PUT and DELETE requests for products.