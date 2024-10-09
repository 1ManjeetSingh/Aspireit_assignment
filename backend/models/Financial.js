import mongoose from "mongoose";

const financialSchema = new mongoose.Schema({
    day: { type: Date, required: true },
    expense: { type: Number, required: true },
    revenue: { type: Number, required: true },
});

const Financial = mongoose.models.Financial || mongoose.model("Financial", financialSchema);

export default Financial;
