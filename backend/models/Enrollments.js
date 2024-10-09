import mongoose from "mongoose";

const enrollmentsSchema = new mongoose.Schema({
    year: { type: Number, required: true },
    month: { type: String, required:true },
    enrolled: { type: Number, required: true },
});

const Enrollments = mongoose.models.Enrollments || mongoose.model("Enrollments", enrollmentsSchema);

export default Enrollments;