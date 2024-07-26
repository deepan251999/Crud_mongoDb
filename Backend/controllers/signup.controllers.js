import signupModels from '../models/signup.models.js';
import userSchema from '../validation/signup.validation.js';

const signupUser = async (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { name, email, password } = req.body;

    let user = new signupModels({ name, email, password });
    try {
        user = await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export default signupUser;
