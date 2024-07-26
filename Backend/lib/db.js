import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MOVIE_URI);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("Error Connecting to MongoBD:", error.message)
        process.exit(1)
    }
}


export default ConnectDb;