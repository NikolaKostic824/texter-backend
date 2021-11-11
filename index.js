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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
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