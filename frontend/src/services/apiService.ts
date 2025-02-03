import axios from 'axios';

export const getMoviesPerActor = async () => {
    const response = await axios.get('/api/moviesPerActor');
    return response.data;
};
