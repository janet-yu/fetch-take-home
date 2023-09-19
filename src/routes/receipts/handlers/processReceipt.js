import DummyDB from "../../../db/index.js"

export default function processReceipt(req, res) {
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
}