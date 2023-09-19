import { Router } from 'express'
import DummyDB from '../db/index.js'
import rewardPointsRules from '../rules/index.js'

const receiptsRouter = new Router()

receiptsRouter.post('/process', (req, res) => {
    try {
        const db = new DummyDB()
        const receiptData = req.body
        const receipt = db.insertReceipt(receiptData)
    
        res.status(200).json({
            id: receipt.id
        })
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong',
            error: error.message
        })
    }
})

receiptsRouter.get('/:id/points', (req, res) => {
    try {
        const db = new DummyDB()
        const { id: receiptId }= req.params
        const receipt = db.getReceipt(receiptId)

        // Accumulate reward points
        const totalPoints = rewardPointsRules.reduce((totalPoints, rule) => {
            const pointsCalculated = rule(receipt)

            return totalPoints + pointsCalculated
        }, 0)

        res.status(200).json({
            points: totalPoints
        })
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong',
            error: error.message
        })
    }
})

export default receiptsRouter