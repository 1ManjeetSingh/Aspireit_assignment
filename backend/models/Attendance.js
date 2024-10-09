import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    week: { type: Number, required: true },
    onTime: { type: Number, required: true },
    lateAttendance: { type: Number, required: true },
    dayOff: { type: Number, required: true },
    notPresent: { type: Number, required: true },
    current: { type: Boolean, default: false }
});

const Attendance = mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);

export default Attendance;
