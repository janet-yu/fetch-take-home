/**
 * Return number of points based on this rule: 
 * 
 * If the trimmed length of the item description is a multiple of 3, 
 * multiply the price by 0.2 and round up to the nearest integer. 
 * The result is the number of points earned.
 * 
 * @param {*} receipt 
 * @returns 
 */
export default function pointsForDescriptionLen(receipt) {
    const totalPoints = receipt.items.reduce((totalPoints, item) => {
        const descriptionLen = item.shortDescription.trim().length

        if (descriptionLen % 3 !== 0) {
            return totalPoints
        }

        return totalPoints + Math.ceil(parseFloat(item.price) * 0.2)
    }, 0)

    return totalPoints
}