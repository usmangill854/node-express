const User = require('../model/User')
const jwt = require('jsonwebtoken')
exports.register = async (req,res) => {
    
    try {
        const user = await User.create(req.body)

        if(user){
            const token=jwt.sign(
                {
                    email:user.email,
                    id:user._id
                },
                'secretKey',
                {
                    expiresIn:'1h'
                }
            )
            res.status(201).json({user:{email:user.email,name:user.name },token})

             }


        // const token = user.createJWT()
    } catch (error) {
        res.status(500).json({msg:'error occured'})
    }
}

exports.login = async(req,res) => {
    const {email,password} = req.body
    if(!email || !password){
        res.status(500).json({message:'please provide email and password'})
    }
    const user = await User.findOne({email:email,password:password})
    if(!user){
        res.status(500).json({message:'invalid cradentials'})
    }
    else{

        const token=jwt.sign(
            {
                email:user.email,
                id:user._id
            },
            'secretKey',
            {
                expiresIn:'1h'
            }
        )
        res.status(201).json({user:user,token})

         }
    }

    // res.status(200).json({user,token})

// }
