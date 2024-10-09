import mongoose from "mongoose";

const childrenSchema = new mongoose.Schema({
    year: { type: Number, required: true },
    registered: { type: Number, required: true },
    active: { type: Number, required: true },
    inactive: { type: Number, required: true },
});

const Children = mongoose.models.Children || mongoose.model("Children", childrenSchema);

export default Children;
