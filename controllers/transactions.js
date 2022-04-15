const Transaction = require('../models/transaction');

exports.getTransactions = async (req, res, next) => {

    try {
        const Transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: Transactions.length,
            data: Transactions
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: console.log(err.message)

        })
    }
}

exports.addTransactions = async (req, res, next) => {

    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            success:false,
            error:"error occured"
        })
    }


}