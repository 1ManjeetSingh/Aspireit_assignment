import express from 'express';
import Enrollments from '../models/Enrollments.js';

const router = express.Router();

router.get('/:year', async (req, res) => {
    const { year } = req.params;
    try {
      const enrollments = await Enrollments.find({ year: parseInt(year) });
      if (enrollments.length > 0) {
        res.json(enrollments);
      } else {
        res.status(404).json({ message: 'No data found for this year' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching enrollments data', error });
    }
  });

export default router;