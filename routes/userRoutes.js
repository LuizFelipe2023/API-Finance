import express from 'express';
import userController from '../controllers/userController.js';
import verifyPermissions from '../controllers/verifyPermissions.js';
import verifyToken from '../controllers/verifyToken.js';
const userRouter = express.Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.post('/logout', userController.logout);
userRouter.put('/reset',verifyToken,userController.resetPassword);
userRouter.get('/all',verifyPermissions,userController.getAllUsers);

export default userRouter;