import express from "express";
import Router from "./routes/movies.route.js";
import signUpRouter from './routes/signUp.route.js';
import loginRouter from "./routes/login.route.js";
import connectDb from './lib/db.js';
import cors from 'cors';
import setupSwagger from "./swagger/swagger.js";
import routes from "./swagger/routes.js";

const app = express();
const PORT = 3003;

app.use(cors());

// Data Understanding Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// MongoDB Connect
connectDb();

// Initial Checking
app.get('/api', (req, res) => {
    res.json({ msg: "hii" })
})

// Routes
app.use('/api', routes);

// SignUP and Login Api
app.use('/api', signUpRouter);
app.use('/api', loginRouter);

//Crud movies api

app.use('/api/movies', Router);

setupSwagger(app);

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
})