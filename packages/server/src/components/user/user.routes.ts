import express from 'express';
import * as UserController from '@components/user/user.controller';

export const userRouter = express.Router();

userRouter.put('/', UserController.createUser);
