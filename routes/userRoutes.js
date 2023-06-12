const User = require("../models/userModel")
const bcrypt = require("bcrypt");
const router = require("express").Router()

router.post("/register", async (req, res) =>{
        const foundUser = await User.findOne({userName: req.body.userName})
        if (foundUser){
          return res.send({
                success: false,
                message: "User already exists, try another username"
            })
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword;
        const newUser = new User(req.body);
        await newUser.save();
        res.send({
            success:true,
            message: "User created successfully, Your ID is " + newUser.id + " " + newUser.userName
        })

} )

router.post("/login", async (req, res) => {
        const user = await User.findOne({userName: req.body.userName})
        if(!user){
            return res.send({
                success:false,
                message: "User with this username not found. Please try again"
            })
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword){
           return res.send({
                success:false,
                message:"password is not right"
            })
        }
        res.send({
            success: true,
            message: "Login successful, Welcome"
        })
})
module.exports = router;