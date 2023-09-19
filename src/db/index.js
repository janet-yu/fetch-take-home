import { v4 as uuidv4 } from 'uuid';

const receiptsDb = new Map()

export default class DummyDB {
    constructor() {
        this.db = receiptsDb
    }

    insertReceipt(receiptData) {
        // Generate fake ID here
        const id = uuidv4()

        const receipt = {
            id,
            ...receiptData
        }

        const updatedDb = receiptsDb.set(id, receipt)

        return updatedDb.get(id)
    }

    getReceipt(receiptId) {
        const foundReceipt = receiptsDb.get(receiptId)

        if (!foundReceipt) {
            throw Error('No receipt with ID found')
        }

        return foundReceipt
    }
}