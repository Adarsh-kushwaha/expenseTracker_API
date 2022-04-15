const Transaction = require('../config/db');

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
            success:false,
            error:console.log(err.message)
            
        })
    }
}

exports.addTransactions = (req, res, next) => {
    res.send("ADDED TRANSACTION")
}