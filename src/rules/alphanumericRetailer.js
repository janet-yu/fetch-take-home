/**
 * Return points based on this rule: 
 * 
 * One point for every alphanumeric character in the retailer name.
 * 
 * @param {*} receipt 
 * @returns 
 */
export default function pointsForAlphanumericRetailer(receipt) {
    // Replace all non-alphanumeric characters with ''
    // Return the length of the stripped string
    const processedRetailerName = receipt.retailer.replace(/[\W_]+/g, '');

    return processedRetailerName.length
}