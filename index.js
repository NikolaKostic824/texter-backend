import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//Routes import
import mimRoutes from './routes/mim.js';
import userRoutes from './routes/user.js';
import textRoutes from './routes/text.js'

// Express creation
const app = express();
dotenv.config();
app.use(express.json({
    limit: "30mb",
    extended: true
}));
app.use(express.urlencoded({
    limit: "30mb",
    extended: true
}));

//CORS
app.use(cors());

//App routes
app.use('/mim', mimRoutes);
app.use('/user', userRoutes);
app.use('/text', textRoutes);

app.get('/',(req,res) => {
    res.send('Hello from API');
})

//Connection
//const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);