import * as express from 'express'
import movieController from '../controllers/demo-controller'

const router = express.Router()

router.get('/', movieController.getHello)

export default router