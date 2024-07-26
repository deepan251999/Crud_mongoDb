import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const signUpSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

signUpSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        console.log('Generated salt:', salt);
        this.password = await bcrypt.hash(this.password, salt);
        console.log('Hashed password:', this.password);
        next();
    } catch (err) {
        next(err);
    }
});

signUpSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    console.log('Comparing passwords:', candidatePassword, this.password, isMatch);
    return isMatch;
};

const Signup = model("signup", signUpSchema);

export default Signup;
