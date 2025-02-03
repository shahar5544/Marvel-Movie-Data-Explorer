import { getMoviesPerActor } from '../services/movieService';

const root = {
    movies: async () => {
        return await getMoviesPerActor();
    }
};

export default root;
