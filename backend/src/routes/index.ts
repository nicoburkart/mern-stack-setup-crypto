import * as express from 'express'
import demoRoutes from './demo-routes'

const router = express.Router()

router.use('/api/v1/demo', demoRoutes)

export default router