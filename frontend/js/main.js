document.addEventListener('DOMContentLoaded', () => {
  
    loadTrendingMovies();
    loadLocalMovies();

    setupSearch();
    

    document.getElementById('close-details').addEventListener('click', () => {
        document.getElementById('movie-details').classList.add('hidden');
    });
});


async function loadTrendingMovies() {
    const trendingContainer = document.getElementById('trending-movies');
    trendingContainer.innerHTML = '<div class="loading">Loading trending movies...</div>';
    
    try {
        const movies = await getTrendingMovies();
        
        if (movies.length === 0) {
            trendingContainer.innerHTML = '<p class="no-results">No trending movies found.</p>';
            return;
        }
        
        trendingContainer.innerHTML = '';
        
        movies.slice(0, 8).forEach(movie => {
            const movieCard = createMovieCard({
                id: movie.id,
                title: movie.title,
                posterUrl: movie.poster_path,
                rating: movie.vote_average,
                year: movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'
            }, 'tmdb');
            
            trendingContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error loading trending movies:', error);
        trendingContainer.innerHTML = '<p class="error">Failed to load trending movies. Please try again later.</p>';
    }
}


async function loadLocalMovies() {
    const localContainer = document.getElementById('local-movies');
    localContainer.innerHTML = '<div class="loading">Loading latest movies...</div>';
    
    try {
        const movies = await getLocalMovies();
        
        if (movies.length === 0) {
            localContainer.innerHTML = '<p class="no-results">No movies found.</p>';
            return;
        }
        
        localContainer.innerHTML = '';
        
        movies.forEach(movie => {
            const movieCard = createMovieCard({
                id: movie.id,
                title: movie.title,
                posterUrl: movie.posterUrl,
                rating: movie.rating,
                year: movie.releaseYear
            }, 'local');
            
            localContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error loading local movies:', error);
        localContainer.innerHTML = '<p class="error">Failed to load movies. Please try again later.</p>';
    }
}

// awalnya aku mau dr tmdb tpi ga jadi
function createMovieCard(movie, source = 'local') {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.dataset.id = movie.id;
    movieCard.dataset.source = source;

    let posterUrl = movie.posterUrl;
    

    if (source === 'tmdb') {
        if (movie.posterUrl && movie.posterUrl.includes('http')) {
            posterUrl = movie.posterUrl;
        } else {
            posterUrl = '../data/default.jpg';
        }
    }
    
    movieCard.innerHTML = `
        <div class="movie-poster">
            <img src="${posterUrl}" alt="${movie.title}" loading="lazy">
            <div class="movie-rating">${movie.rating ? movie.rating.toFixed(1) : 'N/A'}</div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-year">${movie.year}</p>
        </div>
    `;
    

    movieCard.addEventListener('click', () => {
        if (source === 'local') {
            showLocalMovieDetails(movie.id);
        } else {

            document.getElementById('details-content').innerHTML = `
                <div class="movie-detail-header">
                    <img src="${posterUrl}" alt="${movie.title}" class="detail-poster">
                    <div class="detail-info">
                        <h2>${movie.title} (${movie.year})</h2>
                        <div class="detail-rating">
                            <i class="fas fa-star"></i> ${movie.rating ? movie.rating.toFixed(1) : 'N/A'}/10
                        </div>
                        <p>Source: TMDB API</p>
                    </div>
                </div>
                <div class="detail-description">
                    <p>Detailed information not available. This is from the external TMDB API.</p>
                </div>
            `;
            document.getElementById('movie-details').classList.remove('hidden');
        }
    });
    
    return movieCard;
}

// Function to show details for a movie from our local API
async function showLocalMovieDetails(movieId) {
    const detailsContent = document.getElementById('details-content');
    detailsContent.innerHTML = '<div class="loading">Loading details...</div>';
    document.getElementById('movie-details').classList.remove('hidden');
    
    try {
        const movie = await getMovieDetails(movieId);
        
        if (!movie) {
            detailsContent.innerHTML = '<p class="error">Movie details not found.</p>';
            return;
        }
        
        detailsContent.innerHTML = `
            <div class="movie-detail-header">
                <img src="${movie.posterUrl}" alt="${movie.title}" class="detail-poster">
                <div class="detail-info">
                    <h2>${movie.title} (${movie.releaseYear})</h2>
                    <div class="detail-director">Director: ${movie.director}</div>
                    <div class="detail-genre">Genre: ${movie.genre.join(', ')}</div>
                    <div class="detail-rating">
                        <i class="fas fa-star"></i> ${movie.rating.toFixed(1)}/10
                    </div>
                </div>
            </div>
            <div class="detail-actions">
                <button class="btn btn-edit" data-id="${movie.id}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-delete" data-id="${movie.id}">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        
        // Add event listeners for edit and delete buttons
        const editBtn = detailsContent.querySelector('.btn-edit');
        const deleteBtn = detailsContent.querySelector('.btn-delete');
        
        if (editBtn) {
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                // You could implement an edit form here
                alert('Edit functionality would be implemented here');
            });
        }
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', async (e) => {
                e.stopPropagation();
                if (confirm('Are you sure you want to delete this movie?')) {
                    const deleted = await deleteMovie(movie.id);
                    if (deleted) {
                        document.getElementById('movie-details').classList.add('hidden');
                        loadLocalMovies(); // Reload the movie list
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error showing movie details:', error);
        detailsContent.innerHTML = '<p class="error">Failed to load movie details. Please try again later.</p>';
    }
}

// Function to setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const searchResultsGrid = document.getElementById('search-results-grid');
    
    async function performSearch() {
        const query = searchInput.value.trim();
        
        if (!query) {
            searchResults.classList.add('hidden');
            return;
        }
        
        // Tampilkan bagian hasil pencarian
        searchResults.classList.remove('hidden');
        searchResultsGrid.innerHTML = '<div class="loading">Mencari film...</div>';
        
        // Scroll ke bagian hasil pencarian
        searchResults.scrollIntoView({ behavior: 'smooth' });
        
        try {
            const movies = await searchMovies(query);
            
            if (movies.length === 0) {
                searchResultsGrid.innerHTML = '<p class="no-results">Tidak ada film yang cocok dengan pencarian Anda.</p>';
                return;
            }
            
            searchResultsGrid.innerHTML = '';
            
            movies.forEach(movie => {
                const movieCard = createMovieCard({
                    id: movie.id,
                    title: movie.title,
                    posterUrl: movie.poster_path,
                    rating: movie.vote_average,
                    year: movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'
                }, 'tmdb');
                
                searchResultsGrid.appendChild(movieCard);
            });
        } catch (error) {
            console.error('Error searching movies:', error);
            searchResultsGrid.innerHTML = '<p class="error">Gagal mencari film. Silakan coba lagi nanti.</p>';
        }
    }
    
    // Saat tombol pencarian diklik
    searchButton.addEventListener('click', performSearch);
    
    // Saat Enter ditekan di input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    setTimeout(() => {
        searchInput.focus();
    }, 1000);
    
    // Tutup hasil pencarian ketika mengklik di luar
    document.addEventListener('click', (e) => {
        const isClickInside = searchInput.contains(e.target) || 
                              searchButton.contains(e.target) || 
                              searchResults.contains(e.target);
        
        if (!isClickInside && !searchResults.classList.contains('hidden')) {
            // Cek jika pengguna mengklik di luar area pencarian
            if (searchResults.getBoundingClientRect().top < e.clientY) {
                // Jangan sembunyikan jika pengguna mengklik di bawah area pencarian
                return;
            }
            searchResults.classList.add('hidden');
        }
    });
}