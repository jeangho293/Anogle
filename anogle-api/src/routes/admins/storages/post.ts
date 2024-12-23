import { Router } from 'express';
import type { DddContext } from '@libs/ddd';
import { authHandler } from '@middlewares';
import { StorageService } from '../../../services/storage/application/service';

const router = Router();

router.post('/admins/storages', authHandler, async (req, res, next) => {
  try {
    // 1. Get body, params, querystring
    // 2. Get container service
    const { context } = res.locals as { context: DddContext };
    const storageService = context.get(StorageService);

    // 3. Get service result
    const data = await storageService.upload(req.file);

    // 4. Send response
    res.json({ data });
  } catch (err) {
    next(err);
  }
});

export default router;
