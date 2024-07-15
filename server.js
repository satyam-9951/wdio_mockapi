import express, { request, response } from 'express';
const app = express();
const port = 3000;

app.get('/api/welcome', (request, response) => {
    response.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/api/users', (request, response) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ];
    response.json(users);
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