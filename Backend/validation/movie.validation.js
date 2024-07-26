import Joi from "joi";

const movieSchema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().min(2).max(30).required(),
    author: Joi.string().min(2).max(30).required(),
    rating: Joi.number().min(1).max(10).required()
})

export default movieSchema;