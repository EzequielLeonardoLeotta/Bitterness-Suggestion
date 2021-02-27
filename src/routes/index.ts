import express from 'express';
import {findTwoBeersRoute} from '../controllers/findTwoBeers';
import healthController from '../controllers/health';

const router = express.Router();
router.post('/findTwoBeers', findTwoBeersRoute);

router.get('/health', healthController.healthCheck);

export default router;