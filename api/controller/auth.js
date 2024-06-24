import bcryptjs from 'bcryptjs'
import User from '../models/user.js'


export const Signup = async(req,res,next) => {

    try{

        const{username,email,password} = req.body 
      
       
      
        const hashpassword = bcryptjs.hashSync(password,10)
      
      
        const NewUser = new User({username,email,password:hashpassword})
        
         await NewUser.save()
        res.status(200).json({message:"new User have been Saved"})
        
        
          }
          catch(error){
           next(error)
          }
       }
      


