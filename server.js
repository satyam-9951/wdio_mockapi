import express, { request, response } from 'express';
const app = express();
const port = 3000;

app.get("/api/welcome", (request, response) => {
    response.json({ message: "Hello from Express!" });
});

app.listen(port, () => {
    console.log(`Server is running on   ${port}`);
});

const users = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
},
{
    "id": 2,
    "name": "Jane Smith",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
}]
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
app.get('/api/users', (request, response) => {
    response.json(users)
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

app.delete("/api/authors/0", (req, res) => {
    if (authorsData.length > 0) {
        authorsData.splice(0, 1);
        res.json({ result: "success" });
    } else {
        res.status(404).json({ result: "error", message: "Author not found" });
    }
});
app.put("/api/authors/3", (req, res) => {
    const updatedAuthorData = {
        id: 5,
        firstname: "Updated David",
        lastname: "Updated Wilson",
        email: "updateddavid@example.com",
        book: "updated Moby Dick",
        author: "updated Herman Melville",

    };

    if (authorsData.length > 3) {
        authorsData[3] = updatedAuthorData
        res.json({ result: "success", author: authorsData[3] });

    } else {
        res.status(404).json({ result: "error", message: "Author not found" });
    }
});