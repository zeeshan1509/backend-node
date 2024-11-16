import express, {Request, Response, NextFunction} from 'express'
import { CreateVendor, GetVendors, GetVendorsByID } from '../controllers/';

const router = express.Router()

router.post('/vender',CreateVendor)
router.get('/vender',GetVendors)
router.get('/vender/:id',GetVendorsByID)

router.get('/', (_req: Request, res: Response, next: NextFunction) => {
    res.json("Hello from admin");
});

export {router as AdminRoute}