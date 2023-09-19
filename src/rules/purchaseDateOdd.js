/**
 * Return number of points based on this rule:
 * 
 * 6 points if the day in the purchase date is odd.
 * 
 * @param {*} receipt 
 * @returns 
 */
export default function pointsForOddPurchaseDay(receipt) {
    const purchaseDate = new Date(receipt.purchaseDate)
    // Assuming UTC date
    const day = purchaseDate.getUTCDate()

    if (day % 2 !== 1) {
        return 0
    }

    return 6
}