import { Request, Response } from 'express';
import { getMoviesPerActor, getActorsWithMultipleCharacters, getCharactersWithMultipleActors } from '../services/movieService';
import logger from '../utils/logger';

// Controller to handle movies per actor
export const moviesPerActor = async (req: Request, res: Response) => {
    try {
        const data = await getMoviesPerActor();
        res.json(data);
    } catch (error) {
        logger.error('Error fetching movies per actor:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller to handle actors with multiple characters
export const actorsWithMultipleCharacters = async (req: Request, res: Response) => {
    try {
        const data = await getActorsWithMultipleCharacters();
        res.json(data);
    } catch (error) {
        logger.error('Error fetching actors with multiple characters:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller to handle characters with multiple actors
export const charactersWithMultipleActors = async (req: Request, res: Response) => {
    try {
        const data = await getCharactersWithMultipleActors();
        res.json(data);
    } catch (error) {
        logger.error('Error fetching characters with multiple actors:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
