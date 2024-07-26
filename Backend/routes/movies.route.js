import express from "express";
import { movieIndex, movieCreate, movieUpdate, movieDetail, movieDelete } from "../controllers/movie.controller.js";

const Router = express.Router();


// CRUD FUNCTIONALITY

// GET MOVIES
Router.get('/', movieIndex);

// POST MOVIES
Router.post('/', movieCreate)

// PUT MOVIES
Router.put('/:id', movieUpdate)

// GET PARTICULER MOVIES
Router.get('/:id', movieDetail)

// DELETE MOVIES
Router.delete('/:id', movieDelete)

export default Router;

