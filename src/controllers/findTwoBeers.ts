import { Request, Response } from 'express';
import {findTwoBeersService} from '../services/findTwoBeers';

export const findTwoBeersRoute = async (req: Request, res: Response): Promise<void> => {
    try {
        await findTwoBeersService(req, res);
    } catch (e) {
        throw e;
    }
};