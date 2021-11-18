import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Routes import
import mimRoutes from './routes/mim.js';
import userRoutes from './routes/user.js';
import textRoutes from './routes/text.js'
dotenv.config();
// Express creation
const app = express();
app.use(express.json({
    limit: "30mb",
    extended: true
}));
app.use(express.urlencoded({
    extended: true
}));
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
// Use CORS
app.use(allowCrossDomain);
//App routes
app.use('/mim', mimRoutes);
app.use('/user', userRoutes);
app.use('/text', textRoutes);
app.get('/', (req, res) => {
    res.send('Hello from API');
})
//Connection
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));
mongoose.set('useFindAndModify', false);