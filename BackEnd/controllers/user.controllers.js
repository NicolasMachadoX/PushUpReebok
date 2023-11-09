const Collection = require('../models/User');
const jwt = require('jsonwebtoken');


const getAll = async (req,res) => {
    try {
        const data = await Collection.find();
        return res.json({data})
    } catch (error) {
        res.status(404).json({error})
    }
}


const register = async (req,res) => {
    try {
        const body = req.body;
        const newUser = new Collection(body);
    
        //encrypt
    
        newUser.password = await newUser.encryptPassword(newUser.password)
        await newUser.save();
    
        //token
    
        const token = jwt.sign({id:newUser._id}, process.env.SECRET, {
                expiresIn: 60*60*24    
        })
         res.json({auth:true, token});   
    } catch (error) {
        res.json({msg: error})
    }
   
}

const login = async (req,res) => {
    try {
        const body = req.body;
        const user = new Collection(body);

        //user
        const userExists = await user.findOne({email:user.email})

        if(!userExists){
            res.status(202).json({msg:"the user doesn't exists"});
        }

        //validPassword

        const isValidPassword = user.validatePassword(user.password);

        if(!isValidPassword){
         
        res.status(202).json({auth:false, token: null});
        }

        const token = jwt.sign({id: user._id}, process.env.SECRET, {
            expiresIn: 60*60*24
        })
        res.json({auth:true,token})

    } catch (error) {
        res.json({msg:error})
    }
}

const getById = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await Collection.findOne({_id:id});
        return res.json({data})
    } catch (error) {
        res.status(404).json({error})
    }
}


const post = async (req,res) => {
    const body = req.body;
    const newData = new Collection(body);
    try {
        const data = await newData.save();
        res.json({msg: data})
    } catch (error) {
        res.status(404).json({error})
    }
}

const update = async (req,res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await Collection.findOneAndUpdate({_id: id},body,{new: true});
        res.json({msg: 'update succesfully', data})
    } catch (error) {
        res.status(404).json({error})
    }
}


const delet = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await Collection.deleteOne({_id:id});
        return res.json({data})
    } catch (error) {
        res.status(404).json({error})
    }
}

module.exports = {
    getAll,
    getById,
    post,
    delet,
    update,
    register,
    login
}