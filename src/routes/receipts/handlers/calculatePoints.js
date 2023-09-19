import DummyDB from "../../../db/index.js"
import rewardPointsRules from '../../../rules/index.js'

export default function calculatePoints(req, res) {
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
}