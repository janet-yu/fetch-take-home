/**
 * Return number of points based on this rule:
 * 
 * 10 points if the time of purchase is after 2:00pm and before 4:00pm.
 * 
 * Assuming all purchase times are in 24 hour format.
 * 
 * @param {*} receipt 
 * @returns 
 */
export default function pointsForTimeOfPurchase(receipt) {
    if (receipt.purchaseTime > '14:00' && receipt.purchaseTime < '16:00') {
        return 10
    }

    return 0
}