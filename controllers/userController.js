import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import BlacklistedToken from '../models/blacklistToken.js';
dotenv.config();

const secret = process.env.jwt_secret;

const userController = {
    async register(req, res) {
        try {
            const { email, password, role } = req.body;

            if (!email || !password || !role) {
                return res.status(400).json({ error: 'Email, password and role are required' });
            }


            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already registered' });
            }


            const hashedPassword = await bcrypt.hash(password, 10);


            const newUser = new User({
                email,
                password: hashedPassword,
                role
            });

            await newUser.save();

            const token = jwt.sign({ userId: newUser._id }, secret, { expiresIn: '1h' });
            res.status(201).json({ userId: newUser._id, token });
        } catch (error) {
            console.error(`Error registering user: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;


            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
            res.json({ userId: user._id, token });
        } catch (error) {
            console.error(`Error logging in: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async resetPassword(req, res) {
        try {
            const { email, newPassword } = req.body;
    
            if (!email || !newPassword) {
                return res.status(400).json({ error: 'Email and new password are required' });
            }
    
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
    
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
            await user.save();
    
            res.json({ message: 'Password reset successful' });
        } catch (error) {
            console.error(`Error resetting password: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async logout(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];

            if (!token) {
                return res.status(400).json({ error: 'Token not provided' });
            }

            await BlacklistedToken.create({ token });

            res.json({ message: 'Logout successful' });
        } catch (error) {
            console.error(`Error logging out: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async getAllUsers(req, res) {
        try {
            const users = await User.find({}, 'email role');
            res.json(users);
        } catch (error) {
            console.error(`Error getting all users: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    
};

export default userController;
