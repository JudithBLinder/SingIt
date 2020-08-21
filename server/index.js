const path = require('path');
const chalk = require('chalk');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const DIST_PATH = path.join(__dirname, '../dist');
const PUBLIC_PATH = path.join(__dirname, '../public');

app.use(express.json());

app.use('/dist', express.static(DIST_PATH));
app.use(express.static(PUBLIC_PATH));

const startServer = () => {
  return new Promise((res) => {
    app.listen(PORT, () => {
      console.log(chalk.green(`App is now listening to PORT:${PORT}`));
    });
    res();
  });
};

module.exports = {
  startServer,
  app,
};


const startApplication = async () => {
  await startServer();
};

startApplication();
