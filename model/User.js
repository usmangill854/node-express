const mongoose = require('mongoose')
const validator =require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true,'please provide name'],
        minlength: 4,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate:{
            validator:validator.isEmail,
            message:'please provide valid email'
        },
        unique: true,
         
    },
    password: {
        type: String,
        required: [true,'must provide password'],
        minlength: 6,
        select: false
    }
    
})

// UserSchema.pre('save',async () => {
//     const salt = await bcryptjs.genSalt(10)
//     this.password = await bcryptjs.hash(this.password,salt)
// })
// UserSchema.methods.createJWT() = function() {
//     return jwt.sign({userId:this._id},'secret',{
//         // expiresIn:1hour
//     })
// }

const User = mongoose.model('User',UserSchema)
module.exports = User