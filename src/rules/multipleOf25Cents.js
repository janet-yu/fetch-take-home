/**
 * Return number of points based on this rule:
 * 
 * 25 points if the total is a multiple of 0.25.
 * 
 * @param {*} receipt 
 * @returns 
 */
export default function pointsForMultipleOf25Cents(receipt) {
    const receiptTotal = parseFloat(receipt.total)

    if (receiptTotal % 0.25 > 0) {
        return 0
    }

    return 25
}