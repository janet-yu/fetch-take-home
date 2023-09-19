import pointsForAlphanumericRetailer from "./alphanumericRetailer.js";
import pointsForDescriptionLen from "./multipleOfThreeDescLen.js";
import pointsForEveryTwoItems from "./everyTwoItems.js";
import pointsForOddPurchaseDay from "./purchaseDateOdd.js";
import pointsForTimeOfPurchase from "./timeOfPurchase.js";
import pointsForMultipleOf25Cents from "./multipleOf25Cents.js";
import pointsForNoCents from "./totalHasNoCents.js";

const rules = [
    pointsForAlphanumericRetailer, 
    pointsForDescriptionLen, 
    pointsForEveryTwoItems, 
    pointsForOddPurchaseDay, 
    pointsForTimeOfPurchase,
    pointsForMultipleOf25Cents, 
    pointsForNoCents
]

export default rules