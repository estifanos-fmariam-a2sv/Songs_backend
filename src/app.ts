import * as dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/database';
import userRoute from './routes/userRoute'

// Load environment variables
dotenv.config();

connectDB();

// Setup Express.js app

const app = express();
const port = 3000;

app.use(express.json());
app.use('/user', userRoute)


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});