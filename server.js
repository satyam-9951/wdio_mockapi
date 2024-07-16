import express, { request, response } from 'express';
const app = express();
const port = 3000;

app.get("/api/welcome", (request, response) => {
    response.json({ message: "Hello from Express!" });
});

app.listen(port, () => {
    console.log(`Server is running on   ${port}`);
});

// Initial fake data
let authorsData = [
    {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        email: "john@example.com",
        book: "1984",
        author: "George Orwell",
    },
    {
        id: 2,
        firstname: "Jane",
        lastname: "Smith",
        email: "jane@example.com",
        book: "To Kill a Mockingbird",
        author: "Harper Lee",
    },
    {
        id: 3,
        firstname: "Michael",
        lastname: "Johnson",
        email: "michael@example.com",
        book: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    },
    {
        id: 4,
        firstname: "Emily",
        lastname: "Davis",
        email: "emily@example.com",
        book: "Pride and Prejudice",
        author: "Jane Austen",
    },
    {
        id: 5,
        firstname: "David",
        lastname: "Wilson",
        email: "david@example.com",
        book: "Moby Dick",
        author: "Herman Melville",
    },
];

// Endpoint to fetch authors
app.get("/api/authors", (req, res) => {
    res.json(authorsData);
});

// Post data
app.post("/api/authors", (req, res) => {
    console.log(req.body);
    res.json(authorsData);
    //  res.status(200).statusText("Data sent");
});

app.delete('/api/users', (request, response) => {
    response.json({ result: 'success' })
})

app.post('/students', (request, reponse) => {
    const message = "students created successfully";
    const students = [
        {
            "id": 1,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
        },
        {
            "id": 2,
            "name": "john snow",
            "username": "starc",
            "email": "starc@melissa.tv",
        }
    ]
    reponse.status(201).json(students);
})

app.put('/students/:id', (request, response) => {
    const userId = request.params.id;
    const updatedUserData = request.body;
    response.status(200).json(updatedUserData);
})