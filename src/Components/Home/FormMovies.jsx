import React from "react";

const FormMovies = (props) => {
    const {
        handleSubmit,
        handleChange,
        formMovieData,
        isUpdate,
    } = props;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name="title"
                    placeholder='Movie Name'
                    value={formMovieData.title}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name="author"
                    placeholder='Movie Author'
                    value={formMovieData.author}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="rating"
                    placeholder='Movie Rating'
                    value={formMovieData.rating}
                    onChange={handleChange}
                />
                {/* {
                    isUpdate ?
                        <button onClick={handleUpdate}>Update</button>
                        :
                        <button type='submit' onClick={handleSubmit}>Sumbit</button>
                } */}
                 <button type='submit'>{isUpdate ? 'Update' : 'Submit'}</button>
            </form>
        </>
    )
}

export default FormMovies;