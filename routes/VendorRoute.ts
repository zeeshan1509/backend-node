import express, {Request, Response, NextFunction} from 'express'

const router = express.Router()
router.get('/', (_req: Request, res: Response, next: NextFunction) => {
    res.json("Hello from Vendor");
});

export {router as VendorRoute}