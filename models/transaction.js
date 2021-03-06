const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, "this field is imp"]
    },

    amount: {
        type: Number,
        required: [true, "please add some amount"]

    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Transaction", transactionSchema)