import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const dbUser = process.env.db_user;
const dbpassword = process.env.db_password;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbpassword}@cluster0.gh1cicg.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Conectado ao MongoDB");
  } catch (err) {
    console.error(`Erro de conexão ao MongoDB: ${err.message}`);
  }
};

export default connectToDatabase;
