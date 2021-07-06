import express from 'express';
import { SquadService } from '@components/squad/squad.service';

export const createSquad = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response> => {
  const { name, members } = req.body;

  const squad = await SquadService.createSquad(name, members);

  return res.send(squad);
};
