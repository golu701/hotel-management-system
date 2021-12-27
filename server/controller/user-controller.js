const User = require("../model/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    try {
        const {first_name, last_name, phone, email, password} = req.body;
        if (!first_name)
            return res.status(400).json({status: 400, message: "First name required"});
        if (!last_name)
            return res.status(400).json({status: 400, message: "Last name required"});
        if (!phone)
            return res.status(400).json({status: 400, message: "Phone number required"});
        if (!email)
            return res.status(400).json({status: 400, message: "Email already required"});
        if (!password)
            return res.status(400).json({status: 400, message: "Phone number required"});

        const phoneExist = await User.findOne({phone});
        const emailExist = await User.findOne({email});
        if (phoneExist)
            return res.status(400).json({status: 400, message: "Phone number already registered"});
        if (emailExist)
            return res.status(400).json({status: 400, message: "Email already registered"});

        const user = new User({first_name, last_name, phone, email, password});
        await user.save();
        return res.status(200).json({status: 200, message: "Registration successful"});
    } catch (error) {
        return res.status(500).json({status: 500, message: "Internal Server error"});
    }
}

const login = async (req, res) => {
    try{
        const {email, password } = req.body;
        if(!email)
            return res.status(400).json({status: 400, message: "Email is required"});
        if(!password)
            return res.status(400).json({status: 400, message: "Password is required"});
        const user = await User.findOne({email});
        if(!user)
            return res.status(400).json({status: 400, message: "Invalid email"});
        const passwordMatched = await bcrypt.compare(password, user.password);
        if(!passwordMatched)
            return res.status(400).json({status: 400, message: "Email or password is incorrect"});
        const token = await user.generateAuthToken();
        return res.status(200).json({status: 200, message: "Login successful", token: token});
    }
    catch (error){
        return res.status(500).json({status: 500, message: "Internal Server error"});
    }
}

const changePassword = async (req, res) => {
    try{
        const {password, new_password}  = req.body;
        const user = await User.findOne({_id: req.user._id});
        const passwordMatched = bcrypt.compare(password, user.password);
        if(!passwordMatched)
            return res.status(400).json({status: 400, message: "Password is wrong"});
        if(password === new_password)
            return res.status(400).json({status: 400, message: "Old and new passwords are same"});
        user.password = new_password;
        await user.save();
        return res.status(200).json({status: 200, message: "Password has been changed"});
    }
    catch(error){
        return res.status(500).json({status: 500, message: "Internal Server error"});
    }
}

const changeEmail = async (req, res) => {
    try{
        const {password, email} = req.body;
        const user = await User.findOne({_id: req.user._id});
        const passwordMatched = bcrypt.compare(password, user.password);
        if(!passwordMatched)
            return res.status(400).json({status: 400, message: "Wrong password"});
        user.email = email;
        try{
            await user.save();
        }
        catch (error){
            return  res.status(400).json({status: 400, message: "Use another email id "});
        }
        return res.status(200).json({status: 200, message: "Email has been changed successfully"});
    }
    catch(error){
        return  res.status(500).json({status: 500, message: "Internal Server error"});
    }
}

const changePhone = async (req, res) => {
    try{
        const {password, phone} = req.body;
        const user = await User.findOne({_id: req.user._id});
        const passwordMatched = bcrypt.compare(password, user.password);
        if(!passwordMatched)
            return res.status(400).json({status: 400, message: "Wrong password"});
        user.phone = phone;
        try{
            await user.save();
        }
        catch (error){
            return  res.status(400).json({status: 400, message: "Use another phone number "});
        }
        return res.status(200).json({status: 200, message: "Phone number has been updated successfully"});
    }
    catch(error){
        return res.status(500).json({status: 500, message: "Internal Server error"});
    }
}

module.exports = {register, login, changePassword, changeEmail, changePhone}
