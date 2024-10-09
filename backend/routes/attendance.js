import express from 'express';
import Attendance from '../models/Attendance.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', async (req, res) => {
    const attendanceData = await Attendance.findOne({current: true});
    if (attendanceData) {
      res.json(attendanceData);
    } else {
      res.status(404).json({ message: 'No data found for this year' });
    }
});

router.get('/:week', async (req, res) => {
    const { week } = req.params;
    const attendanceData = await Attendance.findOne({week: Number(week)-1});
    if (attendanceData) {
      res.json(attendanceData);
    } else {
      res.status(404).json({ message: 'No data found for this year' });
    }
});

export default router;