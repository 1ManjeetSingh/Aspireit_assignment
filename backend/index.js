import express from 'express';
import connectDB from './config/db.js';
import childrenRoutes from './routes/children.js';
import caregiversRoutes from './routes/caregivers.js';
import financialRoutes from './routes/financial.js';
import attendanceRoutes from './routes/attendance.js';
import enrollmentsRoutes from './routes/enrollments.js';
import authRoutes from './routes/auth.js'; 
import authenticateJWT from './middlewares/auth.js';

const app = express();
const PORT = 5000;

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

// app.use('/api',authenticateJWT);

app.use('/api/children', childrenRoutes);
app.use('/api/caregivers', caregiversRoutes); 
app.use('/api/financial', financialRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/enrollments', enrollmentsRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});