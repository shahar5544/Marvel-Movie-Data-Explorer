import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: String,
    tmdbId: Number,
    actors: [String],
    characters: [String]
});

export const Movie = mongoose.model('Movie', movieSchema);
