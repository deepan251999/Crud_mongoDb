import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import FormMovies from './FormMovies';

const Home = () => {

    const [movie, setMovie] = useState([]);
    console.log(movie);
    const fetchMovies = () => {
        axios.get("http://localhost:3003/api/movies/")
            .then(res => setMovie(res.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    // FORM DATAS
    const [formMovieData, setFormMovieData] = useState(
        {
            title: "",
            author: "",
            rating: "",
        }
    );
    console.log(formMovieData);
    const handleChange = (event) => {
        setFormMovieData({ ...formMovieData, [event.target.name]: event.target.value })
    }

    // Update Method
    const [isUpdate, setIsUpdate] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isUpdate) {
                await axios.put(`http://localhost:3003/api/movies/${formMovieData._id}`, formMovieData);
                setIsUpdate(false);
            } else {
                const response = await axios.post("http://localhost:3003/api/movies/", formMovieData);
                console.log(response);
                if (response.status === 200) return alert("SucessFully Added")

            }
            setFormMovieData({ title: "", author: "", rating: "" });
            fetchMovies();
        } catch (error) {
            console.log(error);
            alert("Please enter valid movie data");
        }
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post("http://localhost:3003/movies/", formMovieData)
    //         console.log("Sucessfully Create Movie", response)
    //     } catch (error) {
    //         console.log(error);
    //         alert("please Enter valid Movie");
    //     }
    // }

    // Edit Method

    const handleEdit = (movie) => {
        setFormMovieData(movie);
        setIsUpdate(true);
    }

    // const handleUpdate = async (event) => {
    //     event.preventDefault();
    //     await axios.put(`http://localhost:3003/movies/${formMovieData._id}`, formMovieData);
    // }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3003/api/movies/${id}`);
            setMovie(movie.filter(movie => movie._id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Movie Card</h1>

            <div>
                <FormMovies
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formMovieData={formMovieData}
                    isUpdate={isUpdate}
                    movie={movie}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                {
                    movie.map((movie) => (
                        <MovieCard
                            movie={movie}
                            key={movie._id}
                            formMovieData={formMovieData}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        // handleUpdate={handleUpdate}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Home;


