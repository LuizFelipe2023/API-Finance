import express from 'express';
import transactionController from '../controllers/transactionsControllers.js';
import verifyToken from '../controllers/verifyToken.js';

const router = express.Router();


router.post('/create', verifyToken, transactionController.createTransaction);
router.get('/totals', verifyToken, transactionController.getTotalIncomeMinusExpenses);
router.get('/averages', verifyToken, transactionController.getAverageMonthlyExpense);
router.get('/', verifyToken, transactionController.getAllTransactions);
router.get('/:id', verifyToken, transactionController.getTransactionById);
router.put('/:id', verifyToken, transactionController.updateTransaction);
router.delete('/:id', verifyToken, transactionController.deleteTransaction);

export default router;
