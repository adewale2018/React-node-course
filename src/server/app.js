import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
dotenv.config();
const app = express();



app.get('/', (req, res) => {
  res.send('Today is another begining of a week, Monday...');
});




app.listen(process.env.PORT, () => {
  console.log(chalk.white.bgWhite.bold(`My Server is connected and started serving on PORT ${process.env.PORT}`));
});
