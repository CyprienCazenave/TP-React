// src/components/MovieList.tsx
import React, { useEffect, useState } from 'react';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=362e17a88f9906be025c3dcf260d71b0`
        );

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des films');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Erreur lors de la récupération des films :', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Liste de films populaires</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;