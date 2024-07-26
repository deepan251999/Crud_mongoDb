import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
}, { versionKey: false });

const Movie = model('Movie', movieSchema);

export default Movie;