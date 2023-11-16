import Transaction from "../models/transactions.js";

const transactionController = {
    async createTransaction(req, res) {
        try {
            const newTransaction = new Transaction({
                type: req.body.type,
                amount: req.body.amount,
                category: req.body.category,
                description: req.body.description,
            });
            await newTransaction.save();
            res.status(201).json(newTransaction);
        } catch (error) {
            console.error(`Error creating transaction: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async getAllTransactions(req, res) {
        try {
            const transactions = await Transaction.find();
            res.json(transactions);
        } catch (error) {
            console.error(`Error getting transactions: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async getTransactionById(req, res) {
        try {
            const { id } = req.params;
            const transaction = await Transaction.findById(id);
            if (!transaction) {
                return res.status(404).json({ error: 'Transaction not found' });
            }
            res.json(transaction);
        } catch (error) {
            console.error(`Error getting transaction by ID: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async updateTransaction(req, res) {
        try {
            const { id } = req.params;
            const updatedTransaction = await Transaction.findByIdAndUpdate(
                id,
                { $set: req.body },
                { new: true }
            );
            if (!updatedTransaction) {
                return res.status(404).json({ error: 'Transaction not found' });
            }
            res.json(updatedTransaction);
        } catch (error) {
            console.error(`Error updating transaction by ID: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async deleteTransaction(req, res) {
        try {
            const { id } = req.params;
            const deletedTransaction = await Transaction.findByIdAndRemove(id);

            if (!deletedTransaction) {
                return res.status(404).json({ error: 'Transaction not found' });
            }

            res.json(deletedTransaction);
        } catch (error) {
            console.error(`Error deleting transaction by ID: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async getTotalIncomeMinusExpenses(req, res) {
        try {
            const incomeTransactions = await Transaction.find({ type: 'income' });
            const expenseTransactions = await Transaction.find({ type: 'expense' });
            const totalIncome = incomeTransactions.reduce((total, transaction) => total + transaction.amount, 0);
            const totalExpenses = expenseTransactions.reduce((total, transaction) => total + transaction.amount, 0);
            const result = totalIncome - totalExpenses;
            res.json({ totalIncome, totalExpenses, result });
        } catch (error) {
            console.error(`Error calculating total income minus expenses: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async getAverageMonthlyExpense(req, res) {
        try {
            const allExpenseTransactions = await Transaction.find({ type: 'expense' });
    
            const monthlyExpenses = allExpenseTransactions.reduce((acc, transaction) => {
                const month = new Date(transaction.date).getMonth();
                acc[month] = (acc[month] || { total: 0, count: 0 });
                acc[month].total += transaction.amount;
                acc[month].count += 1;
                return acc;
            }, {});
    
            const monthlyAverages = Object.entries(monthlyExpenses).map(([_, data]) => ({
                month: _,
                average: data.total / data.count,
            }));
    
            const totalAverage = monthlyAverages.reduce((acc, { average }) => acc + average, 0) / monthlyAverages.length;
            
            const formattedAverage = totalAverage.toFixed(2);
            res.json({ formattedAverage });
        } catch (error) {
            console.error(`Error calculating average monthly expenses: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    
    


};

export default transactionController;
