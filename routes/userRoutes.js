import express from 'express';
import userController from '../controllers/userController.js';
import verifyPermissions from '../controllers/verifyPermissions.js';
const userRouter = express.Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/all',verifyPermissions,userController.getAllUsers);

export default userRouter;