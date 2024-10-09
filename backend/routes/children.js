import express from 'express';
import Children from '../models/Children.js';

const router = express.Router();

router.get('/:year', async (req, res) => {
    const { year } = req.params;
    const childrenData = await Children.findOne({ year: Number(year) });
    if (childrenData) {
      res.json(childrenData);
    } else {
      res.status(404).json({ message: 'No data found for this year' });
    }
  });

export default router;