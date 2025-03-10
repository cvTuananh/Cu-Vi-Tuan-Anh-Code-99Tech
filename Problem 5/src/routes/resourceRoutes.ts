import { Router } from 'express';
import { ResourceController } from '../controllers/resourceController';

const router = Router();

router.post('/', ResourceController.createResource);
router.get('/', ResourceController.listResources);
router.get('/:id', ResourceController.getResource);
router.put('/:id', ResourceController.updateResource);
router.delete('/:id', ResourceController.deleteResource);

export default router;