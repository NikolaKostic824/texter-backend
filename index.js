import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

import Text from './model/text.js';

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
app.use(express.static(
    path.resolve('../client/public/index.html'),
))
 const indexPath  = path.resolve('../client/public/index.html');


/*  app.get('/text/:id', (req, res, next) => {
     console.log("hit")
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        // get post info
        const {
            id
        } = req.params;
        const post = Text.findById(id);
        if(!post) return res.status(404).send("Post not found");

        // inject meta tags
        htmlData = htmlData.replace(
            "<title>React App</title>",
            `<title>${post.title}</title>`
        )
        .replace('__META_OG_TITLE__', post.title)
        .replace('__META_OG_DESCRIPTION__', post.description)
        .replace('__META_DESCRIPTION__', post.description)
        .replace('__META_OG_IMAGE__', post.thumbnail)
        return res.send(htmlData);
    });
}); */

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
