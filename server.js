// server.js
import express from 'express';
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