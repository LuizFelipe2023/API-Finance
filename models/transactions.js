import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
      type: {type: String, required: true, enum :['income','expense']},
      amount: {type: Number, required: true},
      category: {type: String, required: true},
      description: {type: String},
      date: {type: Date, default: Date.now},
});

const Transaction = mongoose.model('Transaction',transactionSchema);

export default Transaction;
