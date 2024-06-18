// Create web server
// POST /comments
// Request body: {content: string}
// Response body: {id: number, content: string}
// Store comments in file

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.post('/comments', (req, res) => {
    const content = req.body.content;
    const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
    const id = comments.length + 1;
    comments.push({id: id, content: content});
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json({id: id, content: content});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});