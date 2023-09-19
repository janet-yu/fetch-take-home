import { Router } from 'express'
import calculatePoints from './handlers/calculatePoints.js'
import processReceipt from './handlers/processReceipt.js'

const receiptsRouter = new Router()

receiptsRouter.post('/process', processReceipt)
receiptsRouter.get('/:id/points', calculatePoints)

export default receiptsRouter