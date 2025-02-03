import { getMoviesPerActor } from '../src/services/movieService';

jest.mock('../src/utils/redisClient', () => ({
    get: jest.fn(),
    set: jest.fn()
}));

describe('Movie Service', () => {
    it('should fetch movies per actor', async () => {
        const data = await getMoviesPerActor();
        expect(data).toBeDefined();
    });
});
