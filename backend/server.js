// backend/server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config({ path: './config/.env' });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const movieRoutes = require('./routes/movies');

// Use routes
app.use('/api/movies', movieRoutes);

// Import data dari file database
const { trendingMovies, allMovies } = require('./data/movieDb');

app.get('/api/tmdb/trending', async (req, res) => {
  try {
    res.json(trendingMovies);
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    res.status(500).json({ error: 'Failed to fetch trending movies' });
  }
});

app.get('/api/tmdb/search', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    // Filter berdasarkan query (case insensitive)
    const lowerQuery = query.toLowerCase();
    const results = allMovies.filter(movie => 
      movie.title.toLowerCase().includes(lowerQuery)
    );
    
    res.json({ results });
  } catch (error) {
    console.error('Error searching movies:', error);
    res.status(500).json({ error: 'Failed to search movies' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/movies`);
});