import Movie from "../models/movie.models.js";
import movieSchema from "../validation/movie.validation.js";

export const movieIndex = async (req, res) => {
    try {
        const movie = await Movie.find();
        res.status(200).json(movie)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const movieCreate = async (req, res) => {
    const { error } =  movieSchema.validate(req.body);
    if (error) return res.status(400).json(error.details[0].message)

    // res.send("Post movie api");
    const newMovie = new Movie({
        title: req.body.title,
        author: req.body.author,
        rating: req.body.rating
    })

    try {
        const movie = await newMovie.save()
        return res.status(200).json(movie)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const movieUpdate = async (req, res) => {
    // res.send("Put movie api")
    const {error} = movieSchema.validate(req.body);
    if(error) return res.status(400).json(error.details[0].message)

    try {
        const movieUpdate = await Movie.findByIdAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                author: req.body.author,
                rating: req.body.rating
            },
            {
                new: true,
            }
        )
        return res.status(200).json(movieUpdate)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const movieDetail = async (req, res) => {
    // res.send("Get particuler movie api")
    try {
        const movie = await Movie.findById(req.params._id);
        if (movie === null) {
            return res.status(404).json({ message: "Cannaot Find Movie" })
        } else {
            res.json(movie)
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const movieDelete = async (req, res) => {
    // res.send("Delete particuler movie api")
    const movieId = req.params.id;
    try {
        await Movie.deleteOne({ _id: movieId })
        res.json({ message: "Movie Deleted!" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}