const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions } = require("../controllers/transactions")

router.route("/").get(getTransactions).post(addTransactions)

module.exports = router;