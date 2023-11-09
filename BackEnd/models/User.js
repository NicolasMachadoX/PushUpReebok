const {Schema,model} = require('mongoose');
const bcrypt = require('bcryptjs');

const  userSchema = Schema({
    username:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    email:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    password:{
        type: String,
        require: [true,"The data it's obligatory"]

    },
    registration_date:{
        type: Date,
        require: [true,"The data it's obligatory"]

    },
    rol:{
        type: String,
        require: [true,"The data it's obligatory"]

    } 
});

userSchema.methods.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(salt,password); 
}

userSchema.methods.validatePassword = function(password){
    return bcrypt.compare(password,this.password)
}

module.exports = model('user',userSchema);