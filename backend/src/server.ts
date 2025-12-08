import express from 'express';
import cors from 'cors';
import posts from './routes/posts';
import projects from './routes/projects';

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/projects', projects);
app.use('/api/posts', posts);

// Root test route
app.get('/', (_, res) => {
    res.send('Backend API is running. Try /api/projects or /api/posts');
});

const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
