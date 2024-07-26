import signUpModel from "../models/signup.models.js";
import loginSchema from "../validation/login.validation.js";
import jwt from "jsonwebtoken";

const secretKey = "your_secret_key";

export const LoginControllers = async (req, res) => {

    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { email, password } = req.body;

    try {
        const user = await signUpModel.findOne({ email });
        if (!user) return res.status(400).send('Invalid email or password.');
        console.log('User found:', user); 
        console.log('Stored password (hashed):', user.password);
        const validPassword = await user.comparePassword(password);
        if (!validPassword) return res.status(400).send('Invalid  password.');

        const token = jwt.sign({ _id: user._id, email: user.email }, secretKey);
        res.send({ token });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
