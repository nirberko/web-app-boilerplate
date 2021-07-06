import express from 'express';
import * as SquadController from '@components/squad/squad.controller';

export const squadRouter = express.Router();

squadRouter.put('/', SquadController.createSquad);
