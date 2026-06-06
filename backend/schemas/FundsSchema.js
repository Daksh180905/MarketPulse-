const {Schema} = require("mongoose");

const FundsSchema = new Schema({
    availableMargin: Number,
    usedMargin: Number,
    availableCash: Number,
    openingBalance: Number,
    payin: Number,
    span: Number,
    deliveryMargin: Number,
    exposure: Number,
    optionsPremium: Number,
    collateralLiquid: Number,
    collateralEquity: Number,
});

module.exports={FundsSchema};
