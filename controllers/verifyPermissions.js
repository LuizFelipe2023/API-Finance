import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.jwt_secret;

const verifyPermissions = async (req,res,next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ error: 'Access denied! Token not provided' });
        }

        const decoded = jwt.verify(token, secret);

        const user = await User.findById(decoded.userId);

        if (!user || user.role !== 'admin') {
            return res.status(403).json({ error: 'Access denied! You do not have admin permissions' });
        }

        next();
    } catch (error) {
        console.error(`Error verifying permissions: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export default verifyPermissions;
