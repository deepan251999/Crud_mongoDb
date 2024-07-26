import React from 'react';

const MovieCard = ({ movie, handleEdit, handleDelete }) => {

    return (
        <>
            <div style={{ margin: "10px" }}>
                <h1>{movie.title}</h1>
                <p>{movie.author}</p>
                <h5>{movie.rating}</h5>
                <button onClick={() => handleEdit(movie)}>Edit</button>
                <button onClick={() => handleDelete(movie._id)}>Delete</button>
            </div>
        </>
    )
}

export default MovieCard;