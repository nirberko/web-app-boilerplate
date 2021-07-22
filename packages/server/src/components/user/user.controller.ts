import express from 'express';
import * as UserService from '@components/user/user.service';

export const createUser = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response> => {
  const { name } = req.body;

  const user = await UserService.createUser(name);

  return res.send(user);
};
