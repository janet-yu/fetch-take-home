/**
 * Return number of points based on this rule:
 * 
 * 50 points if the total is a round dollar amount with no cents.
 * 
 * @param {*} receipt 
 * @returns 
 */
export default function pointsForNoCents(receipt) {
    const receiptTotal = parseFloat(receipt.total)

    if (receiptTotal % 1 > 0) {
        return 0
    }

    return 50
}