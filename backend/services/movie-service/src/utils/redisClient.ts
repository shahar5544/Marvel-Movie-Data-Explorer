import redis from 'redis';
import { promisify } from 'util';
import logger from './logger'; // Assuming you have a logger utility

// Create a Redis client with environment variables
const client = redis.createClient({
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379
});

// Handle Redis errors
client.on('error', (err) => {
    logger.error('Redis error:', err);
});

// Promisify Redis client methods for async/await usage
export const get = promisify(client.get).bind(client);
export const set = promisify(client.set).bind(client);

/**
 * Sets a value in Redis with an expiration time.
 * @param {string} key - The key to set.
 * @param {string} value - The value to set.
 * @param {number} [expiration] - Optional expiration time in seconds.
 */
export const setWithExpiration = async (key: string, value: string, expiration?: number) => {
    if (expiration) {
        await set(key, value, 'EX', expiration);
    } else {
        await set(key, value);
    }
};

export default {
    get,
    set,
    setWithExpiration
};
