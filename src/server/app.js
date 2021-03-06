import express from 'express';
const app = express();
import dotenv from 'dotenv';
import chalk from 'chalk';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressValidator from 'express-validator';

dotenv.config();

//connection to database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
.then(() => console.log('Successfully connected to database'))

mongoose.connection.on('error', err => {
  if(err) {
    console.log('There is DB connection Error: ' + err.message);
  }
});

// Route
import routes from './routes'

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(expressValidator());
app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(chalk.white.bgWhite.bold(`My Server is connected and started serving on PORT ${process.env.PORT}`));
});
