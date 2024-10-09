import express from 'express';
import Financial from '../models/Financial.js';

const router = express.Router();

router.get('/last30days', async (req, res) => {
    try {
        const today = new Date();

        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30);

        const financialData = await Financial.find({
            day: {
                $gte: thirtyDaysAgo,  // No need for string formatting
                $lte: today
            }
        });

        // Calculate the total revenue and expenses
        const totalRevenue = financialData.reduce((sum, record) => sum + record.revenue, 0);
        const totalExpenses = financialData.reduce((sum, record) => sum + record.expense, 0);

        res.json({
            totalRevenue,
            totalExpenses,
            financialData
        });
    } catch (error) {
        console.error('Error fetching financial data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;