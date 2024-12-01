const userModel = require("../models/userModel");   
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) =>{
    const jwtkey = process.env.JWT_SECRET_KEY;

    return jwt.sign({_id}, jwtkey, {expiredIn: "3d"});
}

const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body

        const existingUser = await userModel.findOne({ email });

    if (existingUser) 
        return res.status(400).json("User with the given email already exists...");

    if (!name || !email || !password) 
        return res.status(400).json("All field are required...");

    if(validator.isEmail(email)) 
        return res.status(400).json("Email must be a valid email...");

    if(validator.isStrongPassword(password)) 
        return res.status(400).json("Password must be a strong password...");

    user = new userModel({name, email, password});

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save();

    const token = createToken(user._id)

    res.status(200).json({_id: user._id, name, email, token})
    } catch (error){
        console.log(error);
        res.status(500).json({message:"Server error"});
    }
 };

 const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const existingUser = await userModel.findOne({ email });

        if(!user) 
            return res.status(400).json("Invalid email or password...")

        const invalidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword) 
            return res.status(400).json("Invalid email or password...")

            const token = createToken(user._id);

            res.status(200).json({_id: user._id, name:user.name, email, token});
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
 }

module.exports = {registerUser, loginUser};