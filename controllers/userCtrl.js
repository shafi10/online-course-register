const User = require('../models/User')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken');


exports.getUser = async (req,res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}

exports.postUser = async (req,res) =>{
    const {email, password} = req.body
    try {
       let user= await User.findOne({email})
       if(!user){
          return res.status(400).json({errors: [{ msg: 'Invalid'}]})
       }

    let isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({errors: [{ msg: 'Invalid'}]})
     }
     
         const payload = {
             user:{
                 id:user.id
             }
         }
     
         jwt.sign(payload, config.get('jwtSecret'),{
             expiresIn:360000
         }, (err, token)=>{
             if(err) throw err;
             res.json({ token })
         })
    } catch (error) {
        console.log(error)
    }
}

exports.postRegi = async (req,res) =>{
    try {
        const {email, password} = req.body
         
        let user = await User.findOne({email})
        if(user){
            return res.json({msg: 'Invalid Credientials'})
        }
        user = new User({
            email,password
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password , salt)

        await user.save()
        res.json(user)

    } catch (error) {
        console.log(error)
    }
}