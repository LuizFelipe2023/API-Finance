import mongoose from 'mongoose';

const blacklistedTokenSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
}, { timestamps: true });

const BlacklistedToken = mongoose.model('BlacklistedToken', blacklistedTokenSchema);

export default BlacklistedToken;
