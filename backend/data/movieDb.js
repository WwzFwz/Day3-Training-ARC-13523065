
const movies = [
    {
      id: 1,
      title: "Dune: Part Two",
      director: "Denis Villeneuve",
      releaseYear: 2024,
      genre: ["Sci-Fi", "Adventure"],
      rating: 8.7,
      posterUrl: "default.png",
      description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
    },
    {
      id: 2,
      title: "Furiosa: A Mad Max Saga",
      director: "George Miller",
      releaseYear: 2024,
      genre: ["Action", "Adventure"],
      rating: 8.2,
      posterUrl: "/data/default.png",
      description: "The origin story of renegade warrior Furiosa before her encounter with Mad Max."
    },
    {
      id: 3,
      title: "Deadpool & Wolverine",
      director: "Shawn Levy",
      releaseYear: 2024,
      genre: ["Action", "Comedy"],
      rating: 8.5,
      posterUrl: "/data/default.png",
      description: "Deadpool teams up with Wolverine in an adventure across the multiverse."
    },
    {
      id: 4,
      title: "The Fall Guy",
      director: "David Leitch",
      releaseYear: 2024,
      genre: ["Action", "Comedy"],
      rating: 7.8,
      posterUrl: "/data/default.png",
      description: "A stuntman is drawn back to a movie set to find a missing movie star and solve a conspiracy."
    },
    {
      id: 5,
      title: "Godzilla x Kong: The New Empire",
      director: "Adam Wingard",
      releaseYear: 2024,
      genre: ["Action", "Sci-Fi"],
      rating: 7.6,
      posterUrl: "/data/default.png",
      description: "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins."
    },
    {
      id: 6,
      title: "Kingdom of the Planet of the Apes",
      director: "Wes Ball",
      releaseYear: 2024,
      genre: ["Sci-Fi", "Adventure"],
      rating: 7.9,
      posterUrl: "/data/default.png",
      description: "Many years after Caesar's reign, a new ape leader emerges as human civilization continues to crumble."
    }
  ];
  
  // Data trending films
  const trendingMovies = {
    results: [
      {
        id: 101,
        title: "Dune: Part Two",
        poster_path: "/data/default.png",
        vote_average: 8.7,
        release_date: "2024-03-01",
        overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
      },
      {
        id: 102,
        title: "Godzilla x Kong: The New Empire",
        poster_path: "/data/default.png",
        vote_average: 7.8,
        release_date: "2024-04-12",
        overview: "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins."
      },
      {
        id: 103,
        title: "Inside Out 2",
        poster_path: "/data/default.png",
        vote_average: 8.4,
        release_date: "2024-06-14",
        overview: "As Riley enters adolescence, new emotions join the team inside her mind, creating fresh challenges."
      },
      {
        id: 104,
        title: "Deadpool & Wolverine",
        poster_path: "/data/default.png",
        vote_average: 8.5,
        release_date: "2024-07-26",
        overview: "Deadpool teams up with Wolverine in an adventure across the multiverse."
      },
      {
        id: 105,
        title: "The Garfield Movie",
        poster_path: "/data/default.png",
        vote_average: 7.2,
        release_date: "2024-05-24",
        overview: "Garfield, the lasagna-loving cat, gets into mischief with his canine friend Odie."
      },
      {
        id: 106,
        title: "Bad Boys: Ride or Die",
        poster_path: "/data/default.png",
        vote_average: 7.5,
        release_date: "2024-06-07",
        overview: "Miami detectives Mike Lowrey and Marcus Burnett team up again for one last ride."
      },
      {
        id: 107,
        title: "Kingdom of the Planet of the Apes",
        poster_path: "/data/default.png",
        vote_average: 7.9,
        release_date: "2024-05-10",
        overview: "Many years after Caesar's reign, a new ape leader emerges as human civilization continues to crumble."
      },
      {
        id: 108,
        title: "Alien: Romulus",
        poster_path: "/data/default.png",
        vote_average: 8.1,
        release_date: "2024-08-16",
        overview: "Young space colonizers face the most terrifying life form in the universe."
      }
    ]
  };
  
  // Semua film untuk pencarian
  const allMovies = [
    {
      id: 101,
      title: "Dune: Part Two",
      poster_path: "/data/default.png",
      vote_average: 8.7,
      release_date: "2024-03-01"
    },
    {
      id: 102,
      title: "Godzilla x Kong: The New Empire",
      poster_path: "/data/default.png",
      vote_average: 7.8,
      release_date: "2024-04-12"
    },
    {
      id: 103,
      title: "Inside Out 2",
      poster_path: "/data/default.png",
      vote_average: 8.4,
      release_date: "2024-06-14"
    },
    {
      id: 104,
      title: "Deadpool & Wolverine",
      poster_path: "/data/default.png",
      vote_average: 8.5,
      release_date: "2024-07-26"
    },
    {
      id: 109,
      title: "Joker: Folie à Deux",
      poster_path: "/data/default.png",
      vote_average: 8.3,
      release_date: "2024-10-04"
    },
    {
      id: 110,
      title: "Venom: The Last Dance",
      poster_path: "/data/default.png",
      vote_average: 7.7,
      release_date: "2024-10-25"
    },
    {
      id: 111,
      title: "Gladiator II",
      poster_path: "/data/default.png",
      vote_average: 8.6,
      release_date: "2024-11-22"
    },
    {
      id: 112,
      title: "Sonic the Hedgehog 3",
      poster_path: "/data/default.png",
      vote_average: 7.4,
      release_date: "2024-12-20"
    }
  ];
  
  module.exports = {
    movies,
    trendingMovies,
    allMovies
  };


