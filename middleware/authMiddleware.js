import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';

//Protected route token base'
export const requireSignIn = async(req, res, next) => {
    try {
        const decoded = JWT.verify(
            req.headers.authorization, 
            process.env.JWT_SECRET
        );
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error)
    }    
}

//admin access
export const isAdmin = async(req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !== 'admin') {
            return res.status(401).send({
                success: false,
                message: 'Unauthorized Access'
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            error,
            message: 'Error in admin middleware'
        })
    }
}