import express from 'express';
import connectToDatabase from './database_connection/db.js';
import router from './routes/transactionsRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
app.use(express.json());

connectToDatabase();

app.use('/users',userRouter);
app.use('/transactions', router);

app.listen(3000,()=>{
    console.log("O servidor estar rodando na porta local: http://localhost:3000");
});

