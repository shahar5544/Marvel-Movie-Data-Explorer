import { Movie } from '../models/movieModel';
import redisClient from '../utils/redisClient';
import logger from '../utils/logger';
import axios from 'axios';

// TMDB API configuration
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_API_URL = 'https://api.themoviedb.org/3';

// Service to get movies per actor
export const getMoviesPerActor = async () => {
    try {
        const cache = await redisClient.get('moviesPerActor');
        if (cache) {
            return JSON.parse(cache);
        }

        // Fetch data from TMDB API
        const response = await axios.get(`${TMDB_API_URL}/movie/popular`, {
            headers: {
                Authorization: `Bearer ${TMDB_API_KEY}`
            }
        });

        const data = response.data.results.reduce((acc: any, movie: any) => {
            movie.actors.forEach((actor: string) => {
                if (!acc[actor]) {
                    acc[actor] = [];
                }
                acc[actor].push(movie.title);
            });
            return acc;
        }, {});

        await redisClient.set('moviesPerActor', JSON.stringify(data));
        return data;
    } catch (error) {
        logger.error('Error in getMoviesPerActor service:', error);
        throw error;
    }
};

// Service to get actors with multiple characters
export const getActorsWithMultipleCharacters = async () => {
    try {
        const cache = await redisClient.get('actorsWithMultipleCharacters');
        if (cache) {
            return JSON.parse(cache);
        }

        // Fetch data from TMDB API
        const response = await axios.get(`${TMDB_API_URL}/movie/popular`, {
            headers: {
                Authorization: `Bearer ${TMDB_API_KEY}`
            }
        });

        const data = response.data.results.reduce((acc: any, movie: any) => {
            movie.actors.forEach((actor: string) => {
                if (!acc[actor]) {
                    acc[actor] = [];
                }
                acc[actor].push({ movieName: movie.title, characterName: movie.character });
            });
            return acc;
        }, {});

        await redisClient.set('actorsWithMultipleCharacters', JSON.stringify(data));
        return data;
    } catch (error) {
        logger.error('Error in getActorsWithMultipleCharacters service:', error);
        throw error;
    }
};

// Service to get characters with multiple actors
export const getCharactersWithMultipleActors = async () => {
    try {
        const cache = await redisClient.get('charactersWithMultipleActors');
        if (cache) {
            return JSON.parse(cache);
        }

        // Fetch data from TMDB API
        const response = await axios.get(`${TMDB_API_URL}/movie/popular`, {
            headers: {
                Authorization: `Bearer ${TMDB_API_KEY}`
            }
        });

        const data = response.data.results.reduce((acc: any, movie: any) => {
            movie.characters.forEach((character: string) => {
                if (!acc[character]) {
                    acc[character] = [];
                }
                acc[character].push({ movieName: movie.title, actorName: movie.actor });
            });
            return acc;
        }, {});

        await redisClient.set('charactersWithMultipleActors', JSON.stringify(data));
        return data;
    } catch (error) {
        logger.error('Error in getCharactersWithMultipleActors service:', error);
        throw error;
    }
};
