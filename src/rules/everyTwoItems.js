/**
 * Return the number of points based on this rule:
 * 
 * 5 points for every two items on the receipt
 * 
 * @param {*} receipt 
 * @returns 
 */
export default function pointsForEveryTwoItems(receipt) {
    const items = receipt.items
    const points = 5 * Math.floor(items.length / 2)

    return points
}