import { Router } from 'express';
import { moviesPerActor, actorsWithMultipleCharacters, charactersWithMultipleActors } from '../controllers/movieController';

const router = Router();

router.get('/moviesPerActor', moviesPerActor);
router.get('/actorsWithMultipleCharacters', actorsWithMultipleCharacters);
router.get('/charactersWithMultipleActors', charactersWithMultipleActors);

export default router;
