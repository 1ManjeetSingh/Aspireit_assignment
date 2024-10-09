import mongoose from "mongoose";

const caregiversSchema = new mongoose.Schema({
    year: { type: Number, required: true },
    registered: { type: Number, required: true },
    active: { type: Number, required: true },
    inactive: { type: Number, required: true },
});

const Caregivers = mongoose.models.Caregivers || mongoose.model("Caregivers", caregiversSchema);

export default Caregivers;
