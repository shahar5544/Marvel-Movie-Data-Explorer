import React, { useState, useEffect } from 'react';
import { getMoviesPerActor } from '../services/apiService';

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<{ [key: string]: string[] }>({});

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMoviesPerActor();
            setMovies(data);
        };
        fetchMovies();
    }, []);

    return (
        <div>
            {Object.keys(movies).map(actor => (
                <div key={actor}>
                    <h3>{actor}</h3>
                    <ul>
                        {movies[actor].map(movie => (
                            <li key={movie}>{movie}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
