import userModel from "../models/userModel.js"
import { comparePassword, hashPassword } from './../helpers/auth.js'
import JWT from 'jsonwebtoken';
import crypto from 'crypto'
import {sendEmail} from '../helpers/sendEmail.js'

export const registerController = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body

        //check user
        const existingUser = await userModel.findOne({ email })

        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already Registered please login',
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)

        //save
        const user = await new userModel({
            firstName,
            lastName,
            email,
            password: hashedPassword
        }).save()

        res.status(201).send({
            success: true,
            message: 'User Registered Successfully',
            user,
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in registration',
            error
        })
    }
}

// POST LOGIN
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        //check user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered'
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid password'
            })
        }
        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        })
        res.status(200).send({
            success: true,
            message: 'Login successfully',
            user,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error
        })
    }
}

export const forgotPasswordController = async (req, res) => {
   try {
    const user = await userModel.findOne({ email: req.body.email });

    if(!user) {
        return res.status(404).send({
            success: false,
            message: 'User not found with this email'
        })
    }

    //Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset password url
    const resetUrl = `${req.protocol}://${req.get('host')}/password/reset/${resetToken}`;

    const message = `You are receiving this email because you (or someone else) have requested the reset of the password for your account. Please click on the following link, or paste this into your browser to complete the process:\n\n ${resetUrl}\n\n If you did not request this, please ignore this email and your password will remain unchanged.\n`

     try {
            await sendEmail({
                email: user.email,
                subject: 'kma-gadgets Password Recovery',
                message
            })

            res.status(200).json({
                status:'success',
                message: `An email has been sent to ${user.email} with further instructions.`
            })
        }
        catch(error) {
           user.resetPasswordToken = undefined;
           user.resetPasswordExpire = undefined;

           await user.save({ validateBeforeSave: false });

           return res.status(500).send({
            success: false,
            message: 'User not found with this email'
        })
        }

   } catch (error) {
    
   }
}

//reset password => /api/v1/password/reset/:token
export const resetPasswordController = async (req, res, next) => {
    
    // Hash the url token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await userModel.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    });

    if(!user) {
        return res.status(400).send({
            success: false,
            message: 'Password reset code has expired'
        })
    }
    
    if(req.body.password !== req.body.confirmPassword) {
        return res.status(400).send({
            success: false,
            message: 'Passwords do not match'
        })
    }

    //set up new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).send({
        success: true,
        user,
        token
    })
}

// test controller
export const testController = (req, res) => {
    res.send('Protected Route')
}