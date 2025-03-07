// backend/routes/movies.js
const express = require('express');
const router = express.Router();
const { movies: moviesDb } = require('../data/movieDb');

// Copy dari database agar bisa dimodifikasi
let movies = [...moviesDb];

// GET semua film
router.get('/', (req, res) => {
  res.json(movies);
});

// GET film berdasarkan ID
router.get('/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ error: 'Film tidak ditemukan' });
  res.json(movie);
});

// POST film baru
router.post('/', (req, res) => {
  const newMovie = {
    id: movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1 : 1,
    title: req.body.title,
    director: req.body.director,
    releaseYear: req.body.releaseYear,
    genre: req.body.genre,
    rating: req.body.rating,
    description: req.body.description || "",
    posterUrl: req.body.posterUrl || `https://via.placeholder.com/300x450?text=${encodeURIComponent(req.body.title)}`
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// PUT (update) film
router.put('/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ error: 'Film tidak ditemukan' });
  
  // Update properti film
  Object.keys(req.body).forEach(key => {
    if (key !== 'id') { // hindari update ID
      movie[key] = req.body[key];
    }
  });
  
  res.json(movie);
});

// DELETE film
router.delete('/:id', (req, res) => {
  const index = movies.findIndex(m => m.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Film tidak ditemukan' });
  
  const deletedMovie = movies[index];
  movies.splice(index, 1);
  
  res.json(deletedMovie);
});

module.exports = router;