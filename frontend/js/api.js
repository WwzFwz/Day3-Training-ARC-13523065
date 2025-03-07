// frontend/js/api.js
const API_BASE_URL = 'http://localhost:3000/api';

// Fungsi untuk mengambil film trending dari API TMDB
async function getTrendingMovies() {
    try {
        const response = await fetch(`${API_BASE_URL}/tmdb/trending`);
        if (!response.ok) {
            throw new Error('Failed to fetch trending movies');
        }
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        return [];
    }
}

// Fungsi untuk mengambil film dari API lokal kita
async function getLocalMovies() {
    try {
        const response = await fetch(`${API_BASE_URL}/movies`);
        if (!response.ok) {
            throw new Error('Failed to fetch local movies');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching local movies:', error);
        return [];
    }
}

// Fungsi untuk mencari film
async function searchMovies(query) {
    try {
        const response = await fetch(`${API_BASE_URL}/tmdb/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Failed to search movies');
        }
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
}

// Fungsi untuk mendapatkan detail film (API lokal)
async function getMovieDetails(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/movies/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movie details');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}

// Fungsi untuk menambahkan film baru (API lokal)
async function addMovie(movieData) {
    try {
        const response = await fetch(`${API_BASE_URL}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to add movie');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error adding movie:', error);
        return null;
    }
}

// Fungsi untuk mengupdate film (API lokal)
async function updateMovie(id, movieData) {
    try {
        const response = await fetch(`${API_BASE_URL}/movies/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to update movie');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error updating movie:', error);
        return null;
    }
}

// Fungsi untuk menghapus film (API lokal)
async function deleteMovie(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/movies/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('Failed to delete movie');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error deleting movie:', error);
        return null;
    }
}