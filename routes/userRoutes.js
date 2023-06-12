const User = require("../models/userModel")
const bcrypt = require("bcrypt");
const router = require("express").Router()

router.post("/register", async (req, res) =>{

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword;
        const newUser = new User(req.body);
        await newUser.save();
        res.send({
            success:true,
            message: "User created successfully, Your ID is " + newUser.id + " " + newUser.userName
        })

} )

module.exports = router;