import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js'
import auth from './route/auth.js'
import product from './route/product.js'
import newFeature from './route/newFeature.js'
import trendingProduct from './route/trendingProduct.js'
import banner from './route/banner.js'


//configure env
dotenv.config({path: "./config/.env"});

//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/product', product);
app.use('/api/v1/product', newFeature);
app.use('/api/v1/product', trendingProduct);
app.use('/api/v1/banner', banner);

//rest api
app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to kma-gadgets'
    })
} )


//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})