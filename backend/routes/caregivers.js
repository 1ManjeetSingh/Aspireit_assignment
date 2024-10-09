import express from 'express';
import Caregivers from '../models/Caregivers.js';

const router = express.Router();

router.get('/:year', async (req, res) => {
    const { year } = req.params;
    const caregiversData = await Caregivers.findOne({ year: Number(year) });
    if (caregiversData) {
      res.json(caregiversData);
    } else {
      res.status(404).json({ message: 'No data found for this year' });
    }
  });

export default router;